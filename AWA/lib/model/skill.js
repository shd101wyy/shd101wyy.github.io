/*
 * Skills
 */

import Types from '../database/type'

class Skill {
  constructor({
    name='',
    description=null,
    scope=Types.ScopeTypes.OneEnemy,
    passive=false,
    condition=function(){return true},
    act=function(a, b){}
  }) {
    this.name = name

    if (!description) {
      this.description = `$没有有关 {this.name} 的说明`
    }

    this.scope = scope
    this.passive = passive
    this.condition = condition
    this.act = act
  }
}

export default Skill
