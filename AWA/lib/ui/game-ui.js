import Simple from '../Simple/Simple'

import MainMenu from './main-menu'
import NewAdventureUI from './new-adventure-ui'
import MapUI from './map-ui.js'

let GameUI = Simple.Component({
  init: function() {
    this.state = {
      /**
       * page
       *
       * MAIN_MENU
       * NEW_ADVENTURE_UI
       * MAP_UI
       */
      page: 'MAIN_MENU'
    }
  },
  render: function() {
    switch (this.state.page) {
      case 'MAIN_MENU':
        return MainMenu()
      case 'NEW_ADVENTURE_UI':
        return NewAdventureUI()
      case 'MAP_UI':
        return MapUI()
      default:
        throw 'GameUI Error: Invalid page'
    }
  }
})

export default GameUI
