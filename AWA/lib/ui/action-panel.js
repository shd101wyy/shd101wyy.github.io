import Simple from '../Simple/Simple'
import emitter from './emitter'

import {text} from '../engine/utility'

emitter.on('action-panel-connect', function(data, component) {
  this.setState({actionPanelComponent: component})
})

emitter.on('action-panel-show-actions', function({actions, itemActions, skills, itemStack, event, a, b, targetX, targetY}) {
  this.state.actionPanelComponent.setProps({actions, itemActions, skills, itemStack, a, b, targetX, targetY, event, display: 'block'})
})

let ActionPanel = Simple.Component({
  emitter,
  getDefaultProps() {
    return {
      actions: [],
      itemActions: [],
      skills: [],
      a: null,
      b: null,
      itemStack: null,
      targetX: null,
      targetY: null,
      display: 'none',
      event: null
    }
  },
  init() {
    this.emit('action-panel-connect')
  },

  mount() {
    // console.log('mount action-panel')
    window.addEventListener('keydown', this.keydown.bind(this))
  },
  unmount() {
    // console.log('unmount action-panel')
    window.removeEventListener('keydown', this.keydown.bind(this))
  },
  keydown() {
    if (this.props.display !== 'none') {
      this.setProps({display: 'none'})
    }
  },
  close() {
    this.setProps({display: 'none'})
  },
  performAction(action) {
    let a = this.props.a,
        b = this.props.b,
        targetX = this.props.targetX,
        targetY = this.props.targetY

    if (action.act) {
      if ( action.act({a, b, targetX, targetY}) ) {
        GameManager.engine.unlock()
      }
      this.setProps({display: 'none'})
    }
  },
  performItemAction(action) {
    let a = this.props.a,
        itemStack = this.props.itemStack,
        targetX = this.props.targetX,
        targetY = this.props.targetY,
        item = itemStack.item

    if (action.act) {
      if (action.act({a, b: item, targetX, targetY})) {
        GameManager.engine.unlock()
      }
      if (item.consumable) {
        a.removeItem(itemStack, 1) // TODO: 枪 消耗 子弹。
        a.cleanItemStacksOnHand()
        this.emit('left-panel-force-update')
      }
    }
    this.setProps({display: 'none'})
  },
  performSkill(skill) {
    const {a, b, targetX, targetY} = this.props
    let ScopeTypes = GameManager.Database.Types.ScopeTypes

    if(skill.act({a, b, targetX, targetY})) {
      GameManager.engine.unlock()
    }

    this.emit('left-panel-force-update')
    this.setProps({display: 'none'})
  },
  render() {
    if (this.props.display === 'none')
      return this.div()
    else {
      let target = this.props.event.target,
          itemStack = this.props.itemStack,
          b = this.props.b

      let actionsDiv = null
      if (this.props.actions.length) {
        actionsDiv = this.div({class: 'action-div'},
                        this.div({class: 'title'}, b.name || '对象'),
                        this.props.actions.map( action => this.div({class: 'action', click: this.performAction.bind(this, action)}, action.name)))
      }

      let itemActionsDiv = null
      if (this.props.itemActions.length) {
        itemActionsDiv = this.div({class: 'item-action-div'},
                            this.div({class: 'title'}, itemStack.item.name),
                            this.props.itemActions.map( action => this.div({class: 'action', click: this.performItemAction.bind(this, action)}, action.name)))
      }

      let skillsDiv = null
      if (this.props.skills.length) {
        skillsDiv = this.div({class: 'skills-div'},
                      this.div({class: 'title'}, text({cn: '使用技能'})),
                      this.props.skills.map( skill => this.div({class: 'action', click: this.performSkill.bind(this, skill)}, skill.name)))
      }

      return this.div({class: 'action-panel', style: {display: this.props.display, left: target.offsetLeft + target.offsetWidth, top: target.offsetTop}},
              this.div({class: 'close-btn', click: this.close.bind(this)}, 'X'),
              actionsDiv,
              skillsDiv,
              itemActionsDiv)
    }
  }
})

export default ActionPanel
