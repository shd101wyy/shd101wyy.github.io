import GameObject from '../model/gameobject'
import NPC from '../model/npc'

let data = {
  map: `
#######################################
#..........1#..........#..............#
#.......r...#......c...g..............#
#...........#..........#..............#
#.....@.....34.........#..............#
#...........#......5...#..............#
#...........#..........g..............#
#2..........#..........#..............#
##################+#####..............#
.......................#..............#
`,
  id: 'tutorial',
  tiles: {
    '.': {type: 'marbel-floor'},
    '#': {type: 'white-wall'},
    'g': {type: 'glass-window', below: [{type: 'marbel-floor'}]},
    '@': {
      id: 'spawn-point',
      below: [{type: 'marbel-floor'}]
    },
    '+': {
      class: 'iron-door',
      below: [{type: 'marbel-floor'}]
    },
    '1': {
      id: 'checkpoint-1',
      below: [{type: 'marbel-floor'}]
    },
    '2': {
      id: 'checkpoint-2',
      below: [{type: 'marbel-floor'}]
    },
    '3': {
      id: 'door1',
      below: [{type: 'marbel-floor'}]
    },
    '4': {
      id: 'checkpoint-4',
      below: [{type: 'marbel-floor'}]
    },
    '5': {
      id: 'checkpoint-5',
      below: [{type: 'marbel-floor'}]
    },
    'D': {
      id: 'dropped-items-1',
      below: [{type: 'marbel-floor'}]
    },
    'c': {
      id: 'corpse1',
      below: [{type: 'marbel-floor'}]
    },
    'r': {
      class: 'furious-rat',
      below: [{type: 'marbel-floor'}]
    }
  },
  events: {
    '#spawn-point': function() {
      return new GameObject({
        runEvent() {
          if (GameManager.Event.hasMissionStarted('tutorial')) {
            return
          } else {
            GameManager.Event.startMission('tutorial')
            GameManager.Event
              .showText(
`
【Game Master】
看这里～～
欢迎进入使用 AWA引擎 创建的世界。
点击鼠标左键，或者 [enter] 键来继续。`,
`
【Game Master】
请使用 w, s, a, d 来上下左右移动。
并移动你的鼠标来探索周围的环境。
`)
              .then(function() {
                GameManager.Event.setMissionVariable('tutorial', 'show-checkpoint-1', true)
              })
          }
        }
      })
    },
    '.iron-door': function() {
      return new GameObject({
        init() {
          this.closed = true
        },
        getDisplay() {
          if (this.closed)
            return {type: 'iron-door-closed'}
          else
            return {type: 'iron-door-open'}
        }
      })
    },

    '#checkpoint-1': function() {
      return new GameObject({
        getDisplay() {
          if (GameManager.Event.getMissionVariable('tutorial', 'show-checkpoint-1')) {
            return {type: 'checkpoint'}
          } else {
            return null
          }
        },
        runEvent(eventTrigger) {
          if (GameManager.Event.getMissionVariable('tutorial', 'show-checkpoint-1') &&
              eventTrigger === 'PlayerAbove') {
            GameManager.Event.addHistory('你发现了一个检查点')
            GameManager.Event.showText(
`
【Game Master】
现在请尝试走到下一个 检查点。
`
            ).then(function() {
              GameManager.Event.setMissionVariable('tutorial', {'show-checkpoint-1': false, 'show-checkpoint-2': true})
            })
          }
        }
      })
    },

    '#checkpoint-2': function() {
      return new GameObject({
        getDisplay() {
          if (GameManager.Event.getMissionVariable('tutorial', 'show-checkpoint-2')) {
            return {type: 'checkpoint'}
          } else {
            return null
          }
        },

        runEvent(eventTrigger) {
          if (GameManager.Event.getMissionVariable('tutorial', 'show-checkpoint-2') &&
              eventTrigger === 'PlayerAbove') {
                GameManager.Event.addHistory('你发现了另一个检查点')
                GameManager.Event.showText(
    `
    【Game Master】
    很好，你已经知道以该怎么移动了。
    `,
    `
    【Game Master】
    门已经为你打开了，你现在可以前往下一个房间了。
    `
  ).then(function() {
    GameManager.Event.setMissionVariable('tutorial', {'show-checkpoint-2': false, 'open-door1': true})
  })
          }
        }
      })
    },
    '#door1': function() {
      return new GameObject({
        name: '一扇厚实的铁门',
        getDisplay() {
          if (!GameManager.Event.getMissionVariable('tutorial', 'open-door1'))
            return {type: 'iron-door-closed'}
          else
            return {type: 'iron-door-open'}
        },
        runEvent(eventTrigger) {
          if (eventTrigger === 'ActionButton' && !GameManager.Event.getMissionVariable('tutorial', 'open-door1')) {
            GameManager.Event.addHistory('你尝试打开这扇铁门，但是失败了。')
          }
        },
        subscriptions: {
          'close': function(a) {
            GameManager.Event.addHistory(a.name + '无法关上这扇铁门')
          }
        }
      })
    },
    '#checkpoint-4': function() {
      return new GameObject({
        runEvent(eventTrigger) {
          if (GameManager.Event.getMissionVariable('tutorial', 'open-door1') &&
              eventTrigger === 'PlayerAbove') {
            GameManager.Event.addHistory('你身后的铁门被关上了')
            GameManager.Event.setMissionVariable('tutorial', 'open-door1', false)
          }
        }
      })
    },
    '#dropped-items-1': function() {
      return new GameObject({
        name: '可疑的掉落物',
        getDisplay() {
          return {type: 'dropped-items'}
        },
        subscriptions: {
          'pick': function(a) {
            console.log('pick', this)
          }
        }
      })
    },
    '#corpse1': function() {
      return new GameObject({
        name: '死亡僵尸的尸体',
        init() {
          this.num = 2
        },
        getDisplay() {
          return {type: 'corpse', color: '#8e0000'}
        },
        runEvent(eventTrigger) {
          if (eventTrigger === 'PlayerAbove') {
            GameManager.Event.addHistory('你站在了尸体上，但是什么也没有发生。请尝试离开尸体，然后 鼠标右键 尸体')
          }
        },
        subscriptions: {
          'gather': function(a) {
            if (this.num > 0) {
              a.addItem('rotten-meat', 1)
              this.num -= 1
              GameManager.Event.addHistory('你剥下了僵尸的肉。获得了 腐肉 x 1')
            } else {
              GameManager.Event.addHistory('你已经把僵尸的尸体扒了个精光，僵尸只剩下雪白的骨头了。你真是个变态。')
              GameManager.Event.setMissionVariable('tutorial', {'show-checkpoint-5': true})
            }
          }
        }
      })
    },
    '#checkpoint-5': function() {
      return new GameObject({
        getDisplay() {
          if (GameManager.Event.getMissionVariable('tutorial', 'show-checkpoint-5'))
            return {type: 'checkpoint'}
        },
        runEvent(eventTrigger) {
          if (GameManager.Event.getMissionVariable('tutorial', 'show-checkpoint-5') &&
              eventTrigger === 'PlayerAbove') {
            GameManager.Event.addHistory('按键盘 [e] 键打开菜单，选中 道具。选中 腐肉 然后按 [1] 键。',
                                          '接着 鼠标右键 你自己，看看会得到什么？')
          }
        }
      })
    },
    '.furious-rat': function() {
      return new NPC(GameManager.Database.getNPC('furious-rat'))
    }
  }
}

// For Debug
GameManager.Event.startMission('tutorial')
GameManager.Event.setMissionVariable('tutorial', {
  'open-door1': true
})

export default data
