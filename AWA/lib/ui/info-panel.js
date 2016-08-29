/**
 * Show
 * 	Player Info
 * 	Skills
 * 	Items
 * 	Equipments
 * 	Study:    study skills
 *
 */
import Simple from '../Simple/Simple'
import emitter from './emitter'

let InventoryPanel = Simple.Component({
  getDefaultProps() {
    return {
      inventory: null // Inventory class
    }
  },
  init() {
    this.state = {
      selectedItemStackOffset: 0
    }
    this.keydown = this.keydown.bind(this)
    this.selectedItemStack = null
  },
  mount() {
    window.addEventListener('keydown', this.keydown)
  },
  unmount() {
    window.removeEventListener('keydown', this.keydown)
  },
  selectItem(offset, itemStack) {
    this.setState({selectedItemStackOffset: offset})
  },
  keydown(e) {
    let code = e.which
    if (code >= GameManager.Keyboard.keyCode.NUM_1 &&
        code <= GameManager.Keyboard.keyCode.NUM_6) {
      let offset = code - GameManager.Keyboard.keyCode.NUM_1
      GameManager.player.setItemStackOnHand(this.selectedItemStack, offset)
      this.forceUpdate()
    }
  },
  render() {
    if (!this.props.inventory) {
      throw 'Error InventoryPanel: no inventory provided.'
    }
    let itemStacks = this.props.inventory.itemStacks
    let selectedItemStackOffset = this.state.selectedItemStackOffset
    let player = GameManager.player

    let itemsDiv = []
    let offset = 0
    let selectedItem = null
    for(let itemKey in itemStacks) {
      let itemStack = itemStacks[itemKey]
      let item = itemStack.item
      let num = itemStack.num

      let onHandOffset = null
      if (itemStack.id in player.itemStacksOnHand) {
        onHandOffset = this.div({class: 'offset'}, `[${player.itemStacksOnHand[itemStack.id].offset + 1}]`)
      }

      itemsDiv.push(
        this.div({class: {'item': true, 'selected': selectedItemStackOffset === offset},
                  click: this.selectItem.bind(this, offset, itemStack)},
          this.div({class: 'name'}, num + ' ' + item.name),
          onHandOffset,
          this.div({class: 'weight'}, item.weight * num + ' kg'))
      )

      if (selectedItemStackOffset === offset) {
        selectedItem = item
        this.selectedItemStack = itemStack
      }

      offset += 1
    }

    return this.div({class: 'inventory-panel'},
      this.div({class: 'left'},
        this.div({class: 'inventory-titles'},
          this.div({class: 'title-left'}, '名称'),
          this.div({class: 'title-right'}, '重量')),
        this.div({class: 'items-list'},
          // item
          itemsDiv
        )
      ),
      this.div({class: 'right'},
        // description
        this.div({class: 'description'},
          this.div({class: 'title'}, '说明'), selectedItem.description),
        // keyboard
        this.div({class: 'keyboard-hint'}, '键盘数字 [1]~[6] 将道具拿在手中。')
      )
    )
  }
})







emitter.on('info-panel-connect', function(data, component) {
  this.setState({infoPanelComponent: component})
})

emitter.on('info-panel-show', function(data, component) {
  this.state.infoPanelComponent.setProps({display: 'block'})
})

emitter.on('info-panel-hide', function(data, component) {
  this.state.infoPanelComponent.setProps({display: 'none'})
})

let InfoPanel = Simple.Component({
  emitter,
  init() {
    this.state = {
      selectedPanelOffset: 0
    }
    this.emit('info-panel-connect')
    this.keydown = this.keydown.bind(this)
  },
  getDefaultProps() {
    return {display: 'none'}
  },
  mount() {
    window.addEventListener('keydown', this.keydown)
  },
  unmount() {
    window.removeEventListener('keydown', this.keydown)
  },
  keydown(evt) {
    let code = evt.which
    if (code === GameManager.Keyboard.keyCode.ESC) {
      this.setProps({display: 'none'})
    } else if (code === GameManager.Keyboard.keyCode.e) {
      if (this.props.display === 'none') {
        this.setProps({display: 'block'})
      } else {
        this.setProps({display: 'none'})
      }
    }
  },
  setSelectedPanel(offset) {
    this.setState({selectedPanelOffset: offset})
  },
  render() {
    if (this.props.display === 'none') return this.div()

    let selectedPanelOffset = this.state.selectedPanelOffset
    let panel = null

    if (selectedPanelOffset === 2) { // 道具
      panel = InventoryPanel({inventory: GameManager.player.inventory})
    }
    return this.div({class: 'info-panel'},
      this.div({class: 'titles'},
        this.div({class: {'title': true, 'selected': selectedPanelOffset === 0},
                  click: this.setSelectedPanel.bind(this, 0)}, '人物'),
        this.div({class: {'title': true, 'selected': selectedPanelOffset === 1},
                  click: this.setSelectedPanel.bind(this, 1)}, '技能'),
        this.div({class: {'title': true, 'selected': selectedPanelOffset === 2},
                  click: this.setSelectedPanel.bind(this, 2)}, '道具'),
        this.div({class: {'title': true, 'selected': selectedPanelOffset === 3},
                  click: this.setSelectedPanel.bind(this, 3)}, '装备'),
        this.div({class: {'title': true, 'selected': selectedPanelOffset === 4},
                  click: this.setSelectedPanel.bind(this, 4)}, '学习'),
        this.div({class: {'title': true, 'selected': selectedPanelOffset === 5},
                  click: this.setSelectedPanel.bind(this, 5)}, '菜单')
      ),
      this.div({class: 'panel'}, panel)
    )
  }
})

export default InfoPanel
