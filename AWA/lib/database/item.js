let Items = {
  'potion': {
    name: '草药',
    description: '非常普通的草药，可以恢复 10 点 hp。',
    price: 50,
    consumable: true,
    weight: 1,
    subscriptions: {
      'eat': function(a) {
        console.log(a, 'eat potion')
        a.changeStat('currentHP', 10)
      }
    }
  },

  'rat-meat': {
    name: '老鼠肉',
    description: '一片老鼠肉，非常的小。',
    price: 25,
    consumable: true,
    weight: 2,
    subscriptions: {
      'eat': function(a, b) {
        a.changeStat('currentEP', 5)
        a.addState('illness', {probability: 1})
      }
    }
  },

  'rotten-meat': {
    name: '腐肉',
    description: '腐烂的肉，散发着恶臭。必须得捏住鼻子才可以拿的了。',
    price: 5,
    consumable: true,
    weight: 1,
    subscriptions: {
      'eat': function(a, b) {
        a.addState('illness', {probability: 0.5})
      }
    }
  }
}

export default Items
