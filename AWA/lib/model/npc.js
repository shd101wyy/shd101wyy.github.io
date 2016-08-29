import GameObject from './gameobject'
import Inventory from './inventory'

import {text} from '../engine/utility'
// check database/npc.js
// for samples of creating NPC
class NPC extends GameObject {
  /**
   * [constructor description]
   * @param  {[Object]} data
   * {
   * 	name 'String' required
   *
   * 	stats 'Object' optional 修正值
   * 	    	{
   * 					strength,
   * 					agility,
   * 					intelligence,
   * 					charisma,
   * 					constitution,
   * 					charisma
   * 				}
   * 				those 6 attributes are required
   *
   * 	race 'Race' optional
   *
   * 	class 'Class' optional
   *
   *  equips: [{
   *  					id: 'String'
   *  				}]
   *
   * 	items: [{
   * 						id: 'String',
   * 						num:  'Number' default: 1,
   * 						hidden: ? default: false. decide whether the item should be displayed in inventory
   * 					}] optional
   *
   * 	attitude: Number default: 50 [0~100]
   * 						attitude towards Player
   *
   * 	personalities: [Personality],
   *
   * 	skills: [{
   * 						id: 'String',
   * 						condition: 'Function' default: function(){return true},
   * 						priority: 'Number' required [1~20]
   * 					}] optional
   *
   * 	states: [] optional. eg: ['illness']
   * 	subscriptions: {
   *  	id: function
   * 	} optional default: {}
   * }
   */
  constructor(data) {
    super(data)
    this.addType('npc')

    // calculate basic stats
    // check AWA.md for more information
    this.stats = {} // eg: {currentHP: {value: +200, multiplier: 2}, ...}
    let stats = data.stats
    if (stats) {
      for (let statID in stats) {
        this.changeStat(statID, stats[statID])
      }
    }

    // items
    let items = data.items || []
    this.inventory = new Inventory(items)

    // TODO: equips

    this.attitude = data.attitude || 50

    // TODO: skills
    this.skills = {}
    if (data.skills && data.skills.length) {
      data.skills.forEach(d => {
        let id = d.id,
            priority = d.priority || 1,
            condition = d.condition || function(){return true}
        this.skills[id] = {id, priority, condition, skill: GameManager.Database.getSkill(id)}
      })
    }

    // TODO: passive skills

    // TODO: race

    // TODO: class

    // TODO: states
    this.states = {}  // {stateID: {state, restDuration}, ...}
    let states = data.states || []
    states.forEach((stateID) => {
      let state = GameManager.Database.getState(stateID)
      state.init(this) // don't check canAct
      this.states[stateID] = {state, restDuration: state.duration}
    })

    this.initExtra()
  }

  // value: Number or multiplier 'x2'
  changeStat(statID, val) {
    let value = val,
        multiplier = 1
    if (typeof(val) === 'string') {
      if (val[0] !== 'x' || val[0] !== 'X') {
        throw 'Error changeStat: Invalid multiplier ' + val
      }
      value = 0
      multiplier = parseFloat(val.slice(1))
    }
    // TODO: multiplier
    if (this.stats[statID]) {
      this.stats[statID].value += value
      this.stats[statID].multiplier *= multiplier
    } else {
      this.stats[statID] = {value, multiplier}
    }
  }

  getStat(statID) {
    let value = 0
    if (NPC.statsSettings[statID]) {
      let attrs = {
        strength: this.getStat('strength'),
        agility: this.getStat('agility'),
        intelligence: this.getStat('intelligence'),
        constitution: this.getStat('constitution'),
        perception: this.getStat('perception'),
        charisma: this.getStat('charisma')
      }
      value = NPC.statsSettings[statID](attrs) || 0
    }
    if (this.stats[statID]) {
      let v = this.stats[statID].value || 0,
          multiplier = this.stats[statID].multiplier || 1
      return (value + v) * multiplier
    } else {
      return value
    }
  }

  addRace(raceID) {
  }

  addClass(classID) {
  }

