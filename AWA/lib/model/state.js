/*
 * State
 */

class State {
  constructor({
    name='',
    description=null,
    type= 'neutral', // bad | neutral | good
    duration=0,  // state 持续的时间。0 表示永远持续。 [3, 5] 表示持续 3 到 5 个回合。 1 表示持续 1 个回合。
    condition=function(){return true},
    init=function(){},
    act=function(){},
    remove=function(){}
  }) {
    this.name = name
    this.duration = duration

    this.description = description
    if (!description) {
      this.description = `没有关于 ${this.name} 的介绍。`
    }

    this.type = type
    this.condition = condition
    this.init = init
    this.act = act
    this.remove=remove
  }

  canAct(a) {
    return this.condition(a)
  }
}

export default State
