import Simple from '../Simple/Simple'
import Bar from './bar'
import emitter from './emitter'

emitter.on('left-panel-connect', function(data, component) {
  this.setState({leftPanelComponent: component})
})

emitter.on('left-panel-set-selected-gameObject', function(gameObject) {
  this.state.leftPanelComponent.setProps({selectedGameObject: gameObject})
})

emitter.on('left-panel-force-update', function(gameObject) {
  this.state.leftPanelComponent.forceUpdate()
})

emitter.on('left-panel-show-npcs-info', function() {
  let player = GameManager.player
  let npcs = GameManager.Map.npcsInView

  let data = []
  for (let coordKey in npcs) {
    let coord = coordKey.split(','),
        x = parseInt(coord[0]),
        y = parseInt(coord[1]),
        npc = npcs[coordKey]

    let dist = npc.dist(player)
    data.push([npc, dist])
  }
  npcs = data.sort(function(a, b) {return a[1] > b[1]}).map(d=>d[0])
  if (this.state.leftPanelComponent) {
    this.state.leftPanelComponent.setProps({npcs})
  }
})

let States = Simple.Component({
  getDefaultProps() {
    return {states: {}} // check npc.js this.states
  },
  render() {
    let states = this.props.states
    let arr = []
    for (let stateID in states) {
      let state = states[stateID].state,
          restDuration = states[stateID].restDuration
      arr.push([state, restDuration])
    }
    arr = arr.sort((a, b)=> a[1] < b[1]) // sorted by restDuration.
    let statesDiv = arr.map( o => {
      let state = o[0]
      return this.div({class: 'state ' + state.type}, state.name)
    })
    return this.div({class:'states'}, statesDiv)
  }
})

let NPCInfo = Simple.Component({
  emitter: emitter,
  getDefaultProps() {
    return {
      npc: null, // NPC,
      hover: false
    }
  },
  mouseEnter() {
    let npc = this.props.npc,
        x = npc.x,
        y = npc.y
    this.emit('mouse-panel-highlight-npc', npc)
  },
  mouseLeave() {
    this.emit('mouse-panel-remove-npc-highlight', npc)
  },
  render() {
    let npc = this.props.npc
    let hp = npc.getStat('hp'),
        currentHP = npc.getStat('currentHP')

    return this.div({ class: 'player-info' + (this.props.hover ? ' hover' : ''),
                      mouseenter: this.mouseEnter.bind(this),
                      mouseleave: this.mouseLeave.bind(this)},
      this.div({class: 'name'}, npc.name),

      // HP
      Bar({ value: currentHP,
            maxValue: hp,
            info: `HP: ${Math.ceil(currentHP)}/${hp}`,
            backgroundColor: '#d23b30'}),

      // States
      States({states: npc.states})
    )
  }
})

let PlayerInfo = Simple.Component({
  emitter: emitter,
  mouseEnter() {
    this.emit('mouse-panel-highlight-npc', GameManager.player)
  },
  mouseLeave() {
    this.emit('mouse-panel-remove-npc-highlight', GameManager.player)
  },
  click() {
    this.emit('info-panel-show')
  },
  render() {
    let player = GameManager.player

    let hp = player.getStat('hp'),
        currentHP = player.getStat('currentHP'),
        mp = player.getStat('mp'),
        currentMP = player.getStat('currentMP'),
        ep = player.getStat('ep'),
        currentEP = player.getStat('currentEP')

    return this.div({ class: 'player-info',
                      mouseenter: this.mouseEnter.bind(this),
                      mouseleave: this.mouseLeave.bind(this),
                      click: this.click.bind(this)},
      this.div({class: 'name'}, '@: 王一祎'),

      // HP, MP, EP
      Bar({ value: currentHP,
            maxValue: hp,
            info: `HP: ${Math.ceil(currentHP)}/${hp}`,
            backgroundColor: '#d23b30'}),
      Bar({ value: currentMP,
            maxValue: mp,
            info: `MP: ${Math.ceil(currentMP)}/${mp}`,
            backgroundColor: '#3474a8'}),
      Bar({ value: currentEP,
            maxValue: ep,
            info: `EP: ${Math.ceil(currentEP)}/${ep}`,
            backgroundColor: '#6c933f'}),

      // States
      States({states: player.states})
      // GOLD, SKILL-POINT
      //this.div({class: 'gold'}, `金币: ${gold}`),
      //this.div({class: 'skill-point'}, `白金币: ${sp}`)
    )
  }
})

let LeftPanel = Simple.Component({
  emitter: emitter,
  getDefaultProps() {
    return {
      selectedGameObject: null,
      npcs: []
    }
  },
  init() {
    this.emit('left-panel-connect')
  },
  render: function() {
    return this.div({class: 'left-panel'},
            PlayerInfo(),
            this.props.npcs.map(npc =>
              NPCInfo({npc, hover: this.props.selectedGameObject === npc}))
            // (this.props.selectedGameObject ? NPCInfo({npc: this.props.selectedGameObject, hover: true}) : null)
          )
  }
})

export default LeftPanel
