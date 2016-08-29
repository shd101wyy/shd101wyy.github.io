import Simple from '../Simple/Simple'

import emitter from './emitter'

import PlayerInfoUI from './player-info-ui'
import SkillInfoUI from './skill-info-ui'
import HelpInfoUI from './help-info-ui'
import HistoryPanel from './history-panel'
import TextPanel from './text-panel'
import DescriptionPanel from './description-panel'
import LeftPanel from './left-panel'
import MousePanel from './mouse-panel'
import BottomPanel from './bottom-panel'
import InfoPanel from './info-panel'

emitter.on('map-ui-connect', function(data, component) {
  this.setState({mapUIComponent: component})
})

emitter.on('map-ui-bind-keyboard', function() {
  this.state.mapUIComponent.rebindKeyboardEvent()
})

let MapUI = Simple.Component({
  emitter: emitter,
  getDefaultProps: function() {
    return {
      historyLogs: [],
    }
  },
  init: function() {
    this.state = {
      showPlayerInfoUI: false,
      showSkillInfoUI: false,
      showHelpInfoUI: false,
    }
    this.emit('map-ui-connect')
    GameManager.Keyboard.setEvent(this.keyboardEvent.bind(this))
  },
  mount() {
    // console.log(this)
  },
  keyboardEvent: function(e) {
    let code = e.which
    // 每个其他的组建应该又他们自己来控制，例如查看 info-panel.js
    /*
    if (code === GameManager.Keyboard.keyCode.c) { // c
      this.setState({showPlayerInfoUI: !this.state.showPlayerInfoUI})
    } else if (code === GameManager.Keyboard.keyCode.x) { // x
      this.setState({showSkillInfoUI: !this.state.showSkillInfoUI})
    } else if (code === GameManager.Keyboard.keyCode.z) { // z

    } else if (code === GameManager.Keyboard.keyCode.QUESTION_MARK && e.shiftKey) { // ?
      this.setState({showHelpInfoUI: !this.state.showHelpInfoUI})
    } else
    */

    /*else if (code === GameManager.Keyboard.keyCode.ESC) { // esc
      this.setState({
        showPlayerInfoUI: false,
        showSkillInfoUI: false,
        showHelpInfoUI: false
      })
      this.emit('info-panel-hide')
    }*/
  },
  rebindKeyboardEvent: function() {
    GameManager.Keyboard.setEvent(this.keyboardEvent.bind(this))
  },
  render: function() {
    let player = GameManager.player

    return this.div({class: 'map-ui'},
    /*
              this.div({class: 'top-panel'},
                this.div({class: 'weather'}, '晴天'),
                this.div({class: 'time'}, '11:00'),
                this.div({class: 'week'}, '星期一'),
                this.div({class: 'year'}, '814年12月25日'),
                this.div({class: 'gold'}, '金币: 100g'),
                this.div({class: 'skill-point'}, '白金币: 5sp')
              ),
    */
              MousePanel(),

              // left panel
              // used to show player and enemy info
              LeftPanel(),
              HistoryPanel({logs: this.props.historyLogs}),
              DescriptionPanel(),
              TextPanel(),
              BottomPanel({selectedItemOffset: player.selectedItemStackOffset}),
              InfoPanel(),

              /*
              this.div({class: 'bottom-panel'},
                this.div({class: 'map-container'}),
                this.div({class: 'map-info'}, '洞窟 (0, 0)'),
                this.div({class: 'player-info'},
                  this.div({class: 'name'}, '我一祎'),
                  this.div({class: 'level'}, 'Lvl. 12'),
                  this.div({class: 'hp'}, 'HP: 12 / 15'),
                  this.div({class: 'mana'}, 'MP: 4 / 6'),
                  this.div({class: 'energy'}, 'EP: 90 / 100'),
                  this.div({class: 'states-list'},
                    this.div({class: 'state'}, '眩晕'),
                    this.div({class: 'state'}, '中毒'),
                    this.div({class: 'state'}, '麻痹'),
                    this.div({class: 'state'}, '灼伤'),
                    this.div({class: 'state'}, '冻伤'),
                    this.div({class: 'state'}, '饥饿')
                  )
                ),
                HistoryPanel({logs: this.props.historyLogs}),
                TextPanel(),
                this.div({class: 'items'},
                  this.div({class: 'row-1 row'},
                    this.div({class: 'item' + (this.state.selectedItemOffset === 0 ? ' selected': '')}, '[1] 主武器'),
                    this.div({class: 'item' + (this.state.selectedItemOffset === 1 ? ' selected': '')}, '[2] 远程武器')
                  ),
                  this.div({class: 'row-2 row'},
                    this.div({class: 'item' + (this.state.selectedItemOffset === 2 ? ' selected': '')}, '[3] 无'),
                    this.div({class: 'item' + (this.state.selectedItemOffset === 3 ? ' selected': '')}, '[4] 无')
                  ),
                  this.div({class: 'row-3 row'},
                    this.div({class: 'item' + (this.state.selectedItemOffset === 4 ? ' selected': '')}, '[5] 无'),
                    this.div({class: 'item' + (this.state.selectedItemOffset === 5 ? ' selected': '')}, '[6] 无')
                  ),
                  this.div({class: 'row-4 row'},
                    this.div({class: 'item' + (this.state.selectedItemOffset === 6 ? ' selected': '')}, '[7] 无'),
                    this.div({class: 'item' + (this.state.selectedItemOffset === 7 ? ' selected': '')}, '[8] 无')
                  )
                )
              ),*/
              (this.state.showPlayerInfoUI ? PlayerInfoUI() : null),
              (this.state.showSkillInfoUI ? SkillInfoUI({parent: this}) : null),
              (this.state.showHelpInfoUI ? HelpInfoUI(): null)
            )
  }
})

export default MapUI
