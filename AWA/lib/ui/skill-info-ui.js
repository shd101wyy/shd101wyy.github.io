import Simple from '../Simple/Simple'

let SkillInfoUI = Simple.Component({
  init: function() {
    this.state = {
      row: 0,
      col: 0
    }

    GameManager.Keyboard.setEvent(this.keyboardEvent.bind(this))
  },
  keyboardEvent: function(e) {
    e.preventDefault()
    let code = e.which

    let row = this.state.row,
        col = this.state.col

    if (code === 40) { // down
      row = row + 1
      if (row === 10) {
        row = 0
      }

      this.setState({row})
    } else if (code === 37) { // left
      col = col - 1
      if (col === -1) {
        col = 3
      }

      this.setState({col})
    } else if (code === 38) { // up
      row = row - 1
      if (row === -1) {
        row = 9
      }

      this.setState({row})
    } else if (code === 39) { // right
      col = col + 1
      if (col === 4) {
        col = 0
      }

      this.setState({col})
    }

    if (code === 88 || code === 27) { // x esc
      this.props.parent.setState({showSkillInfoUI: false})
      this.props.parent.rebindKeyboardEvent()
    }
  },
  isSelected: function(row, col) {
    if (row === this.state.row && col === this.state.col) {
      return ' selected'
    } else {
      return ''
    }
  },
  render: function() {
    return this.div({class: 'skill-info-ui'},
            this.div({class: 'titles'},
              // elona
              // Examine, Drop, Eat, Read, Drink, Zap, Use, Open, Mix, Throw
              this.div({class: 'title selected', html: '技能<span>[x]</span>'}),
              this.div({class: 'title', html: '快捷技能<span>[s]</span>'}),
              this.div({class: 'title', html: '检查<span>[X]</span>'}), // 显示装备，道具的信息。
              this.div({class: 'title', html: '吃<span>[e]</span>'}),
              this.div({class: 'title', html: '阅读<span>[r]</span>'}), // 例如阅读书籍学习技能。例如阅读鉴定卷轴鉴定未知物品。
              this.div({class: 'title', html: '使用<span>[t]</span>'}), // 例如使用 奴隶锁 在昏厥的being身上
              this.div({class: 'title', html: '投掷<span>[T]</span>'}), // 例如投掷 手榴弹。
              this.div({class: 'title', html: '合成<span>[m]</span>'})  // 合成道具。
            ),
            this.div({class: 'skills-list'},
              this.div({class: 'column'},
                this.div({class: 'skill'+this.isSelected(0, 0)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(1, 0)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(2, 0)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(3, 0)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(4, 0)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(5, 0)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(6, 0)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(7, 0)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(8, 0)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(9, 0)}, '盾击')
              ),
              this.div({class: 'column'},
                this.div({class: 'skill'+this.isSelected(0, 1)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(1, 1)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(2, 1)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(3, 1)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(4, 1)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(5, 1)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(6, 1)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(7, 1)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(8, 1)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(9, 1)}, '盾击')
              ),
              this.div({class: 'column'},
                this.div({class: 'skill'+this.isSelected(0, 2)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(1, 2)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(2, 2)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(3, 2)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(4, 2)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(5, 2)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(6, 2)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(7, 2)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(8, 2)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(9, 2)}, '盾击')
              ),
              this.div({class: 'column'},
                this.div({class: 'skill'+this.isSelected(0, 3)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(1, 3)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(2, 3)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(3, 3)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(4, 3)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(5, 3)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(6, 3)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(7, 3)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(8, 3)}, '盾击'),
                this.div({class: 'skill'+this.isSelected(9, 3)}, '盾击')
              )
            ),
            this.div({class: 'skill-description'}, '这个技能没有说明')
          )
  }
})

export default SkillInfoUI
