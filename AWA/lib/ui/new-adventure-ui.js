import Simple from '../Simple/Simple'

let NewAdventureUI = Simple.Component({
  init: function() {
    this.state = {
      /**
       * page:
       * ENTER_NAME
       * ROLL_ATTRIBUTES
       * CAREER_OPTION
       * RACE_OPTION
       *
       */
      page: 'ENTER_NAME',
      playerName: '',

      strength: Math.floor(Math.random() * 12 + 1),
      agility: Math.floor(Math.random() * 12 + 1),
      intelligence: Math.floor(Math.random() * 12 + 1),
      constitution: Math.floor(Math.random() * 12 + 1),
      charisma: Math.floor(Math.random() * 12 + 1),
      perception: Math.floor(Math.random() * 12 + 1),
      lockNum: 1,
      strengthLock: false,
      agilityLock: false,
      intelligenceLock: false,
      constitutionLock: false,
      charismaLock: false,
      perceptionLock: false,

      career: 'knight', // 'archer'

      gender: 'male' // or 'female
    }
    GameManager.Keyboard.setEvent(this.keyboardEvent.bind(this))
  },
  keyboardEvent: function(e) {
    let code = e.which
    if (this.state.page === 'ENTER_NAME') {
      if (code === 13) { // enter
        let name = this.refs.nameInput.value.trim()
        if (name.length) {
          this.setState({page: 'ROLL_ATTRIBUTES', playerName: name})
        } else {
          this.setState({playerName: ''})
        }
      }
    } else if (this.state.page === 'ROLL_ATTRIBUTES') {
      let code = e.which

      if (code === 81) { // q
        if (this.state.lockNum > 0 && !this.state.strengthLock) {
          this.setState({lockNum: this.state.lockNum-1, strengthLock: true})
        } else if (this.state.strengthLock) {
          this.setState({lockNum: this.state.lockNum+1, strengthLock: false})
        }
      } else if (code === 87) { // w
        if (this.state.lockNum > 0 && !this.state.agilityLock) {
          this.setState({lockNum: this.state.lockNum-1, agilityLock: true})
        } else if (this.state.agilityLock) {
          this.setState({lockNum: this.state.lockNum+1, agilityLock: false})
        }
      } else if (code === 69) { // e
        if (this.state.lockNum > 0 && !this.state.intelligenceLock) {
          this.setState({lockNum: this.state.lockNum-1, intelligenceLock: true})
        } else if (this.state.intelligenceLock) {
          this.setState({lockNum: this.state.lockNum+1, intelligenceLock: false})
        }
      } else if (code === 65) { // a
        if (this.state.lockNum > 0 && !this.state.constitutionLock) {
          this.setState({lockNum: this.state.lockNum-1, constitutionLock: true})
        } else if (this.state.constitutionLock) {
          this.setState({lockNum: this.state.lockNum+1, constitutionLock: false})
        }
      } else if (code === 83) { // s
        if (this.state.lockNum > 0 && !this.state.perceptionLock) {
          this.setState({lockNum: this.state.lockNum-1, perceptionLock: true})
        } else if (this.state.perceptionLock) {
          this.setState({lockNum: this.state.lockNum+1, perceptionLock: false})
        }
      } else if (code === 68) { // d
        if (this.state.lockNum > 0 && !this.state.charismaLock) {
          this.setState({lockNum: this.state.lockNum-1, charismaLock: true})
        } else if (this.state.charismaLock) {
          this.setState({lockNum: this.state.lockNum+1, charismaLock: false})
        }
      } else if (code === 90) { // z
        console.log('确定属性')
        this.setState({page: 'CAREER_OPTION'})
      } else if (code === 88) { // x
        console.log('后退')
        this.setState({page: 'ENTER_NAME'})
      } else if (code === 82) { // r
        console.log('重新掷骰')
        let strength = Math.floor(Math.random() * 12 + 1),
            agility = Math.floor(Math.random() * 12 + 1),
            intelligence = Math.floor(Math.random() * 12 + 1),
            constitution = Math.floor(Math.random() * 12 + 1),
            charisma = Math.floor(Math.random() * 12 + 1),
            perception = Math.floor(Math.random() * 12 + 1)

        // roll again
        if (!this.state.strengthLock) {
          this.state.strength = strength
        }

        if (!this.state.agilityLock) {
          this.state.agility = agility
        }

        if (!this.state.intelligenceLock) {
          this.state.intelligence = intelligence
        }

        if (!this.state.constitutionLock) {
          this.state.constitution = constitution
        }

        if (!this.state.perceptionLock) {
          this.state.perception = perception
        }

        if (!this.state.charismaLock) {
          this.state.charisma = charisma
        }

        this.forceUpdate()
      }
    } else if (this.state.page === 'CAREER_OPTION') {
      let code = e.which

      if (code === 90) { // z
        this.setState({page: 'RACE_OPTION'})

      } else if (code === 88) { // x
        this.setState({page: 'ROLL_ATTRIBUTES'})
      }
    } else if (this.state.page === 'RACE_OPTION') {
      let code = e.which

      if (code === 90) { // z

      } else if (code === 88) { // x
        this.setState({page: 'CAREER_OPTION'})
      }
    }
  },
  render: function() {
    switch (this.state.page) {
      case 'ENTER_NAME':
        return this.div({class: 'new-adventure-ui'},
                  this.div({class: 'welcome'}, '欢迎你，冒险者。'),
                  this.input({class: 'name-input', ref: 'nameInput', type: 'text', placeholder: '你的名字叫做？（按 [enter] 键确定)', autofocus:'true', value: this.state.playerName}))
      case 'ROLL_ATTRIBUTES':
        return this.div({class: 'new-adventure-ui roll-attributes'},
                  this.div({class: 'welcome-with-name'}, '你好 ' + this.state.playerName),
                  this.div({class: 'hint'}, '请按 [r] 键重新掷骰。剩余 ' + this.state.lockNum + ' 个锁定'),
                  this.div({class: 'attribute strength' + (this.state.strengthLock ? ' lock': '')}, `[q] 力量  ${this.state.strength}` + (this.state.strengthLock ? '  🔒' : '')),
                  this.div({class: 'attribute agility' + (this.state.agilityLock ? ' lock': '')}, `[w] 敏捷  ${this.state.agility}` + (this.state.agilityLock ? '  🔒' : '')),
                  this.div({class: 'attribute intelligence' + (this.state.intelligenceLock ? ' lock': '')}, `[e] 智力  ${this.state.intelligence}` + (this.state.intelligenceLock ? '  🔒' : '')),
                  this.div({class: 'attribute constitution' + (this.state.constitutionLock ? ' lock': '')}, `[a] 体质  ${this.state.constitution}`  + (this.state.constitutionLock ? '  🔒' : '')),
                  this.div({class: 'attribute perception' + (this.state.perceptionLock ? ' lock': '')}, `[s] 感知  ${this.state.perception}` + (this.state.perceptionLock ? '  🔒' : '')),
                  this.div({class: 'attribute charisma' + (this.state.charismaLock ? ' lock': '')}, `[d] 魅力  ${this.state.charisma}` + (this.state.charismaLock ? '  🔒' : '')),

                  this.div({class: 'bottom-hint'}, '[z] 确定，[x] 后退')
                )
      case 'CAREER_OPTION':
        return this.div({class: 'new-adventure-ui career-option'},
                  this.div({class: 'welcome'}, '请选择你的职业'),

                  this.div({class: 'careers-div'},
                    this.div({class: 'career-name-title'}, '职业类型'),
                    this.div({class: 'career-name selected'}, '[q] 骑士'),
                    this.div({class: 'career-name'}, '[w] 剑士'),
                    this.div({class: 'career-name'}, '[e] 游侠'),
                    this.div({class: 'career-name'}, '[a] 盗贼'),
                    this.div({class: 'career-name'}, '[s] 法师'),
                    this.div({class: 'career-name'}, '[d] 牧师')
                  ),
                  this.div({class: 'career-intro'},
                    this.div({class: 'basic-intro'}, '骑士是擅长防御的职业。'),

                    this.div({class: 'attribute-correct'}, '属性修正'),
                    this.div({class: 'attribute strength'},
                      `力量 ${this.state.strength} + 2 = ${this.state.strength + 2}`),
                    this.div({class: 'attribute agility'},
                      `敏捷 ${this.state.agility} - 1 = ${this.state.agility - 1}`),
                    this.div({class: 'attribute intelligence'},
                      `智力 ${this.state.intelligence} + 1 = ${this.state.intelligence + 1}`),
                    this.div({class: 'attribute constitution'},
                      `体质 ${this.state.constitution} + 3 = ${this.state.constitution + 3}`),
                    this.div({class: 'attribute perception'},
                      `感知 ${this.state.perception} + 0 = ${this.state.perception + 0}`),
                    this.div({class: 'attribute charisma'},
                    `魅力 ${this.state.charisma} + 0 = ${this.state.charisma + 0}`),

                    this.div({class: 'career-special'}, '职业特性'),
                    this.div({class: 'career-special-intro'}, '初始护甲 +4，初始魔抗 +2。 初始技能 盾击，盾防。')
                  ),

                  this.div({class: 'bottom-hint'}, '[z] 确定，[x] 后退')
                )
      case 'RACE_OPTION':
        return this.div({class: 'new-adventure-ui race-option'},
                  this.div({class: 'welcome'}, '请选择你的种族'),

                  this.div({class: 'races-div'},
                    this.div({class: 'race-name-title'}, '种族类型'),
                    this.div({class: 'race-name selected'}, '人类'),
                    this.div({class: 'race-name'}, '精灵'),
                    this.div({class: 'race-name'}, '矮人'),
                    this.div({class: 'race-name'}, '地精'),
                    this.div({class: 'race-name'}, '兽人'),
                    this.div({class: 'race-name'}, '狼人'),
                    this.div({class: 'race-name'}, '猫族'),
                    this.div({class: 'race-name'}, '狐妖')/*,
                    this.div({class: 'race-name'}, '魔人'),
                    this.div({class: 'race-name'}, '天神'),
                    this.div({class: 'race-name'}, '魔王'),
                    this.div({class: 'race-name'}, '恶魔')*/
                  ),

                  this.div({class: 'race-intro'},
                    this.div({class: 'basic-intro'}, '人类占大陆的绝大部分人口。')
                  ),

                  this.div({class: 'bottom-hint'}, '[z] 确定，[x] 后退')
                )
      default:
        throw 'NewAdventureUI error: Invalid Page.'
    }
  }
})

export default NewAdventureUI
