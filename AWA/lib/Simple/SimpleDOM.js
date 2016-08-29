'use strict'

function isNativeEvent(eventname) {
  return typeof(document.body["on" + eventname]) !== "undefined";
}

// http://stackoverflow.com/questions/3076679/javascript-event-registering-without-using-jquery
function addEvent(el, eventType, handler) {
  if (el.addEventListener) { // DOM Level 2 browsers
    el.addEventListener(eventType, handler, false);
  } else if (el.attachEvent) { // IE <= 8
    el.attachEvent('on' + eventType, handler);
  } else { // ancient browsers
    el['on' + eventType] = handler;
  }
}

function removeEvent(el, eventType, handler) {
  if (el.removeEventListener) { // DOM Level 2 browsers
    el.removeEventListener(eventType, handler, false)
  } else if (el.attachEvent) { // IE <= 8
    el.detachEvent('on' + eventType, handler)
  }
}

let validTags = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section  select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr'.split(' ')

/**
 * Simple Element
 * It should be stateless and immutable.
 */
function SimpleElement(tagName, attributes=null, children=null, owner=null) {
  this.tagName = tagName
  if (attributes) this.attributes = attributes
  if (children) this.children = children
  if (owner) this.owner = owner
}
SimpleElement.prototype = Object.create(SimpleElement.prototype)
SimpleElement.prototype.constructor = SimpleElement
SimpleElement.prototype._initialRender = function() {
  if (this.tagName === '#text') {
    this.element = document.createTextNode(this.children)
    this.children = null // THIS IS IMPORTANT
    return this.element
  }
  let _eventListeners = {}

  this.element = document.createElement(this.tagName)

  if (this.attributes) {
    for (let key in this.attributes) {
      let val = this.attributes[key]
      if (isNativeEvent(key)) {
        addEvent(this.element, key, val)
        _eventListeners[key] = val
      } else if (key === 'ref') {
        this.owner.refs[val] = this.element
      } else if (key === 'style' && val.constructor === Object) {
        for (let styleKey in val) {
          this.element.style[styleKey] = val[styleKey]
        }
      } else if (key === 'class' && val.constructor === Object) {
        let className = ''
        for (let c in val) {
          if (val[c]) {
            className += c + ' '
          }
        }
        this.element.className = className
      } else if (key === 'html') {
        this.element.innerHTML = val
      } else {
        this.element.setAttribute(key, val)
      }
    }
  }

  this._eventListeners = _eventListeners
  this._appendChildrenDOMElements(this.children)
  return this.element
}

SimpleElement.prototype._appendChildrenDOMElements = function(children) {
  if (!children.length) return

  children.forEach(child=> {
    if (child.constructor === Array) {
      this._appendChildrenDOMElements(child)
    } else { // SimpleDOM or SimpleElement
      this.element.appendChild(child._initialRender())
    }
  })
}

SimpleElement.prototype.removeSelf = function() {
  if (this.element && this.element.parentElement) {
    if (this.children instanceof Array) { // children might contain SimpleDOM
      this.children.forEach(child => child.removeSelf())
    }
    this.element.parentElement.removeChild(this.element)
    this.element = null
  }
}

SimpleElement.prototype.getDOMElement = function() {
  return this.element
}
SimpleElement.prototype.getSimpleElement = function() {
  return this
}

/**
 * Simple DOM
 */
function SimpleDOM(props, children=[]) {
  this.props = this.getDefaultProps()
  this.refs = {}
  if (children.length) this.children = children

  if (props) {
    Object.assign(this.props, props)
  }

  if (this.init) {
    this.init()
  }

  this.element = this.render()
  if (!this.element) {
    throw 'render function has to return a valid element'
  }
}

SimpleDOM.prototype = Object.create(SimpleDOM.prototype)

SimpleDOM.prototype.getDefaultProps = function() {
  return {}
}

SimpleDOM.prototype.emit = function(name, data=null) {
  if (this.emitter) {
    this.emitter.emit(name, data, this)
  }
}

SimpleDOM.prototype.render = function() {
  throw "Render function is not implemented."
}

SimpleDOM.prototype.init = function() {}
SimpleDOM.prototype.mount = function() {}
SimpleDOM.prototype.update = function() {}
SimpleDOM.prototype.unmount = function() {}

SimpleDOM.prototype.setState = function(newState) {
  if (this.state) {
    Object.assign(this.state, newState)
  }
  this.forceUpdate()
}


SimpleDOM.prototype.setProps = function(newProps) {
  Object.assign(this.props, newProps)
  this.forceUpdate()
}

SimpleDOM.prototype.forceUpdate = function() {
  let oldVD = this.element
  this.element = this.render()
  if (!this.element) {
    throw 'render function has to return a valid element'
  }
  diff(oldVD, this.element)

  this.update()
}

SimpleDOM.prototype._initialRender = function() {
  let outputElement = null
  if (this.element) {
    outputElement = this.element._initialRender()
  }
  this.mount()
  return outputElement
}