  addEquip(equipData) {
  }

  addPersonality(personalityID) {

  }

  removePersonality(personalityID) {

  }

  addState(stateID, option={}) {
    let probability = option.probability || 1
    let state = GameManager.Database.getState(stateID)
    if (state.canAct(this)) {
      state.init(this)

      let restDuration = state.duration
      if (this.states[stateID] && this.states[stateID].restDuration > restDuration) {
        restDuration = this.states[stateID].restDuration
      }

      this.states[stateID] = {state, restDuration}
    }
  }

  // check states each act turn
  checkStates() {
    for (let stateID in this.states) {
      let state = this.states[stateID].state,
          restDuration = this.states[stateID].restDuration
      if (state.canAct(this)) {
        state.act(this)
        if (restDuration) {
          restDuration -= 1
          if (restDuration === 0) {
            this.removeState(stateID)
          } else {
            this.states[stateID].restDuration = restDuration
          }
        }
      } else {
        this.removeState(stateID)
      }
    }
  }

  removeState(stateID) {
    if (this.states[stateID]) {
      let state = this.states[stateID].state
      delete(this.states[stateID])
      state.remove(this)
    }

    // TODO: recalculate stats
  }
  /**
   * whether NPC has state?
   * @param  {[String]}  stateID [description]
   * @return {Boolean}           [description]
   */
  hasState(stateID) {
    if (this.states[stateID]) return true
    else return false
  }

  isNPC() {
    return true
  }

  isPlayer() {
    return false
  }

  getSpeed() {
    return Math.max(this.getStat('speed'), 1) // at least 1
  }

  act() {
    GameManager.engine.lock()

    this.checkStates()

    GameManager.engine.unlock()
  }

  // variance: [0~1]
  // critical: [0~1]
  receivePhysicalDamage(damage, option={variance: 0, critical: 0}) {
    let variance = option.variance || 0
    let critical = option.critical || 0
    if (variance) {
      if (Math.random() < 0.5) {
        damage = damage * (1-variance)
      } else {
        damage = damage * (1+variance)
      }
    }

    if (critical && Math.random() < critical) {
      damage = (Math.random() + 1.5) * damage
    }

    // apply shield
    let shield = this.getStat('shield')
    let physicalResistance = Math.min(0.96, shield * 0.04)
    damage = damage * (1- physicalResistance)

    // receive damage
    this.changeHP(-damage)
    return damage
  }

  receiveMagicalDamage(damage) {

  }

  removeItem(itemStack, num) {
    this.inventory.removeItem(itemStack, num)
  }

  changeHP(dv) {
    this.changeStat('currentHP', dv)
    let currentHP = this.getStat('currentHP')
    if (currentHP <= 0) {
      this.stats.currentHP = {value: 0}
      this.addState('knockout')
      // this.name = text({cn: '死亡了的'}) + this.name
    }
  }

  initExtra() {
    if (!this.stats.currentHP) {
      this.stats['currentHP'] = {value: this.getStat('hp')}
    }
    if (!this.stats.currentEP) {
      this.stats['currentEP'] = {value: this.getStat('ep')}
    }
    if (!this.stats.currentMP) {
      this.stats['currentMP'] = {value: this.getStat('mp')}
    }
    /*
    if (!this.stats.gold) {
      this.stats.gold = 0
    }
    if (!this.stats.sp) {
      this.stats.sp = 0
    }
    */
  }
}

