import Simple from '../Simple/Simple'
import emitter from './emitter'
import NPC from '../model/npc'

import ActionPanel from './action-panel'

emitter.on('mouse-panel-connect', function(data, component) {
  this.setState({mousePanelComponent: component})
})

emitter.on('mouse-panel-rerender', function() {
  let mousePanelComponent = this.state.mousePanelComponent
  mousePanelComponent.mouseEnter(mousePanelComponent.state.mouseX, mousePanelComponent.state.mouseY)
})

// a: player
emitter.on('mouse-panel-right-click', function({a, tile, event, targetX, targetY}) {
  let b = tile.gameObject
  // Actions && Item
  let actions = GameManager.Database.Actions
  let skills = a.skills
  let itemStack = a.getItemStackOnHand(a.selectedItemStackOffset)
  let actionsAvailable = []     // actions to gameObject
  let itemActionsAvailable = [] // actions to item
  let skillsAvailable = []      // skills

  for (let actID in actions) {
    let action = actions[actID]
    if (b && action.canAct({a, b, targetX, targetY})) { // for action, b has to be a gameObject
      actionsAvailable.push(action)
    }
    if (itemStack && action.canAct({a, b:itemStack.item, targetX, targetY})) {
      itemActionsAvailable.push(action)
    }
  }

  for (let skillID in skills) {
    let skill = skills[skillID].skill
    let ScopeTypes = GameManager.Database.Types.ScopeTypes
    if (skill.scope === ScopeTypes.OneEnemy &&
        b && b.isOfType('npc') && b.hasState('hostile') &&
        skill.condition({a, b})) {
      skillsAvailable.push(skill)
    }
  }

  if (actionsAvailable.length || itemActionsAvailable.length || skillsAvailable.length) {
    emitter.emit('action-panel-show-actions', { actions: actionsAvailable,
                                                itemActions: itemActionsAvailable,
                                                skills: skillsAvailable,
                                                itemStack,
                                                event, a, b, targetX, targetY})
  }
})

emitter.on('mouse-panel-highlight-npc', function(npc) {
  this.state.mousePanelComponent.setProps({npc})
})

emitter.on('mouse-panel-remove-npc-highlight', function() {
  this.state.mousePanelComponent.setProps({npc: null})
})

let MousePanel = Simple.Component({
  emitter: emitter,
  getDefaultProps() {
    return {
      npc: null
    }
  },
  init() {
    this.emit('mouse-panel-connect')
    this.state = {
      mouseX: 0,
      mouseY: 0
    }
  },
  mount() {
    window.addEventListener('resize', this.windowResize.bind(this))
  },
  windowResize() {
    this.forceUpdate() // make div size matches canvas size
  },
  mouseEnter(x, y) {
    let player = GameManager.player,
        targetX = x - player.relativeX,
        targetY = y - player.relativeY

    this.state.mouseX = x
    this.state.mouseY = y

    let tiles = GameManager.Map.renderedTiles[targetX + ',' + targetY]
    if (!tiles) {
      return this.emit('description-panel-set-hint', null)
    }
    let tile = tiles[tiles.length - 1] // GameManager.Map.getTopRenderedObject(targetX, targetY)
    if (tile && tile.description) {
      if (tile.type === 'player' && tiles[tiles.length - 2] && tiles[tiles.length - 2].description) {
        this.emit('description-panel-set-hint', tile.description+'，正站在 '+tiles[tiles.length - 2].description)
      } else {
        let description = tile.description
        if (tile.gameObject && tile.gameObject.name) {
          description = tile.gameObject.name
        }
        this.emit('description-panel-set-hint', description)
      }
    } else {
      this.emit('description-panel-set-hint', null)
    }

    if (tile && tile.gameObject && tile.gameObject instanceof NPC) {
      this.emit('left-panel-set-selected-gameObject', tile.gameObject)
    } else {
      this.emit('left-panel-set-selected-gameObject', null)
    }
  },
  mouseClick(x, y) {
    let player = GameManager.player,
        targetX = x - player.relativeX,
        targetY = y - player.relativeY
    GameManager.player.handleClick(targetX, targetY)
  },
  mouseRightClick(x, y) {
    let event = window.event
    event.preventDefault()

    let player = GameManager.player,
        targetX = x - player.relativeX,
        targetY = y - player.relativeY

    let tiles = GameManager.Map.renderedTiles[targetX + ',' + targetY]
    if (!tiles || !tiles.length) return
    let tile = tiles[tiles.length - 1]

    this.emit('mouse-panel-right-click', {  a: player,
                                            tile: tile,
                                            // b: tile.gameObject,
                                            event: event,
                                            targetX,
                                            targetY })
  },
  render() {
    let canvas = GameManager.canvas,
        width = canvas.offsetWidth,
        height = canvas.offsetHeight,
        displayWidth = GameManager.DISPLAY_WIDTH,
        displayHeight = GameManager.DISPLAY_HEIGHT,
        tileWidth = width / displayWidth,
        tileHeight = height / displayHeight,
        player = GameManager.player

    let npc = this.props.npc,
        npcScreenX = null,
        npcScreenY = null
    if (npc) {
      npcScreenX = npc.x + player.relativeX
      npcScreenY = npc.y + player.relativeY
    }

    let tiles = []
    for (let j = 0; j < displayHeight; j++) {
      let r = []
      for (let i = 0; i < displayWidth; i++) {
        let highlight = ((npcScreenX === i) && (npcScreenY === j))
        r.push(
          this.div({
            class: 'tile' + (highlight ? ' highlight':''),
            style: {width: tileWidth, height: tileHeight},
            mouseenter: this.mouseEnter.bind(this, i, j),
            click: this.mouseClick.bind(this, i, j),
            contextmenu: this.mouseRightClick.bind(this, i, j)
          })
        )
      }
      let row = this.div({class: 'row'}, r)
      tiles.push(row)
    }

    return this.div({class: 'mouse-panel', style: {width}}, tiles, ActionPanel())
  }
})

export default MousePanel
