let npcs =
{
  'furious-rat': {
    name: '发狂的老鼠',
    stats: {
      strength: 2,
      agility: 4,
      intelligence: 2,
      constitution: 3,
      charisma: 1,
      perception: 5
    },
    // race: 'rodent',
    items: [{
      id: 'rat-meat',
      hidden: true    // this shouldn't be displayed in inventory panel
    }],
    attitude: 5,
    // personalities: ['gluttony'],
    skills: [
      { id: 'normal-attack',
        condition: function(){
          return !a.hasState('flee')
        },
        priority: 5}/*,
      { id: 'flee',
        condition: function(a){
          return a.getStat('hp') <= 10
        },
        priority: 6}
        */
    ],
    states: ['hostile'],
    subscriptions: {
      gather: function(a) {
        // TODO
        console.log('采集老鼠')
      },
      $gather: function() {
        return this.hasState('knockout') // can only be gathered when 'dead'
      }
    },
    getDisplay(){
      if (this.hasState('knockout')) {
        return {type: 'corpse', color: '#8f1a3a'}
      }
      return {type: 'rat', color: '#8f1a3a'}
    }
  },

  'player': {
    name: '你',
    isPlayer: true,
    stats: {
      strength: 8,
      agility: 8,
      intelligence: 8,
      constitution: 8,
      charisma: 8,
      perception: 8,
      gold: 100,
      currentHP: 20,
    },
    // race: 'human'
    // 其实我个人感觉 职业 已经不重要了。只要提供相应的技能就可以了
    items: [{
      id: 'potion',
      num: 2
    }, {
      id: 'rat-meat',
      num: 3
    }],
    attitude: 5,
    skills: [{
      id: 'normal-attack'
    }],
    states: ['illness', 'poisoning'],
    getDisplay() {
      return {type: 'player'}
    }
  }
}

export default npcs
