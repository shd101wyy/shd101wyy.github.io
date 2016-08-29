import {text} from '../engine/text'
let tilesets = {
  'player': {
    text: '﹫',
    passable: false,
    blockLight: false,
    color: '#1b6efc', // '#ff0',
    description: text({cn: '你自己'}),
    type: 'player'
  },

  'npc': {
    'text': '@',
    'passable': false,
    'blockLight': false,
    'description': text({cn: '一个 NPC'}),
    'color': '#1edb86'
  },

  'ground': {
    'text': '.',
    'passable': true,
    'blockLight': false,
    'description': text({cn: '绿色的草地'}),
    'color': '#1c984a',
    'background': '#1c984a'
  },

  'mud-ground': {
    'text': '.',
    'passable': true,
    'blockLight': false,
    'description': text({cn: '坑坑洼洼的泥地'}),
    'color': '#ba931e',
    'background': '#46390f'
  },

  'marbel-floor': {
    'text': '.',
    'passable': true,
    'blockLight': false,
    'description': text({cn: '光滑的大理石地砖'}),
    'color': '#e7e7e7',
    'background': '#d1d1d1'
  },

  'wooden-wall': {
    'text': '#',
    'passable': false,
    'blockLight': true,
    'description': text({cn: '树做的墙'}),
    'color': '#ba931e',
    'background': '#9f7f1d'
  },

  'white-wall': {
    'text': '#',
    'passable': false,
    'blockLight': true,
    'description': text({cn: '白颜色的墙'}),
    'color': '#f0f0f0',
    'background': '#919191'
  },

  'mud-wall': {
    'text': '#',
    'passable': false,
    'blockLight': true,
    'description': text({cn: '泥土做的墙'}),
    'color': '#d0c4a1',
    'background': '#9f7f1d'
  },

  'glass-window': {
    'text': '⚀',
    'passable': false,
    'blockLight': false,
    'description': text({cn: '透亮的窗户'}),
    'color': '#fffaec',
    'background': '#78b0b0'
  },

  'grass': {
    text: '\'',
    passable: true,
    blockLight: false,
    description: text({cn: '绿油油的小草'}),
    color: '#4cc87a',
    // background: '#21713f'
  },

  'bush': {
    text: '"',
    passable: true,
    blockLight: true,
    description: text({cn: '灌木。(只有进入灌木才可以看到其它相邻灌木中的东西)'}),
    color: '#4cc87a',
    // background: '#21713f'
  },

  'tree': {
    text: '♣︎',
    passable: false,
    blockLight: true,
    description: text({cn: '一颗大树'}),
    color: '#2d874e'
  },

  'small-tree': {
    text: '♠︎',
    passable: false,
    blockLight: false, // small tree doesn't block light
    description: text({cn: '一颗小树'}),
    color: '#3b9d5f'
  },

  'torch': {
    'text': '^',
    'passable': false,
    'blockLight': false,
    'description': text({cn: '燃烧的火炬'}),
    'color': '#f6d736',
    'light': '#f2fa57',
    'power': 0.1,
    'range': 5
  },

  'portal': {
    'text': 'P',
    'passable': true,
    'blockLight': false,
    'description': text({cn: '一个闪耀着紫色光芒的传送门'}),
    'color': '#9242bd'
  },

  'water': {
    'text': '≈',
    'passable': false,
    'blockLight': false,
    'description': text({cn: '清澈的水'}),
    'color': '#85ddf9',
    'background': '#3dc0e9'
  },

  'wooden-door-open': {
    text: '/',
    passable: true,
    blockLight: false,
    description: text({cn: '一个打开的木门'}),
    color: '#8e8c21'
  },

  'wooden-door-closed': {
    text: '+',
    passable: false,
    blockLight: true,
    description: text({cn: '一个关闭的木门'}),
    color: '#8e8c21'
  },

  'iron-door-open': {
    text: '/',
    passable: true,
    blockLight: false,
    description: text({cn: '一个打开的铁门'}),
    color: '#535353'
  },

  'iron-door-closed': {
    text: '+',
    passable: false,
    blockLight: true,
    description: text({cn: '一个关闭的铁门'}),
    color: '#535353'
  },

  'checkpoint': {
    text: '!',
    passable: true,
    blockLight: false,
    description: text({cn: '检查点'}),
    color: '#ff7b01'
  },

  'rat': {
    text: 'r',
    passable: false,
    blockLight: false,
    description: text({cn: '老鼠'}),
    color: '#303016'
  },

  'dropped-items': {
    text: '}',
    passable: true,
    blockLight: false,
    description: text({cn: '掉落的物品'}),
    color: '#626b14'
  },

  'corpse': {
    text: 'c',
    passable: true,
    blockLight: false,
    description: text({cn: '尸体'}),
    color: '#626b14'
  },

  'unknown': {
    'text': '?'
  }
}

module.exports = tilesets
