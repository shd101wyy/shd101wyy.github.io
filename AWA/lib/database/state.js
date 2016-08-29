import State from '../model/state'
import {text} from '../engine/text'
import {D20} from '../engine/utility'

let states = {
  'knockout': {
    name: text({cn: '死亡'}),
    duration: 0,
    type: 'neutral',
    condition(a) {
      return a.getStat('currentHP') <= 0
    },
    act(a) {
      // do nothing
    },
  },
  'illness': {
    name: text({cn: '疾病'}),
    description: '普通的疾病 (-4 疾病)',
    duration: 0,
    type: 'bad',
    condition(a) {
      let illnessResistance = a.getStat('resist-illness') - 4 // -4 correction
      let d = D20()
      if (d < illnessResistance) {
        return false
      } else { // be sick
        return true
      }
    },
    init(a) {
      GameManager.Event.addHistory(a.name + '染上了疾病')
    },
    act(a) {
      GameManager.Event.addHistory(a.name + '被疾病困扰')
    },
    remove(a) {
      GameManager.Event.addHistory(a.name + '的病好了')
    }
  },
  'poisoning': {
    name: text({cn: '中毒'}),
    description: '身体中了普通的毒',
    duration: 0,
    type: 'bad',
    condition: function(a) {
      return true
    },
  },
  'chaotic': {
    name: text({cn: '混乱'}),
    description: '大脑陷入了混乱，无法控制自己的移动',
    duration: 0,
    type: 'bad',
    condition(a) {
      let chaosResistance = a.getStat('resist-chaos')
      let d = D20()
      if (d < chaosResistance) {
        return false
      } else {
        return true
      }
    },
    init(a) {
      // TODO
      GameManager.Event.addHistory(`${a.name}的大脑陷入了混乱状态`)
    },
    act(a) {
      GameManager.Event.addHistory(`${a.name}的大脑感到非常的混乱，${a.name}不能控制自己的移动`)
    },
    remove(a) {
      GameManager.Event.addHistory(`${a.name}不再感到混乱了`)
    }
  },
  'hostile': {
    name: text({cn: '敌人'}),
    description: '这是你的对你患有敌意的敌人',
    duration: 0,
    type: 'bad',
    condition: function() {
      return true
    }
  }
}

export default states
