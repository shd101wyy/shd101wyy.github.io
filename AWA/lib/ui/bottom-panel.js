import Simple from '../Simple/Simple'
import emitter from './emitter'

emitter.on('bottom-panel-connect', function(data, component) {
  this.setState({bottomPanelComponent: component})
})

emitter.on('bottom-panel-force-update', function() {
  this.state.bottomPanelComponent.forceUpdate()
})

let BottomPanel = Simple.Component({
  emitter,
  getDefaultProps() {
    return {
      selectedItemOffset: 0
    }
  },
  init() {
    this.emit('bottom-panel-connect')
    this.onKeydown = this.onKeydown.bind(this)
  },
  mount() {
    window.addEventListener('keydown', this.onKeydown)
  },
  unmount() {
    window.removeEventListener('keydown', this.onKeydown)
  },
  onKeydown(e) {
    let code = e.which,
        player = GameManager.player
    if (code >= GameManager.Keyboard.keyCode.NUM_1 &&
        code < GameManager.Keyboard.keyCode.NUM_1 + player.slotCount) {
      let offset = code - GameManager.Keyboard.keyCode.NUM_1
      this.setProps({selectedItemOffset: offset})

      player.selectedItemStackOffset =  offset
    }
  },
  selectItem(offset) {
    this.setProps({selectedItemOffset: offset})
  },
  toName(itemStack, offset) {
    if (!itemStack) {
      return `[${offset}] 空`
    } else {
      let num = itemStack.num,
          item = itemStack.item
      let outputStr = ''
      outputStr += item.name

      if (num !== 1) {
        outputStr += (' x ' + num)
      }
      return outputStr
    }
  },
  render() {
    let selectedItemOffset = this.props.selectedItemOffset

    let player = GameManager.player,
        slotCount = player.slotCount

    let itemStacks = []
    for (let i = 0; i < slotCount; i++) {
      itemStacks.push(player.getItemStackOnHand(i))
    }

    let slotDivs = []
    for (let i = 0; i < slotCount; i++) {
      // TODO merge slots like rifle, which takes 2 slots
      slotDivs.push(
        this.div({class: {'button': true, 'selected': selectedItemOffset === i}, click: this.selectItem.bind(this, i)},
          this.toName(itemStacks[i], i+1))
      )
    }


    return this.div({class: 'bottom-panel'},
      slotDivs
    )
  }
})

export default BottomPanel
