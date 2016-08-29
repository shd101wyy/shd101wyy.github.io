class GameObject {
  constructor({
    init=null,
    display=null, // not saved, only used for getDisplay function
    getDisplay=null,
    runEvent=null,
    x=null,
    y=null,
    act=null,
    getSpeed=null,
    name=null,
    types=[],
    subscriptions=null
              })
  {
    this.name = name

    this.x = x
    this.y = y

    this.types = {}
    types.forEach(type => this.addType(type))

    if (display) {
      this.getDisplay = function(){return display}
    }
    if (getDisplay) {
      this.getDisplay = getDisplay
    }
    if (runEvent) {
      this.runEvent = runEvent
    }
    if (act) {
      this.act = act
    }
    if (getSpeed) {
      this.getSpeed = getSpeed
    }

    // subscriptions
    this.subscriptions = {}
    if (subscriptions) {
      for (let name in subscriptions) {
        this.on(name, subscriptions[name].bind(this))
      }
    }

    if (init) {
      init.bind(this)()
    }

    this.active = true // if not active, then this gameObject is removed
  }

  setPosition(x, y) {
    this.x = x
    this.y = y
  }

  emit(name, data=null) {
    if (this.subscriptions[name]) {
      return this.subscriptions[name](data)
    }
    return null
  }

  on(name, func) {
    if (typeof(name) === 'object') {
      for(let n in name) {
        this.on(n, name[n])
      }
    } else {
      this.subscriptions[name] = func
    }
  }

  off(name) {
    delete(this.subscriptions[name])
  }

  hasSubscription(name) {
    return this.subscriptions[name]
  }

  /**
   * check if this has subscription `name`
   * if '$name' exists in subscription, then check if that return true
   * `$name` is the condition function.
   * check 'furious-rat' in 'npc.js' for example
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  canBeDone(name) {
    if (this.subscriptions[name]) {
      if (this.subscriptions['$' + name]) {
        return this.subscriptions['$' + name]()
      } else {
        return true
      }
    } else {
      return false
    }
  }

  /**
   * get shortest distance from this gameObject to b
   * @param  {[type]} b [description]
   * @return {[type]}   [description]
   */
  dist(b, option={checkBlock: false}) {
    let checkBlock = option.checkBlock
    let passableCallback = function(x, y) {
      return true
    }

    let x = b.targetX,
        y = b.targetY

    if (b instanceof GameObject) {
      x = b.x
      y = b.y
    }

    /* prepare path to given coords */
    let dijkstra = new ROT.Path.Dijkstra(x, y, passableCallback)

    let distance = -1
    /* compute from given coords #1 */
    dijkstra.compute(this.x, this.y, function(x, y) {
      // console.log(x, y)
      distance += 1
    })

    return distance
  }

  act() {
  }

  getSpeed() {
    return 0
  }

  getDisplay() {
    return null
  }

  runEvent(eventTrigger) {
  }

  setActive(active) {
    this.active = active
  }

  isOfType(type) {
    return this.types[type] === true
  }

  addType(type) {
    this.types[type] = true
  }
}

window.GameObject = GameObject

export default GameObject