/**
 * diff element and d, return a new element
 * @param  {[type]} vd1     [old virtual dom]
 * @param  {[type]} vd2     [new virtual dom]
 */
function diff(vd1, vd2) {
  let simpleElement_1 = vd1.getSimpleElement()
  let simpleElement_2 = vd2.getSimpleElement()
  if (!simpleElement_2) return
  if (simpleElement_1.tagName !== simpleElement_2.tagName) { // different tag
    let element_2 = vd2._initialRender()
    let element_1 = simpleElement_1.element
    element_1.parentNode.replaceChild(element_2, element_1)
    return element_2
  } else if (simpleElement_1.tagName === '#text') {
    simpleElement_1.element.nodeValue = simpleElement_2.children
    simpleElement_2.element = simpleElement_1.element
    return simpleElement_1.element
  } else {
    let element = simpleElement_1.element

    // set attributes
    while(element.attributes.length > 0) {
      element.removeAttribute(element.attributes[0].name)
    }

    let eventsLength = 0,
        _eventListeners = simpleElement_1._eventListeners || {},
        events = {},
        attributes = simpleElement_2.attributes

    for (let key in attributes) {
      let val = attributes[key]
      if (isNativeEvent(key)) {
        if (_eventListeners[key] !== val) {
          removeEvent(element, key, _eventListeners[key])
          addEvent(element, key, val)
          events[key] = val
        }
      } else if (key === 'ref') {
        if (vd1.owner) {
          vd1.owner.refs[val] = element
        }
      } else if (key === 'style' && val.constructor === Object) {
        for (let styleKey in val) {
          element.style[styleKey] = val[styleKey]
        }
      } else if (key === 'class' && val.constructor === Object) {
        let className = ''
        for (let c in val) {
          if (val[c]) {
            className += c + ' '
          }
        }
        element.className = className
      } else if (key === 'html') {
        element.innerHTML = val
      } else {
        element.setAttribute(key, val)
      }
    }


    for (let key in _eventListeners) {
      if (!events[key]) {
        removeEvent(element, key, _eventListeners[key])
      }
    }
    simpleElement_2._eventListeners = events // append _eventListeners

    // diff children
    if (simpleElement_1.children.length === simpleElement_2.children.length) {
      for (let i = 0; i < simpleElement_1.children.length; i++) {
        diff(simpleElement_1.children[i], simpleElement_2.children[i])
      }
    } else if (simpleElement_1.children.length > simpleElement_2.children.length) {
      let i = 0
      for (; i < simpleElement_2.children.length; i++) {
        diff(simpleElement_1.children[i], simpleElement_2.children[i])
      }
      for (; i < simpleElement_1.children.length; i++) {
        simpleElement_1.children[i].removeSelf()
      }
    } else { // if (simpleElement_1.children.length < simpleElement_2.children.length) {
      let i = 0
      for (; i < simpleElement_1.children.length; i++) {
        diff(simpleElement_1.children[i], simpleElement_2.children[i])
      }
      for (; i < simpleElement_2.children.length; i++) {
        element.appendChild(simpleElement_2.children[i]._initialRender())
      }
    }

    simpleElement_2.element = element

    // unmount old
    let vd = vd1
    while(vd && vd.constructor !== SimpleElement) {
      vd.unmount()
      vd = vd.element
    }

    // mount new
    vd = vd2
    while (vd && vd.constructor !== SimpleElement) {
      vd.mount() // <- mount!
      vd = vd.element
    }
    return element
  }
}

SimpleDOM.prototype.removeSelf = function() {
  this.unmount()
  this.element.removeSelf()
}

SimpleDOM.prototype.getDOMElement = function() {
  if (this.element)
    return this.element.getDOMElement()
}

SimpleDOM.prototype.getSimpleElement = function() {
  if (this.element)
    return this.element.getSimpleElement()
  else
    return null
}


// add tags
for (let i = 0; i < validTags.length; i++) {
  SimpleDOM.prototype[validTags[i]] = function() {
    let attributes = null
    let offset = 0
    if (arguments[offset] !== null && typeof(arguments[offset]) !== 'undefined' && arguments[offset].constructor === Object) {
      attributes = arguments[offset]
      offset += 1
    }

    let children = []
    function appendChildren(args, offset = 0) {
      for (let i = offset; i < args.length; i++) {
        if (args[i]) {
          if (args[i].constructor === Array) {
            appendChildren(args[i])
          } else if (args[i] instanceof SimpleDOM && !args[i].element) {
            continue
          } else if (args[i].constructor === Number) {
            children.push( new SimpleElement('#text', null, args[i].toString()))
          } else if (args[i].constructor === String) {
            children.push( new SimpleElement('#text', null, args[i]))
          } else {
            children.push(args[i])
          }
        }
      }
    }

    appendChildren(arguments, offset)

    return new SimpleElement( validTags[i].toUpperCase(),
                              attributes,
                              children,
                              this)
  }
}

SimpleDOM.prototype.constructor = SimpleDOM

module.exports = SimpleDOM
