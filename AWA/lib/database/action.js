import {text} from '../engine/text'

let actions = {
  'logging': // id
  {
    name: text({cn: '伐木', en: 'logging'}),
    condition: function({a, b}) {
      return a.getStat('logging') > 1
    },
    act: function({a, b}) {
      a.changeStat('ep', -5) // cost energy
    }
  },

  'open': {
    name: text({cn: '开门', en: 'open'}),
    condition: function({a, b}) {
      return a.dist(b) === 1 && b.hasSubscription('open') && b.closed
    },
    act: function({a, b}) {
      b.emit('open', a)
      return true // finish current turn
    }
  },

  'close': {
    name: text({cn: '关闭', en: 'close'}),
    condition: function({a, b}) {
      return a.dist(b) === 1 && b.hasSubscription('close') && !b.closed
    },
    act: function({a, b}) {
      b.emit('close', a)
      return true // finish current turn
    }
  },

  'touch-head': {
    name: text({cn: '摸头', en: 'touch head'}),
    condition: function({a, b}) {
      return a.dist(b) === 1 && b.hasSubscription('touch-head')
    },
    act: function({a, b}) {
      b.emit('touch-head', a)
      return true
    }
  },

  'pick': {
    name: text({cn: '捡起', en: 'pick'}),
    condition: function({a, b}) {
      return a.dist(b) === 1 && b.hasSubscription('pick')
    },
    act: function({a, b}) {
      b.emit('pick', a)
      return false
    }
  },

  'eat': {
    name: text({cn: '吃', en: 'eat'}),
    condition: function({a, b, targetX, targetY}) {
      if (b.isOfType('item')) {
        return a.dist({targetX, targetY}) === 0 && b.hasSubscription('eat')
      } else {
        return a.dist({targetX, targetY}) <= 1 && b.hasSubscription('eat')
      }
    },
    act: function({a, b}) {
      GameManager.Event.addHistory(a.name + '吃掉了' + b.name)
      b.emit('eat', a)
      return false
    }
  },

  'gather': {
    name: text({cn: '采集', en: 'gather'}),
    condition: function({a, b, targetX, targetY}) {
      return a.dist(b) <= 1 && b.canBeDone('gather')
    },
    act: function({a, b}) {
      b.emit('gather', a)
    }
  }

  //'touch': { // TODO: touch all parts available
  //  name: text({cn: '摸', en: 'touch'})
  //  condition: function() { return false }
  //  act: function() {}
  //},

  //'lock': {
  //  name: text({cn: '上锁'})
  //}
}

export default actions
