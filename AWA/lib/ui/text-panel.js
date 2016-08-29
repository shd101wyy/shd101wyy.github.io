import Simple from '../Simple/Simple'
import emitter from './emitter'

emitter.on('text-panel-connect', function(data, component) {
  this.setState({textPanelComponent: component})
})

emitter.on('text-panel-show', function({texts=[], options=[]}) {
  this.state.textPanelComponent.setProps({
    texts: texts,
    display: 'block',
    offset: 0,
    options: options,
    optionOffset: 0
  })
  this.state.textPanelComponent.bindKeyboardEvent()
})

let TextPanel = Simple.Component({
  emitter: emitter,
  getDefaultProps: function() {
    return {
      texts: ['这是对话框'],
      display: 'none',
      offset: 0,
      options: [],
      optionOffset: 0
    }
  },
  init: function() {
    this.emit('text-panel-connect')
  },
  bindKeyboardEvent: function() {
    GameManager.Keyboard.setEvent(this.keyboardEvent.bind(this))
  },
  keyboardEvent: function(e) {
    let code = e.which
    // console.log(code)
    let options = this.props.options

    if (options.length) {
      let optionOffset = this.props.optionOffset

      for (let i = 0; i < options.length; i++) {
        if (code === 65 + i) {
          this.emit('text-panel-done', i)
          this.setProps({display: 'none'})
        }
      }

      if (code === GameManager.Keyboard.keyCode.DOWN) {
        optionOffset = (optionOffset + 1) % options.length
        this.setProps({optionOffset})
      } else if (code === GameManager.Keyboard.keyCode.UP) {
        optionOffset = optionOffset - 1
        if (optionOffset < 0) {
          optionOffset = options.length - 1
        }
        this.setProps({optionOffset})
      } else if (code === GameManager.Keyboard.keyCode.ENTER) {
        this.emit('text-panel-done', this.props.optionOffset)
        this.setProps({display: 'none'})
      }


      /**
      if (code === GameManager.Keyboard.keyCode.ESC) {
        this.emit('text-panel-done', -1) // -1 means esc
      }
      */
    } else if (code === GameManager.Keyboard.keyCode.ENTER) { // z enter
      this.nextText()
    }
  },
  nextText() {
    let offset = this.props.offset
    offset += 1
    if (offset >= this.props.texts.length) {
      this.emit('text-panel-done')
      this.setProps({display: 'none'})
    } else {
      this.setProps({offset})
    }
  },
  handleClick() {
    if (this.props.display === 'none') return false // not block
    if (!this.props.options.length) {
      this.nextText()
      return true
    }

    return true
  },
  chooseOption(optionOffset) {
    this.emit('text-panel-done', optionOffset)
    this.setProps({display: 'none'})
  },
  mouseEnter(optionOffset) {
    this.setProps({optionOffset})
  },
  render() {
    let texts = this.props.texts,
        offset = this.props.offset,
        text = texts[offset],
        options = this.props.options

    // format text
    texts = text.split('\n')
    if (texts[0].trim().length === 0) texts.splice(0, 1)
    let textHTML = texts.join('<br>')

    if (options.length) {
      let optionsDiv = []
      for (let i = 0; i < options.length; i++) {
        optionsDiv.push(
          this.div({class: 'option' + (i === this.props.optionOffset ? ' selected' : ''), click: this.chooseOption.bind(this, i), mouseenter: this.mouseEnter.bind(this, i)},
            this.span({class: 'key'}, `[${String.fromCharCode(65+i).toLowerCase()}] `),
            this.span({class: 'content'}, options[i])))
      }
      return this.div({class: 'text-panel', style: {display: this.props.display}},
        this.div({class: 'content-opt', html: textHTML}),
        this.div({class: 'options'}, optionsDiv))
    } else {
      return this.div({class: 'text-panel', style: {display: this.props.display}, click: this.nextText.bind(this)},
        this.div({class: 'content', html: textHTML}),
        this.div({class: 'key-hint'},
          '[enter] 继续'))
    }
  }
})

export default TextPanel
