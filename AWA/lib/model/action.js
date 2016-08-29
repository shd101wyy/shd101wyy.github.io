class Action {
  constructor({
                name='',
                condition=function(){return true},
                act=null
              }) {
    this.name = name
    this.condition = condition
    this.act = act
  }

  canAct(a, b) {
    return this.condition(a, b)
  }
}

export default Action
