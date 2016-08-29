import GameObject from '../model/gameobject'
import NPC from '../model/npc'
import {text} from '../engine/text'

/**
 * Door Example
 */
class Door extends GameObject {
  constructor(option={}) {
    super({}) // it is a door

    this.closed = option.closed || false
    this.doorType = option.doorType || 'wooden-door'

    this.on('open', this.openDoor.bind(this))
    this.on('close', this.closeDoor.bind(this))
  }

  openDoor() {
    this.closed = false
    GameManager.Event.addHistory('你打开了门。')
  }

  closeDoor() {
    this.closed = true
    GameManager.Event.addHistory('你关上了门。')
  }

  getDisplay() {
    if (this.closed) {
      return {type: this.doorType+'-closed'}
    } else {
      return {type: this.doorType+'-open'}
    }
  }

  runEvent(eventTrigger) {
    if (this.closed && eventTrigger === 'ActionButton') {
      this.openDoor()
    }
  }
}

let data = {
  map: `
 .......................TTTTT
........................TTTT
...........=======.....TTTTT
....."=============.......TT
...."T=..'...========..""...
....TT=.####.T"=====..''''..
....===.#..#.N..===....."...
....===.#+g#.4..=T..^...r...
....===.2...@...+...........
....===="..."...=....r......
.....====.'"""..=...........
.....===^..."T^.==.....r....
......=3.....tt.=====.......
......================='====
...........========TT.......
....."""......===TTTTTT.....
....""""""..........TTT.T...
...""""""""""...........T...
....."""....................
`,
  id: 'test-map',
  name: '实验地图',
  sight: +6,
  tiles: {
    '.': {type: 'mud-ground'},
    '#': {type: 'mud-wall'},
    'g': {type: 'glass-window', below: [{type: 'mud-ground'}]},
    '^': {class: 'torch', below: [{type: 'mud-ground'}]},
    '=': {type: 'water'},
    'T': {type: 'tree', below: [{type: 'mud-ground'}]},
    't': {type: 'small-tree', below: [{type: 'mud-ground'}]},
    '\'': {type: 'grass', below: [{type: 'mud-ground'}]},
    '"': {type: 'bush', below: [{type: 'mud-ground'}]},
    '2': {type: 'torch', power: 0.2, range: 4, light: '#f2582f', below: [{type: 'mud-ground'}]},
    '3': {
      id: 'portal1',
      below: [{type: 'mud-ground'}]
    },
    '4': {
      id: 'portal2',
      below: [{type: 'mud-ground'}]
    },
    '@': {
      id: 'spawn-point',
      below: [{type: 'mud-ground'}]
    },
    'N': {
      id: 'npc',
      below: [{type: 'mud-ground'}]
    },
    '+': {
      class: 'door',
      below: [{type: 'mud-ground'}]
    },
    'r': {
      class: 'rat',
      below: [{type: 'mud-ground'}]
    }
  },
  events: {
    '#npc': function() {
      return new GameObject({
        name: '希尔薇',
        init() {
          this.talkTime = 0
          this.on('touch-head', (a)=> {
            GameManager.Event.addHistory(
              `
${a.name} 温柔的爱抚了 ${this.name} 的头。
${this.name} 的脸红润了。
              `
            )
          })
        },
        getDisplay() {
          return {type: 'npc'}
        },
        runEvent(eventTrigger) {
          if (eventTrigger === 'ActionButton') {
            if (this.talkTime === 0) {
              GameManager.Event.showText('呵呵，要不要来爽一爽啊？')
              this.talkTime += 1
            } else {
              GameManager.Event.showText('啊啊啊啊好爽 ' + this.talkTime)
              this.talkTime += 1
            }
          }
        },
        act() {
          // console.log(this.name + ' 行动了。')
        },
        getSpeed() {
          return 10
        }
      })
    },
    '.torch': function() {
      return new GameObject({
        getDisplay() {
          return {type: 'torch'}
        },
        runEvent(eventTrigger) {
          if (eventTrigger === 'ActionButton') {
            GameManager.Event.showText(text({cn: '这是一个燃烧的火炬'}), text({cn: '它闪耀着炙热的光芒'}))
          }
        }
      })
    },
    '#portal1': function() {
      return new GameObject({
        getDisplay() {
          return {type: 'portal'}
        },
        runEvent(eventTrigger) {
          if (eventTrigger === 'PlayerAbove') {
            GameManager.Event.showOptions(text({cn: '这是传送门 1'}), ['使用传送门', '不使用传送门']).then(function(option) {
              if (option === 0) {
                GameManager.Event.teleportPlayer('test-map', 'portal2')
                GameManager.Event.addHistory('你被传送到了 Portal 2')
              }
            })
          }
        }
      })
    },
    '#portal2': function() {
      return new GameObject({
        getDisplay() {
          return {type: 'portal'}
        },
        runEvent(eventTrigger) {
          if (eventTrigger === 'PlayerAbove') {
            GameManager.Event.showOptions(text({cn: '这是传送门 2'}), ['使用传送门', '不使用传送门']).then(function(option) {
              if (option === 0) {
                GameManager.Event.teleportPlayer('test-map', 'portal1')
                GameManager.Event.addHistory('你被传送到了 Portal 1')
              }
            })
          }
        }
      })
    },
    '.door': function() {
      return (new Door({closed: true}))
    },
    '.rat': function() {
      return (new NPC(GameManager.Database.getNPC('furious-rat')))
    }
  },
}

export default data