NPC.statsSettings = {
  'hp': ({constitution})=> constitution * 5 ,
  'mp': ({intelligence, perception})=> Math.ceil((2*intelligence + perception)/3)*5 ,
  'ep': ({constitution})=> Math.ceil(constitution * 10),
  'atk': ({strength}) => {
    // physical damage
    let o_atk = 0
    if (strength >= 1 && strength <= 2) {
      o_atk = 2
    } else if (strength <= 5) {
      o_atk = 4
    } else if (strength <= 8) {
      o_atk = 6
    } else if (strength <= 10) {
      o_atk = 8
    } else if (strength <= 15) {
      o_atk = 10
    } else if (strength <= 18) {
      o_atk = 13
    } else {
      o_atk = 16
    }
    return Math.floor(o_atk + strength / 5)
  },
  'm.atk': ({intelligence})=> {
    // magical damage
    let o_atk = 0
    if (intelligence >= 1 && intelligence <= 2) {
      o_atk = 4
    } else if (intelligence <= 5) {
      o_atk = 6
    } else if (intelligence <= 8) {
      o_atk = 7
    } else if (intelligence <= 10) {
      o_atk = 8
    } else if (intelligence <= 15) {
      o_atk = 9
    } else if (intelligence <= 18) {
      o_atk = 12
    } else {
      o_atk = 14
    }
    return Math.floor(o_atk + intelligence / 5)
  },
  'threat': ({strength, charisma})=>Math.ceil((3 * strength + 1 * charisma) / 4 * 0.6),
  'speed': ({agility})=> Math.ceil(agility * 0.8),
  'shield': ({strength})=> Math.ceil(strength / 5),
  'magic-resistance': ({intelligence, strength})=> Math.ceil((3 * intelligence + 1 * strength) / 4 * 0.75),
  'critical': ({agility})=> Math.ceil(agility * 0.25) * 0.05,
  'evasion': ({agility})=> Math.ceil(agility * 0.2) * 0.05,
  'magic-amplifier': ({intelligence})=> intelligence,
  'hit': ({agility, intelligence, perception})=> {
    // hit
    let value = Math.ceil((2*agility + intelligence + perception) / 4)
    let hit = 0
    if (value <= 2) {
      hit = 0.6
    } else if (value <= 5) {
      hit = 0.75
    } else if (value <= 8) {
      hit = 0.8
    } else if (value <= 10) {
      hit = 0.85
    } else if (value <= 15) {
      hit = 0.9
    } else if (value <= 18) {
      hit = 0.95
    } else {
      hit = 1
    }
    return hit
  },
  'hp-regen': ({strength, constitution})=> Math.ceil((strength + 2 * constitution) / 3 / 4),
  'mp-regen': ({intelligence, constitution})=> Math.ceil((2 * intelligence + constitution) / 3 / 3),
  'fov': ({perception})=>perception,
  // ################ Resistance ##############################################
  'resist-poison': ({constitution})=>Math.ceil(constitution * 0.8),
  'resist-fire': ({constitution})=>Math.ceil(constitution * 0.8),
  'resist-cold': ({constitution})=>Math.ceil(constitution * 0.8),
  'resist-wound': ({constitution})=>Math.ceil(constitution * 0.8),
  'resist-paralysis': ({constitution})=>Math.ceil(constitution * 0.8), // 麻痹,
  'resist-illness': ({constitution})=>Math.ceil(constitution * 0.8),
  'resist-dizziness': ({perception})=>Math.ceil(perception * 0.8),
  'resist-anger': ({perception})=>Math.ceil(perception * 0.8),
  'resist-chaos': ({perception})=>Math.ceil(perception * 0.8),
  'resist-blindness': ({perception})=>Math.ceil(perception * 0.8),

  // ############### Skill Stats ##############################################
  'unlock': ({intelligence, perception})=>Math.ceil((intelligence + perception) / 2 * 0.6),
  'explore': ({intelligence, perception})=>Math.ceil((2 * intelligence + 3 * perception) / 5 * 0.8),
  'steal': ({agility, perception})=>Math.ceil((agility + perception) / 2 * 0.5),
  'negotiation': ({charisma, intelligence})=>Math.ceil((2 * charisma + 3 * intelligence) / 5 * 0.8),
  'mine': ({strength, constitution})=>Math.ceil((3 * strength + 1 * constitution) / 4 * 0.6),
  'study': ({intelligence})=>Math.ceil(intelligence * 0.5),
  'examine': ({intelligence, perception})=>Math.ceil((intelligence + perception) / 2 * 0.5),
}

export default NPC
