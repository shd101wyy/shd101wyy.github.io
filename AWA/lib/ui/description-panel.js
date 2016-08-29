import Simple from '../Simple/Simple'
import {text} from '../engine/text'

import emitter from './emitter'

emitter.on('description-panel-connect', function(data, component) {
  this.setState({descriptionPanelComponent: component})
})

emitter.on('description-panel-set-hint', function(data) {
  // console.log('set hint', data)
  this.state.descriptionPanelComponent.setProps({hint: data})
})

let DescriptionPanel = Simple.Component({
  emitter: emitter,
  getDefaultProps() {
    return {
      hint: null //
    }
  },

  init() {
    this.emit('description-panel-connect')
  },

  render() {
    if (!this.props.hint) return this.div() // return null
    let subject = text({cn: '你看见了 ', en: 'You see'})
    return this.div({class:'description-panel'}, subject + this.props.hint)
  }
})

export default DescriptionPanel
