import emitter from '../ui/emitter'
import NPC from './npc'

/**
 * check npc.js for more information
 */
class Player extends NPC {
  constructor(data) {
    super(data)
    this.addType('player')
    this.setPosition(0, 0)

    this.slotCount = 2 // how many hands? normally 2: left hand and right hand

    this.itemStacksOnHand = {} // TODO: 6 item stacks now.
                               // key: item id
                               // value: {offset: num, itemStack}
    this.selectedItemStackOffset = 0
  }

  setPosition(x, y) {
    this.x = x
    this.y = y

    this.relativeX = GameManager.DISPLAY_WIDTH / 2 - x
    this.relativeY = GameManager.DISPLAY_HEIGHT / 2 - y
  }

  setItemStackOnHand(itemStack, offset) {
    let o = this.getItemStackOnHand(offset)
    if (o) { // this offset already has item stack
      delete(this.itemStacksOnHand[o.id])

      if (o.id === itemStack.id) { // toggle
        emitter.emit('bottom-panel-force-update')
        return
      }
    }

    this.itemStacksOnHand[itemStack.id] = {offset, itemStack}
    emitter.emit('bottom-panel-force-update')
  }

  getItemStackOnHand(offset) {
    for (let itemKey in this.itemStacksOnHand) {
      let data = this.itemStacksOnHand[itemKey]
      if (offset === data.offset) {
        return data.itemStack
      }
    }
    return null
  }

  cleanItemStacksOnHand() {
    for (let itemKey in this.itemStacksOnHand) {
      if (this.itemStacksOnHand[itemKey].itemStack.num <= 0) {
        delete(this.itemStacksOnHand[itemKey])
      }
    }
    emitter.emit('bottom-panel-force-update')
  }

  addItem(itemID, num=1) {
    this.inventory.addItem({id: itemID, num})
  }

  act() {
    GameManager.engine.lock()

    GameManager.Map.draw({needToRunEvents: false})

    /* wait for user input; do stuff when user hits a key */
    window.addEventListener("keydown", this)

    emitter.emit('left-panel-show-npcs-info')
    // emitter.emit('map-ui-force-update') // 这个会造成 left-panel 显示不了 npcs

    this.checkStates()
  }

  handleEvent(e) {
    let textPanel = document.getElementsByClassName('text-panel')[0]
    if (textPanel && textPanel.style.display !== "none") {
      return
    }
    let code = e.which

    let keyMap = {}

    //keyMap[38] = 0 // up
    keyMap[87] = 0 // w
    keyMap[33] = 1
    //keyMap[39] = 2 // right
    keyMap[68] = 2 // d
    keyMap[34] = 3
    //keyMap[40] = 4 // down
    keyMap[83] = 4 // s
    keyMap[35] = 5
    //keyMap[37] = 6 // left
    keyMap[65] = 6 // a
    keyMap[36] = 7

    if (!(code in keyMap)) return

    let dir = keyMap[code]

    if (this.hasState('chaotic')) { // chaotic, can't control move direction
      dir = Math.floor(Math.random() * 8)
    }

    let diff = ROT.DIRS[8][dir]
    let targetX = this.x + diff[0]
    let targetY = this.y + diff[1]

    this.handleClick(targetX, targetY)
  }

  handleClick(targetX, targetY) {
    let textPanelComponent = emitter.state.textPanelComponent
    if (textPanelComponent.handleClick()) return

    // TODO 现在只能移动一格
    if (Math.abs(targetX - this.x) >= 1.5 || Math.abs(targetY - this.y) >= 1.5) return

    let tiles = GameManager.Map.objectToBeRendered[`${targetX},${targetY}`]
    if (!tiles || !tiles.length) { return }
    let passable = !tiles.filter(tile => !tile.passable).length

    if (passable) {
      this.setPosition(targetX, targetY)
      GameManager.Map.draw({isActionButton: false, targetPos: {x:targetX, y:targetY}, needToRunEvents: true})
    } else { // action button
      // check normal attack to hostile npcs
      let normalAttack = GameManager.Database.getSkill('normal-attack')
      let tiles = GameManager.Map.renderedTiles[`${targetX},${targetY}`]
      if (tiles && tiles.length && tiles[tiles.length-1].gameObject) {
        let b = tiles[tiles.length-1].gameObject
        if (b.isOfType('npc') && b.hasState('hostile') && normalAttack.condition({a: this, b})) {
          normalAttack.act({a: this, b})
        }
      }

      GameManager.Map.draw({isActionButton: true, targetPos: {x:targetX, y:targetY}, needToRunEvents: true})
    }

    // rerender mouse-panel
    emitter.emit('mouse-panel-rerender')

    window.removeEventListener('keydown', this)
    GameManager.engine.unlock()
  }

  isPlayer() {
    return true
  }

  isNPC() {
    return false
  }
}

export default Player
