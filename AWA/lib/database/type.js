/**
 * Types
 */

let types = {
  Elements: {
    'Physical': 1,
    'Fire': 2,
    'Ice': 3,
    'Thunder': 4,
    'Water': 5,
    'Earth': 6,
    'Wind': 7,
    'Light': 8,
    'Darkness': 9
  },
  SkillTypes: {
    'Magic': 1,
    'Special': 2
  },
  WeaponTypes: {
    'Dagger': 1,
    'Sword': 2,
    'Flail': 3,  // 类似于雷姆的铁球
    'Axe': 4,
    'Whip': 5,   // 鞭子
    'Cane': 6,   // 魔杖
    'Bow': 7,
    'Crossbow': 8,
    'Gun': 9,
    'Claw': 10,
    'Glove': 11,
    'Spear': 12,
    'Shield': 13
  },
  ArmorTypes: {
    'General Armor': 1,
    'Magic Armor': 2,
    'Light Armor': 3,
    'Heavy Armor': 4
  },
  EquipmentTypes: {
    'Weapon': 'Weapon',
    'RangeWeapon': 'RangeWeapon',
    'Head': 'Head',
    'Armor': 'Armor',
    'Shoes': 'Shoes',
    'Accessory': 'Accessory'
  },
  ScopeTypes: {
    'Self': 'Self',
    'OneEnemy': 'OneEnemy',
    'AreaEnemy': 'AreaEnemy',
    'LineEnemy': 'LineEnemy',
    'OneFriend': 'OneFriend',  // ally
    'AreaFriend': 'AreaFriend',
    'LineFriend': 'LineFriend',
    'AreaAll': 'AreaAll',
    'LineAll': 'LineAll',
    'OneAnyone': 'OneAnyone',
    'None': 'None', // passive skill
  },
  HitTypes: {
    'Physical':1,
    'Magical':2
  },
  DamageTypes: {
    'HPDamage': 1,
    'MPDamage': 2,
    'EPDamage': 3,
    'HPRecover': 4,
    'MPRecover': 5,
    'EPRecover': 6,
    'HPDrain': 7,   // 吸血
    'MPDrain': 8,
    'EPDrain': 9
  },

  EffectTypes: {
    'AddBuff': 1,    // 增益魔法
    'AddDebuff': 2,  // 减益魔法
    'RemoveBuff': 3,
    'RemoveDebuff': 4,

    'AddState': 5,          // {type: AddState, id: 'knockout', rate: 0.2}
                            // 0.2的概率一击致死。
                            //
    'RemoveState': 6,

    'ChangeStat': 'ChangeStat', // {type: ChangeStat, id: 'currentHP', value: 10}

    'LearnSkill': 10,
    'ForgetSkill': 11,
    'SpecialEffect': 12  // for example: 偷东西, 挖东西。
  },
  BuffTypes: {
    'Shield': 1,
    'MagicResistance': 2,
    'Attack': 3,  // 这里的 Attack 指的是 Physical Attack
    'MagicalAttack': 4
  },
  SpecialEffectTypes: {
    'Steal': 1,
    'Mining': 2,
    'Walk': 3,
    'Explore': 4
  },

  TraitTypes: {
    'AddState': 'AddState',          // {type: AddState, state: Knockout, rate: 0.2}
                            // 0.2的概率一击致死。
                            //
    'ResistState': 'ResistState',       // {type: ResistState, state: Burn, rate: 0.3}
                            // {type: ResistState, state: Knockout, rate: 1} 不朽，永远不死。
                            //
    'ChangeStat': 'ChangeStat',   // {type: ChangeStat, id: 'ATK', value: 20},
                                  // {type: ChangeStat, id: 'poisonResist', value: 4}
                            //
    'AddSkill': 4,          // 例如其实职业，就自动获得了 Guard 的技能。
                            // {type: AddSkill, skill: Guard}
                            //
    'SealSkillType': 5      // {type: SealSkillType, type: SkillTypes.Magic}
                            // 封印 Magic 技能。 Silence
  },

  EventTriggerTypes: {
    'AutoRun': 'AutoRun',
    'Parallel': 'Parallel',
    'ActionButton': 'ActionButton',
    'PlayerAbove': 'PlayerAbove'
  }
}

const customTypes = require('../custom/type.js')
export default Object.assign(types, customTypes)
