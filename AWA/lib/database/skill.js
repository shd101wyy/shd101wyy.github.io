import Types from './type'
import Skill from '../model/skill'

/*
#########################################################################################
#################################     Skills     ########################################
#########################################################################################
 */
/*
let NormalAttack = new Skill({
  name: '普通攻击',
  epCost: 1,
  description: '会对敌方造成物理伤害的普通攻击。',
  message: '使用了普通攻击',
  damage: {
    type: Types.DamageTypes.HPDamage,
    element: Types.Elements.Physical
  },
  formula: function(a, b) {
    return a.atk
  },
  critical: true
})

let ShieldGuard = new Skill({
  name: '盾牌防御',
  epCost: 2,
  description: '使用盾牌防御自身。护甲值+2 持续 5 个回合。',
  message: '对自己进行了盾牌防御',
  effects: [
    {type: Types.EffectTypes.AddBuff, turns: 5, buffName: Types.BuffTypes.Shield, value: 5}
  ]
})

let Steal = new Skill({
  name: '偷窃',
  epCost: 5,
  description: '偷窃别人的物品。',
  message: '蹑手蹑脚地进行了试图进行偷窃。',
  scope: Types.ScopeTypes.OneAnyone,
  radius: 1,
  effects: [
    {type: Types.EffectTypes.SpecialEffect, name: Types.SpecialEffectTypes.Steal}
  ]
})
*/

let Skills = {
  'normal-attack': {
    name: '普通攻击',
    description: '非常普通的攻击方式，所以也经常被人们成为 普通攻击！',
    scope: Types.ScopeTypes.OneEnemy,
    passive: false, // it is not a passive skill
    condition: function({a, b}) {
      return a.dist(b) === 1 && a.getStat('ep') > 0
    },
    act: function({a, b}) {
      a.changeStat('currentEP', -1)
      GameManager.Event.addHistory(a.name + '向' + b.name + '发起了攻击')
      if (Math.random() < a.getStat('hit')) {
        let damage = b.receivePhysicalDamage(a.getStat('atk'), {critical: a.getStat('critical'), variance: 0.1})
        GameManager.Event.addHistory(b.name + '受到了' + Math.floor(damage) + '点物理伤害')
      } else {
        GameManager.Event.addHistory(a.name + ' 没有击中 ' + b.name)
      }
      return true // end of turn
    }
  },
}

export default Skills
