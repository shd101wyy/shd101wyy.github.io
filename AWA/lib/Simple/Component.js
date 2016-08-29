'use strict'
let SimpleDOM = require('./SimpleDOM.js')

function createSimpleComponent(methods) {
  let SimpleComponent = function(props, ...children) {
    if (!this || !(this instanceof SimpleComponent)) {
      return new SimpleComponent(props)
    }
    SimpleDOM.call(this, props, children)
  }

  SimpleComponent.prototype = Object.create(SimpleDOM.prototype)

  for (let key in methods) {
    SimpleComponent.prototype[key] = methods[key]
  }

  SimpleComponent.prototype.constructor = SimpleComponent

  return SimpleComponent
}

function createStatelessSimpleComponent(func) {
  let SimpleComponent = function(...args) {
    if (!this || (!this instanceof SimpleComponent)) {
      return new SimpleComponent(...args)
    }
    this.render = func.bind(this, args)
    SimpleDOM.call(this, null, [])
  }
  SimpleComponent.prototype = Object.create(SimpleDOM.prototype)
  SimpleComponent.prototype.render = func
  SimpleComponent.prototype.constructor = SimpleComponent

  return SimpleComponent
}

function Component(arg) {
  if (arg.constructor === Function) {
    return createStatelessSimpleComponent(arg)
  } else {
    return createSimpleComponent(arg)
  }
}

module.exports = Component
