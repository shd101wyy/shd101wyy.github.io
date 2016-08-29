import Simple from '../Simple/Simple'

let MainMenu = Simple.Component({
  init: function() {
    // GameManager.Keyboard.setEvent(this.keyboardEvent.bind(this))
  },
  /*
  keyboardEvent: function(e) {
    let code = e.which
    if (code === 90) { // z
      console.log('start game')
      // GameManager.gameUI.setState({page: 'NEW_ADVENTURE_UI'})
    } else if (code === 88) { // x
      console.log('load game')
      // GameManager.gameUI.setState({page: 'MAP_UI'})
    } else if (code === 67) { // c
      console.log('exit game')
    } else if (code === GameManager.Keyboard.keyCode.t) {
      this.tutorial()
    }
  },
  */
  tutorial() {
    GameManager.gameUI.setState({page: 'MAP_UI'})
    GameManager.Map.drawMapById('tutorial', 'spawn-point')
  },
  render: function() {
    return this.div({class: 'main-menu'},
            this.div({class: 'title'}, '异世界冒险奇谭：曙光计划'),
            this.div({class: 'start-game option'}, '新的冒险'),
            this.div({class: 'load-game option'}, '旧的回忆'),
            this.div({class: 'tutorial option', click: this.tutorial.bind(this)}, '进行教程' ),
            this.div({class: 'exit-game option'}, '回到现实'),
            this.div({class: 'version'}, 'Version 0.0.01')
          )
  }
})

export default MainMenu
