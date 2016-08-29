(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _game = __webpack_require__(1);

	var _game2 = _interopRequireDefault(_game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function test() {
	  var FONT_SIZE = 48,
	      ROWS = 24,
	      COLS = 18;

	  window.game = new Phaser.Game(1024, 768, Phaser.AUTO, null, false, false);

	  // Game States
	  game.state.add('boot', __webpack_require__(49));
	  game.state.add('preload', __webpack_require__(50));
	  game.state.add('play', __webpack_require__(51));

	  game.state.start('boot');
	}

	document.body.onload = function () {
	  // GameManager.init() // TODO: old game built upon rot.js
	  console.log('game start');
	  test();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _player = __webpack_require__(2);

	var _player2 = _interopRequireDefault(_player);

	var _dungeon = __webpack_require__(12);

	var _dungeon2 = _interopRequireDefault(_dungeon);

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	var _gameUi = __webpack_require__(13);

	var _gameUi2 = _interopRequireDefault(_gameUi);

	var _keyboard = __webpack_require__(30);

	var _keyboard2 = _interopRequireDefault(_keyboard);

	var _event = __webpack_require__(31);

	var _event2 = _interopRequireDefault(_event);

	var _database = __webpack_require__(32);

	var _database2 = _interopRequireDefault(_database);

	var _map = __webpack_require__(41);

	var _map2 = _interopRequireDefault(_map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ROT.RNG.setSeed(1234) // set seed

	window.GameManager = {
	  display: null,
	  canvas: null,
	  mousePanel: null,

	  player: null,
	  dungeon: null,
	  engine: null,
	  gameUI: null,
	  emitter: null,

	  // WIDTH and HEIGHT has to be even number
	  DISPLAY_WIDTH: 26, // 20, //30,
	  DISPLAY_HEIGHT: 20, // 16, // 24,

	  init: function init() {
	    ROT.DEFAULT_WIDTH = this.DISPLAY_WIDTH;
	    ROT.DEFAULT_HEIGHT = this.DISPLAY_HEIGHT;

	    this.player = new _player2.default(GameManager.Database.NPCs.player);

	    this.display = new ROT.Display({
	      fontFamily: "droid sans mono, monospace",
	      fontSize: 48,
	      spacing: 1,
	      forceSquareRatio: true,
	      bg: '#030201'
	    });
	    document.getElementById('game-container').appendChild(this.display.getContainer());
	    this.canvas = document.getElementById('game-container').querySelector('canvas');

	    this.gameUI = new _gameUi2.default();
	    _Simple2.default.render(this.gameUI, document.getElementById('game-ui'));
	    /*
	    this.dungeon = new Dungeon({dungeonWidth: 60, dungeonHeight: 30}, this)
	    this.currentMap = this.dungeon
	    this.player = this.dungeon.setPlayer()
	     this.dungeon.draw()
	    this.player.draw()
	    */
	  }
	};

	/*
	 * Keyboard
	 */

	GameManager.Keyboard = _keyboard2.default;

	/*
	 * Event
	 */

	_event2.default.$ = GameManager;
	GameManager.Event = _event2.default;

	/*
	 * Database
	 */

	_database2.default.$ = GameManager;
	GameManager.Database = _database2.default;
	_database2.default.loadActionData(__webpack_require__(42).default);
	_database2.default.loadItemData(__webpack_require__(43).default);
	_database2.default.loadStateData(__webpack_require__(35).default);
	_database2.default.loadSkillData(__webpack_require__(44).default);
	_database2.default.loadNPCData(__webpack_require__(45).default);

	/*
	 * Map
	 */

	_map2.default.$ = GameManager;
	GameManager.Map = _map2.default;

	_map2.default.loadMapData(__webpack_require__(46).default);
	_map2.default.loadMapData(__webpack_require__(47).default);
	_map2.default.loadMapData(__webpack_require__(48).default);

	exports.default = GameManager;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _emitter = __webpack_require__(3);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _npc = __webpack_require__(8);

	var _npc2 = _interopRequireDefault(_npc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * check npc.js for more information
	 */

	var Player = function (_NPC) {
	  _inherits(Player, _NPC);

	  function Player(data) {
	    _classCallCheck(this, Player);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, data));

	    _this.addType('player');
	    _this.setPosition(0, 0);

	    _this.slotCount = 2; // how many hands? normally 2: left hand and right hand

	    _this.itemStacksOnHand = {}; // TODO: 6 item stacks now.
	    // key: item id
	    // value: {offset: num, itemStack}
	    _this.selectedItemStackOffset = 0;
	    return _this;
	  }

	  _createClass(Player, [{
	    key: 'setPosition',
	    value: function setPosition(x, y) {
	      this.x = x;
	      this.y = y;

	      this.relativeX = GameManager.DISPLAY_WIDTH / 2 - x;
	      this.relativeY = GameManager.DISPLAY_HEIGHT / 2 - y;
	    }
	  }, {
	    key: 'setItemStackOnHand',
	    value: function setItemStackOnHand(itemStack, offset) {
	      var o = this.getItemStackOnHand(offset);
	      if (o) {
	        // this offset already has item stack
	        delete this.itemStacksOnHand[o.id];

	        if (o.id === itemStack.id) {
	          // toggle
	          _emitter2.default.emit('bottom-panel-force-update');
	          return;
	        }
	      }

	      this.itemStacksOnHand[itemStack.id] = { offset: offset, itemStack: itemStack };
	      _emitter2.default.emit('bottom-panel-force-update');
	    }
	  }, {
	    key: 'getItemStackOnHand',
	    value: function getItemStackOnHand(offset) {
	      for (var itemKey in this.itemStacksOnHand) {
	        var data = this.itemStacksOnHand[itemKey];
	        if (offset === data.offset) {
	          return data.itemStack;
	        }
	      }
	      return null;
	    }
	  }, {
	    key: 'cleanItemStacksOnHand',
	    value: function cleanItemStacksOnHand() {
	      for (var itemKey in this.itemStacksOnHand) {
	        if (this.itemStacksOnHand[itemKey].itemStack.num <= 0) {
	          delete this.itemStacksOnHand[itemKey];
	        }
	      }
	      _emitter2.default.emit('bottom-panel-force-update');
	    }
	  }, {
	    key: 'addItem',
	    value: function addItem(itemID) {
	      var num = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

	      this.inventory.addItem({ id: itemID, num: num });
	    }
	  }, {
	    key: 'act',
	    value: function act() {
	      GameManager.engine.lock();

	      GameManager.Map.draw({ needToRunEvents: false });

	      /* wait for user input; do stuff when user hits a key */
	      window.addEventListener("keydown", this);

	      _emitter2.default.emit('left-panel-show-npcs-info');
	      // emitter.emit('map-ui-force-update') // 这个会造成 left-panel 显示不了 npcs

	      this.checkStates();
	    }
	  }, {
	    key: 'handleEvent',
	    value: function handleEvent(e) {
	      var textPanel = document.getElementsByClassName('text-panel')[0];
	      if (textPanel && textPanel.style.display !== "none") {
	        return;
	      }
	      var code = e.which;

	      var keyMap = {};

	      //keyMap[38] = 0 // up
	      keyMap[87] = 0; // w
	      keyMap[33] = 1;
	      //keyMap[39] = 2 // right
	      keyMap[68] = 2; // d
	      keyMap[34] = 3;
	      //keyMap[40] = 4 // down
	      keyMap[83] = 4; // s
	      keyMap[35] = 5;
	      //keyMap[37] = 6 // left
	      keyMap[65] = 6; // a
	      keyMap[36] = 7;

	      if (!(code in keyMap)) return;

	      var dir = keyMap[code];

	      if (this.hasState('chaotic')) {
	        // chaotic, can't control move direction
	        dir = Math.floor(Math.random() * 8);
	      }

	      var diff = ROT.DIRS[8][dir];
	      var targetX = this.x + diff[0];
	      var targetY = this.y + diff[1];

	      this.handleClick(targetX, targetY);
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(targetX, targetY) {
	      var textPanelComponent = _emitter2.default.state.textPanelComponent;
	      if (textPanelComponent.handleClick()) return;

	      // TODO 现在只能移动一格
	      if (Math.abs(targetX - this.x) >= 1.5 || Math.abs(targetY - this.y) >= 1.5) return;

	      var tiles = GameManager.Map.objectToBeRendered[targetX + ',' + targetY];
	      if (!tiles || !tiles.length) {
	        return;
	      }
	      var passable = !tiles.filter(function (tile) {
	        return !tile.passable;
	      }).length;

	      if (passable) {
	        this.setPosition(targetX, targetY);
	        GameManager.Map.draw({ isActionButton: false, targetPos: { x: targetX, y: targetY }, needToRunEvents: true });
	      } else {
	        // action button
	        // check normal attack to hostile npcs
	        var normalAttack = GameManager.Database.getSkill('normal-attack');
	        var _tiles = GameManager.Map.renderedTiles[targetX + ',' + targetY];
	        if (_tiles && _tiles.length && _tiles[_tiles.length - 1].gameObject) {
	          var b = _tiles[_tiles.length - 1].gameObject;
	          if (b.isOfType('npc') && b.hasState('hostile') && normalAttack.condition({ a: this, b: b })) {
	            normalAttack.act({ a: this, b: b });
	          }
	        }

	        GameManager.Map.draw({ isActionButton: true, targetPos: { x: targetX, y: targetY }, needToRunEvents: true });
	      }

	      // rerender mouse-panel
	      _emitter2.default.emit('mouse-panel-rerender');

	      window.removeEventListener('keydown', this);
	      GameManager.engine.unlock();
	    }
	  }, {
	    key: 'isPlayer',
	    value: function isPlayer() {
	      return true;
	    }
	  }, {
	    key: 'isNPC',
	    value: function isNPC() {
	      return false;
	    }
	  }]);

	  return Player;
	}(_npc2.default);

	exports.default = Player;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var emitter = _Simple2.default.createEmitter({
	  textPanelComponent: null,
	  historyPanelComponent: null,
	  mapUIComponent: null,
	  mousePanelComponent: null,
	  descriptionPanelComponent: null,
	  actionPanelComponent: null,
	  leftPanelComponent: null,
	  bottomPanelComponent: null,
	  infoPanelComponent: null
	});

	exports.default = emitter;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Component = __webpack_require__(5);
	var Emitter = __webpack_require__(7);

	var render = function render(component, domElement) {
	  var element = component._initialRender();
	  if (element) {
	    domElement.appendChild(element);
	  }
	};

	var createEmitter = function createEmitter(initialState) {
	  return new Emitter(initialState);
	};

	var Simple = {
	  Component: Component,
	  Emitter: Emitter,
	  createEmitter: createEmitter,
	  render: render
	};

	if (typeof window !== 'undefined') {
	  window.Simple = Simple;
	}

	if (true) {
	  module.exports = Simple;
	}

	exports.default = Simple;
	exports.Component = Component;
	exports.Emitter = Emitter;
	exports.createEmitter = createEmitter;
	exports.render = render;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SimpleDOM = __webpack_require__(6);

	function createSimpleComponent(methods) {
	  var SimpleComponent = function SimpleComponent(props) {
	    if (!this || !(this instanceof SimpleComponent)) {
	      return new SimpleComponent(props);
	    }

	    for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      children[_key - 1] = arguments[_key];
	    }

	    SimpleDOM.call(this, props, children);
	  };

	  SimpleComponent.prototype = Object.create(SimpleDOM.prototype);

	  for (var key in methods) {
	    SimpleComponent.prototype[key] = methods[key];
	  }

	  SimpleComponent.prototype.constructor = SimpleComponent;

	  return SimpleComponent;
	}

	function createStatelessSimpleComponent(func) {
	  var SimpleComponent = function SimpleComponent() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    if (!this || !this instanceof SimpleComponent) {
	      return new (Function.prototype.bind.apply(SimpleComponent, [null].concat(args)))();
	    }
	    this.render = func.bind(this, args);
	    SimpleDOM.call(this, null, []);
	  };
	  SimpleComponent.prototype = Object.create(SimpleDOM.prototype);
	  SimpleComponent.prototype.render = func;
	  SimpleComponent.prototype.constructor = SimpleComponent;

	  return SimpleComponent;
	}

	function Component(arg) {
	  if (arg.constructor === Function) {
	    return createStatelessSimpleComponent(arg);
	  } else {
	    return createSimpleComponent(arg);
	  }
	}

	module.exports = Component;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	function isNativeEvent(eventname) {
	  return typeof document.body["on" + eventname] !== "undefined";
	}

	// http://stackoverflow.com/questions/3076679/javascript-event-registering-without-using-jquery
	function addEvent(el, eventType, handler) {
	  if (el.addEventListener) {
	    // DOM Level 2 browsers
	    el.addEventListener(eventType, handler, false);
	  } else if (el.attachEvent) {
	    // IE <= 8
	    el.attachEvent('on' + eventType, handler);
	  } else {
	    // ancient browsers
	    el['on' + eventType] = handler;
	  }
	}

	function removeEvent(el, eventType, handler) {
	  if (el.removeEventListener) {
	    // DOM Level 2 browsers
	    el.removeEventListener(eventType, handler, false);
	  } else if (el.attachEvent) {
	    // IE <= 8
	    el.detachEvent('on' + eventType, handler);
	  }
	}

	var validTags = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section  select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr'.split(' ');

	/**
	 * Simple Element
	 * It should be stateless and immutable.
	 */
	function SimpleElement(tagName) {
	  var attributes = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	  var children = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	  var owner = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  this.tagName = tagName;
	  if (attributes) this.attributes = attributes;
	  if (children) this.children = children;
	  if (owner) this.owner = owner;
	}
	SimpleElement.prototype = Object.create(SimpleElement.prototype);
	SimpleElement.prototype.constructor = SimpleElement;
	SimpleElement.prototype._initialRender = function () {
	  if (this.tagName === '#text') {
	    this.element = document.createTextNode(this.children);
	    this.children = null; // THIS IS IMPORTANT
	    return this.element;
	  }
	  var _eventListeners = {};

	  this.element = document.createElement(this.tagName);

	  if (this.attributes) {
	    for (var key in this.attributes) {
	      var val = this.attributes[key];
	      if (isNativeEvent(key)) {
	        addEvent(this.element, key, val);
	        _eventListeners[key] = val;
	      } else if (key === 'ref') {
	        this.owner.refs[val] = this.element;
	      } else if (key === 'style' && val.constructor === Object) {
	        for (var styleKey in val) {
	          this.element.style[styleKey] = val[styleKey];
	        }
	      } else if (key === 'class' && val.constructor === Object) {
	        var className = '';
	        for (var c in val) {
	          if (val[c]) {
	            className += c + ' ';
	          }
	        }
	        this.element.className = className;
	      } else if (key === 'html') {
	        this.element.innerHTML = val;
	      } else {
	        this.element.setAttribute(key, val);
	      }
	    }
	  }

	  this._eventListeners = _eventListeners;
	  this._appendChildrenDOMElements(this.children);
	  return this.element;
	};

	SimpleElement.prototype._appendChildrenDOMElements = function (children) {
	  var _this = this;

	  if (!children.length) return;

	  children.forEach(function (child) {
	    if (child.constructor === Array) {
	      _this._appendChildrenDOMElements(child);
	    } else {
	      // SimpleDOM or SimpleElement
	      _this.element.appendChild(child._initialRender());
	    }
	  });
	};

	SimpleElement.prototype.removeSelf = function () {
	  if (this.element && this.element.parentElement) {
	    if (this.children instanceof Array) {
	      // children might contain SimpleDOM
	      this.children.forEach(function (child) {
	        return child.removeSelf();
	      });
	    }
	    this.element.parentElement.removeChild(this.element);
	    this.element = null;
	  }
	};

	SimpleElement.prototype.getDOMElement = function () {
	  return this.element;
	};
	SimpleElement.prototype.getSimpleElement = function () {
	  return this;
	};

	/**
	 * Simple DOM
	 */
	function SimpleDOM(props) {
	  var children = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	  this.props = this.getDefaultProps();
	  this.refs = {};
	  if (children.length) this.children = children;

	  if (props) {
	    Object.assign(this.props, props);
	  }

	  if (this.init) {
	    this.init();
	  }

	  this.element = this.render();
	  if (!this.element) {
	    throw 'render function has to return a valid element';
	  }
	}

	SimpleDOM.prototype = Object.create(SimpleDOM.prototype);

	SimpleDOM.prototype.getDefaultProps = function () {
	  return {};
	};

	SimpleDOM.prototype.emit = function (name) {
	  var data = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  if (this.emitter) {
	    this.emitter.emit(name, data, this);
	  }
	};

	SimpleDOM.prototype.render = function () {
	  throw "Render function is not implemented.";
	};

	SimpleDOM.prototype.init = function () {};
	SimpleDOM.prototype.mount = function () {};
	SimpleDOM.prototype.update = function () {};
	SimpleDOM.prototype.unmount = function () {};

	SimpleDOM.prototype.setState = function (newState) {
	  if (this.state) {
	    Object.assign(this.state, newState);
	  }
	  this.forceUpdate();
	};

	SimpleDOM.prototype.setProps = function (newProps) {
	  Object.assign(this.props, newProps);
	  this.forceUpdate();
	};

	SimpleDOM.prototype.forceUpdate = function () {
	  var oldVD = this.element;
	  this.element = this.render();
	  if (!this.element) {
	    throw 'render function has to return a valid element';
	  }
	  diff(oldVD, this.element);

	  this.update();
	};

	SimpleDOM.prototype._initialRender = function () {
	  var outputElement = null;
	  if (this.element) {
	    outputElement = this.element._initialRender();
	  }
	  this.mount();
	  return outputElement;
	};

	/**
	 * diff element and d, return a new element
	 * @param  {[type]} vd1     [old virtual dom]
	 * @param  {[type]} vd2     [new virtual dom]
	 */
	function diff(vd1, vd2) {
	  var simpleElement_1 = vd1.getSimpleElement();
	  var simpleElement_2 = vd2.getSimpleElement();
	  if (!simpleElement_2) return;
	  if (simpleElement_1.tagName !== simpleElement_2.tagName) {
	    // different tag
	    var element_2 = vd2._initialRender();
	    var element_1 = simpleElement_1.element;
	    element_1.parentNode.replaceChild(element_2, element_1);
	    return element_2;
	  } else if (simpleElement_1.tagName === '#text') {
	    simpleElement_1.element.nodeValue = simpleElement_2.children;
	    simpleElement_2.element = simpleElement_1.element;
	    return simpleElement_1.element;
	  } else {
	    var element = simpleElement_1.element;

	    // set attributes
	    while (element.attributes.length > 0) {
	      element.removeAttribute(element.attributes[0].name);
	    }

	    var eventsLength = 0,
	        _eventListeners = simpleElement_1._eventListeners || {},
	        events = {},
	        attributes = simpleElement_2.attributes;

	    for (var key in attributes) {
	      var val = attributes[key];
	      if (isNativeEvent(key)) {
	        if (_eventListeners[key] !== val) {
	          removeEvent(element, key, _eventListeners[key]);
	          addEvent(element, key, val);
	          events[key] = val;
	        }
	      } else if (key === 'ref') {
	        if (vd1.owner) {
	          vd1.owner.refs[val] = element;
	        }
	      } else if (key === 'style' && val.constructor === Object) {
	        for (var styleKey in val) {
	          element.style[styleKey] = val[styleKey];
	        }
	      } else if (key === 'class' && val.constructor === Object) {
	        var className = '';
	        for (var c in val) {
	          if (val[c]) {
	            className += c + ' ';
	          }
	        }
	        element.className = className;
	      } else if (key === 'html') {
	        element.innerHTML = val;
	      } else {
	        element.setAttribute(key, val);
	      }
	    }

	    for (var _key in _eventListeners) {
	      if (!events[_key]) {
	        removeEvent(element, _key, _eventListeners[_key]);
	      }
	    }
	    simpleElement_2._eventListeners = events; // append _eventListeners

	    // diff children
	    if (simpleElement_1.children.length === simpleElement_2.children.length) {
	      for (var i = 0; i < simpleElement_1.children.length; i++) {
	        diff(simpleElement_1.children[i], simpleElement_2.children[i]);
	      }
	    } else if (simpleElement_1.children.length > simpleElement_2.children.length) {
	      var _i = 0;
	      for (; _i < simpleElement_2.children.length; _i++) {
	        diff(simpleElement_1.children[_i], simpleElement_2.children[_i]);
	      }
	      for (; _i < simpleElement_1.children.length; _i++) {
	        simpleElement_1.children[_i].removeSelf();
	      }
	    } else {
	      // if (simpleElement_1.children.length < simpleElement_2.children.length) {
	      var _i2 = 0;
	      for (; _i2 < simpleElement_1.children.length; _i2++) {
	        diff(simpleElement_1.children[_i2], simpleElement_2.children[_i2]);
	      }
	      for (; _i2 < simpleElement_2.children.length; _i2++) {
	        element.appendChild(simpleElement_2.children[_i2]._initialRender());
	      }
	    }

	    simpleElement_2.element = element;

	    // unmount old
	    var vd = vd1;
	    while (vd && vd.constructor !== SimpleElement) {
	      vd.unmount();
	      vd = vd.element;
	    }

	    // mount new
	    vd = vd2;
	    while (vd && vd.constructor !== SimpleElement) {
	      vd.mount(); // <- mount!
	      vd = vd.element;
	    }
	    return element;
	  }
	}

	SimpleDOM.prototype.removeSelf = function () {
	  this.unmount();
	  this.element.removeSelf();
	};

	SimpleDOM.prototype.getDOMElement = function () {
	  if (this.element) return this.element.getDOMElement();
	};

	SimpleDOM.prototype.getSimpleElement = function () {
	  if (this.element) return this.element.getSimpleElement();else return null;
	};

	// add tags

	var _loop = function _loop(i) {
	  SimpleDOM.prototype[validTags[i]] = function () {
	    var attributes = null;
	    var offset = 0;
	    if (arguments[offset] !== null && typeof arguments[offset] !== 'undefined' && arguments[offset].constructor === Object) {
	      attributes = arguments[offset];
	      offset += 1;
	    }

	    var children = [];
	    function appendChildren(args) {
	      var offset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      for (var _i3 = offset; _i3 < args.length; _i3++) {
	        if (args[_i3]) {
	          if (args[_i3].constructor === Array) {
	            appendChildren(args[_i3]);
	          } else if (args[_i3] instanceof SimpleDOM && !args[_i3].element) {
	            continue;
	          } else if (args[_i3].constructor === Number) {
	            children.push(new SimpleElement('#text', null, args[_i3].toString()));
	          } else if (args[_i3].constructor === String) {
	            children.push(new SimpleElement('#text', null, args[_i3]));
	          } else {
	            children.push(args[_i3]);
	          }
	        }
	      }
	    }

	    appendChildren(arguments, offset);

	    return new SimpleElement(validTags[i].toUpperCase(), attributes, children, this);
	  };
	};

	for (var i = 0; i < validTags.length; i++) {
	  _loop(i);
	}

	SimpleDOM.prototype.constructor = SimpleDOM;

	module.exports = SimpleDOM;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	/*
	 * Event emitter class
	 */

	var emitters = {};

	function Emitter() {
	  var initialState = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.subscriptions = {};
	  this.id = null;

	  if (initialState.constructor === Function) {
	    var initFunc = initialState;
	    this.state = {};
	    initFunc.call(this);
	  } else {
	    this.state = initialState;
	  }
	}

	Emitter.prototype.constructor = Emitter;

	Emitter.prototype.registerId = function (id) {
	  if (emitters[id]) {
	    throw 'Error: ' + id + ' is already registered in Emitters';
	  } else {
	    this.id = id;
	    emitters[id] = this;
	  }
	};

	Emitter.getEmitterById = function (id) {
	  return emitters[id];
	};

	// emitter.emit()
	Emitter.prototype.emit = function (name) {
	  var data = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	  var sender = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  if (this.subscriptions[name]) {
	    this.subscriptions[name].call(this, data, sender);
	  }
	};

	// setState
	Emitter.prototype.setState = function () {
	  var states = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  Object.assign(this.state, states);
	};

	// emitter.on()
	// callback should be
	// - function(data, component) {
	//   }
	Emitter.prototype.on = function () {
	  if (arguments.length === 2) {
	    var name = arguments[0],
	        callback = arguments[1];
	    if (this.subscriptions[name]) {
	      throw 'Error: ' + name + ' is already registered in Emitter object';
	    } else {
	      this.subscriptions[name] = callback;
	    }
	  } else {
	    var obj = arguments[0];
	    for (var _name in obj) {
	      this.on(_name, obj[_name]);
	    }
	  }
	};

	// unsubscript the event
	Emitter.prototype.off = function (name) {
	  this.subscriptions[name] = null;
	};

	Emitter.prototype.destroy = function () {
	  this.state = {};
	  this.subscriptions = {};
	};

	/*
	Emitter.prototype.getState = function() {
	  return this.state
	}
	*/

	module.exports = Emitter;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _gameobject = __webpack_require__(9);

	var _gameobject2 = _interopRequireDefault(_gameobject);

	var _inventory = __webpack_require__(10);

	var _inventory2 = _interopRequireDefault(_inventory);

	var _utility = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// check database/npc.js
	// for samples of creating NPC

	var NPC = function (_GameObject) {
	  _inherits(NPC, _GameObject);

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

	  function NPC(data) {
	    _classCallCheck(this, NPC);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NPC).call(this, data));

	    _this.addType('npc');

	    // calculate basic stats
	    // check AWA.md for more information
	    _this.stats = {}; // eg: {currentHP: {value: +200, multiplier: 2}, ...}
	    var stats = data.stats;
	    if (stats) {
	      for (var statID in stats) {
	        _this.changeStat(statID, stats[statID]);
	      }
	    }

	    // items
	    var items = data.items || [];
	    _this.inventory = new _inventory2.default(items);

	    // TODO: equips

	    _this.attitude = data.attitude || 50;

	    // TODO: skills
	    _this.skills = {};
	    if (data.skills && data.skills.length) {
	      data.skills.forEach(function (d) {
	        var id = d.id,
	            priority = d.priority || 1,
	            condition = d.condition || function () {
	          return true;
	        };
	        _this.skills[id] = { id: id, priority: priority, condition: condition, skill: GameManager.Database.getSkill(id) };
	      });
	    }

	    // TODO: passive skills

	    // TODO: race

	    // TODO: class

	    // TODO: states
	    _this.states = {}; // {stateID: {state, restDuration}, ...}
	    var states = data.states || [];
	    states.forEach(function (stateID) {
	      var state = GameManager.Database.getState(stateID);
	      state.init(_this); // don't check canAct
	      _this.states[stateID] = { state: state, restDuration: state.duration };
	    });

	    _this.initExtra();
	    return _this;
	  }

	  // value: Number or multiplier 'x2'


	  _createClass(NPC, [{
	    key: 'changeStat',
	    value: function changeStat(statID, val) {
	      var value = val,
	          multiplier = 1;
	      if (typeof val === 'string') {
	        if (val[0] !== 'x' || val[0] !== 'X') {
	          throw 'Error changeStat: Invalid multiplier ' + val;
	        }
	        value = 0;
	        multiplier = parseFloat(val.slice(1));
	      }
	      // TODO: multiplier
	      if (this.stats[statID]) {
	        this.stats[statID].value += value;
	        this.stats[statID].multiplier *= multiplier;
	      } else {
	        this.stats[statID] = { value: value, multiplier: multiplier };
	      }
	    }
	  }, {
	    key: 'getStat',
	    value: function getStat(statID) {
	      var value = 0;
	      if (NPC.statsSettings[statID]) {
	        var attrs = {
	          strength: this.getStat('strength'),
	          agility: this.getStat('agility'),
	          intelligence: this.getStat('intelligence'),
	          constitution: this.getStat('constitution'),
	          perception: this.getStat('perception'),
	          charisma: this.getStat('charisma')
	        };
	        value = NPC.statsSettings[statID](attrs) || 0;
	      }
	      if (this.stats[statID]) {
	        var v = this.stats[statID].value || 0,
	            multiplier = this.stats[statID].multiplier || 1;
	        return (value + v) * multiplier;
	      } else {
	        return value;
	      }
	    }
	  }, {
	    key: 'addRace',
	    value: function addRace(raceID) {}
	  }, {
	    key: 'addClass',
	    value: function addClass(classID) {}
	  }, {
	    key: 'addEquip',
	    value: function addEquip(equipData) {}
	  }, {
	    key: 'addPersonality',
	    value: function addPersonality(personalityID) {}
	  }, {
	    key: 'removePersonality',
	    value: function removePersonality(personalityID) {}
	  }, {
	    key: 'addState',
	    value: function addState(stateID) {
	      var option = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var probability = option.probability || 1;
	      var state = GameManager.Database.getState(stateID);
	      if (state.canAct(this)) {
	        state.init(this);

	        var restDuration = state.duration;
	        if (this.states[stateID] && this.states[stateID].restDuration > restDuration) {
	          restDuration = this.states[stateID].restDuration;
	        }

	        this.states[stateID] = { state: state, restDuration: restDuration };
	      }
	    }

	    // check states each act turn

	  }, {
	    key: 'checkStates',
	    value: function checkStates() {
	      for (var stateID in this.states) {
	        var state = this.states[stateID].state,
	            restDuration = this.states[stateID].restDuration;
	        if (state.canAct(this)) {
	          state.act(this);
	          if (restDuration) {
	            restDuration -= 1;
	            if (restDuration === 0) {
	              this.removeState(stateID);
	            } else {
	              this.states[stateID].restDuration = restDuration;
	            }
	          }
	        } else {
	          this.removeState(stateID);
	        }
	      }
	    }
	  }, {
	    key: 'removeState',
	    value: function removeState(stateID) {
	      if (this.states[stateID]) {
	        var state = this.states[stateID].state;
	        delete this.states[stateID];
	        state.remove(this);
	      }

	      // TODO: recalculate stats
	    }
	    /**
	     * whether NPC has state?
	     * @param  {[String]}  stateID [description]
	     * @return {Boolean}           [description]
	     */

	  }, {
	    key: 'hasState',
	    value: function hasState(stateID) {
	      if (this.states[stateID]) return true;else return false;
	    }
	  }, {
	    key: 'isNPC',
	    value: function isNPC() {
	      return true;
	    }
	  }, {
	    key: 'isPlayer',
	    value: function isPlayer() {
	      return false;
	    }
	  }, {
	    key: 'getSpeed',
	    value: function getSpeed() {
	      return Math.max(this.getStat('speed'), 1); // at least 1
	    }
	  }, {
	    key: 'act',
	    value: function act() {
	      GameManager.engine.lock();

	      this.checkStates();

	      GameManager.engine.unlock();
	    }

	    // variance: [0~1]
	    // critical: [0~1]

	  }, {
	    key: 'receivePhysicalDamage',
	    value: function receivePhysicalDamage(damage) {
	      var option = arguments.length <= 1 || arguments[1] === undefined ? { variance: 0, critical: 0 } : arguments[1];

	      var variance = option.variance || 0;
	      var critical = option.critical || 0;
	      if (variance) {
	        if (Math.random() < 0.5) {
	          damage = damage * (1 - variance);
	        } else {
	          damage = damage * (1 + variance);
	        }
	      }

	      if (critical && Math.random() < critical) {
	        damage = (Math.random() + 1.5) * damage;
	      }

	      // apply shield
	      var shield = this.getStat('shield');
	      var physicalResistance = Math.min(0.96, shield * 0.04);
	      damage = damage * (1 - physicalResistance);

	      // receive damage
	      this.changeHP(-damage);
	      return damage;
	    }
	  }, {
	    key: 'receiveMagicalDamage',
	    value: function receiveMagicalDamage(damage) {}
	  }, {
	    key: 'removeItem',
	    value: function removeItem(itemStack, num) {
	      this.inventory.removeItem(itemStack, num);
	    }
	  }, {
	    key: 'changeHP',
	    value: function changeHP(dv) {
	      this.changeStat('currentHP', dv);
	      var currentHP = this.getStat('currentHP');
	      if (currentHP <= 0) {
	        this.stats.currentHP = { value: 0 };
	        this.addState('knockout');
	        // this.name = text({cn: '死亡了的'}) + this.name
	      }
	    }
	  }, {
	    key: 'initExtra',
	    value: function initExtra() {
	      if (!this.stats.currentHP) {
	        this.stats['currentHP'] = { value: this.getStat('hp') };
	      }
	      if (!this.stats.currentEP) {
	        this.stats['currentEP'] = { value: this.getStat('ep') };
	      }
	      if (!this.stats.currentMP) {
	        this.stats['currentMP'] = { value: this.getStat('mp') };
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
	  }]);

	  return NPC;
	}(_gameobject2.default);

	NPC.statsSettings = {
	  'hp': function hp(_ref) {
	    var constitution = _ref.constitution;
	    return constitution * 5;
	  },
	  'mp': function mp(_ref2) {
	    var intelligence = _ref2.intelligence;
	    var perception = _ref2.perception;
	    return Math.ceil((2 * intelligence + perception) / 3) * 5;
	  },
	  'ep': function ep(_ref3) {
	    var constitution = _ref3.constitution;
	    return Math.ceil(constitution * 10);
	  },
	  'atk': function atk(_ref4) {
	    var strength = _ref4.strength;

	    // physical damage
	    var o_atk = 0;
	    if (strength >= 1 && strength <= 2) {
	      o_atk = 2;
	    } else if (strength <= 5) {
	      o_atk = 4;
	    } else if (strength <= 8) {
	      o_atk = 6;
	    } else if (strength <= 10) {
	      o_atk = 8;
	    } else if (strength <= 15) {
	      o_atk = 10;
	    } else if (strength <= 18) {
	      o_atk = 13;
	    } else {
	      o_atk = 16;
	    }
	    return Math.floor(o_atk + strength / 5);
	  },
	  'm.atk': function mAtk(_ref5) {
	    var intelligence = _ref5.intelligence;

	    // magical damage
	    var o_atk = 0;
	    if (intelligence >= 1 && intelligence <= 2) {
	      o_atk = 4;
	    } else if (intelligence <= 5) {
	      o_atk = 6;
	    } else if (intelligence <= 8) {
	      o_atk = 7;
	    } else if (intelligence <= 10) {
	      o_atk = 8;
	    } else if (intelligence <= 15) {
	      o_atk = 9;
	    } else if (intelligence <= 18) {
	      o_atk = 12;
	    } else {
	      o_atk = 14;
	    }
	    return Math.floor(o_atk + intelligence / 5);
	  },
	  'threat': function threat(_ref6) {
	    var strength = _ref6.strength;
	    var charisma = _ref6.charisma;
	    return Math.ceil((3 * strength + 1 * charisma) / 4 * 0.6);
	  },
	  'speed': function speed(_ref7) {
	    var agility = _ref7.agility;
	    return Math.ceil(agility * 0.8);
	  },
	  'shield': function shield(_ref8) {
	    var strength = _ref8.strength;
	    return Math.ceil(strength / 5);
	  },
	  'magic-resistance': function magicResistance(_ref9) {
	    var intelligence = _ref9.intelligence;
	    var strength = _ref9.strength;
	    return Math.ceil((3 * intelligence + 1 * strength) / 4 * 0.75);
	  },
	  'critical': function critical(_ref10) {
	    var agility = _ref10.agility;
	    return Math.ceil(agility * 0.25) * 0.05;
	  },
	  'evasion': function evasion(_ref11) {
	    var agility = _ref11.agility;
	    return Math.ceil(agility * 0.2) * 0.05;
	  },
	  'magic-amplifier': function magicAmplifier(_ref12) {
	    var intelligence = _ref12.intelligence;
	    return intelligence;
	  },
	  'hit': function hit(_ref13) {
	    var agility = _ref13.agility;
	    var intelligence = _ref13.intelligence;
	    var perception = _ref13.perception;

	    // hit
	    var value = Math.ceil((2 * agility + intelligence + perception) / 4);
	    var hit = 0;
	    if (value <= 2) {
	      hit = 0.6;
	    } else if (value <= 5) {
	      hit = 0.75;
	    } else if (value <= 8) {
	      hit = 0.8;
	    } else if (value <= 10) {
	      hit = 0.85;
	    } else if (value <= 15) {
	      hit = 0.9;
	    } else if (value <= 18) {
	      hit = 0.95;
	    } else {
	      hit = 1;
	    }
	    return hit;
	  },
	  'hp-regen': function hpRegen(_ref14) {
	    var strength = _ref14.strength;
	    var constitution = _ref14.constitution;
	    return Math.ceil((strength + 2 * constitution) / 3 / 4);
	  },
	  'mp-regen': function mpRegen(_ref15) {
	    var intelligence = _ref15.intelligence;
	    var constitution = _ref15.constitution;
	    return Math.ceil((2 * intelligence + constitution) / 3 / 3);
	  },
	  'fov': function fov(_ref16) {
	    var perception = _ref16.perception;
	    return perception;
	  },
	  // ################ Resistance ##############################################
	  'resist-poison': function resistPoison(_ref17) {
	    var constitution = _ref17.constitution;
	    return Math.ceil(constitution * 0.8);
	  },
	  'resist-fire': function resistFire(_ref18) {
	    var constitution = _ref18.constitution;
	    return Math.ceil(constitution * 0.8);
	  },
	  'resist-cold': function resistCold(_ref19) {
	    var constitution = _ref19.constitution;
	    return Math.ceil(constitution * 0.8);
	  },
	  'resist-wound': function resistWound(_ref20) {
	    var constitution = _ref20.constitution;
	    return Math.ceil(constitution * 0.8);
	  },
	  'resist-paralysis': function resistParalysis(_ref21) {
	    var constitution = _ref21.constitution;
	    return Math.ceil(constitution * 0.8);
	  }, // 麻痹,
	  'resist-illness': function resistIllness(_ref22) {
	    var constitution = _ref22.constitution;
	    return Math.ceil(constitution * 0.8);
	  },
	  'resist-dizziness': function resistDizziness(_ref23) {
	    var perception = _ref23.perception;
	    return Math.ceil(perception * 0.8);
	  },
	  'resist-anger': function resistAnger(_ref24) {
	    var perception = _ref24.perception;
	    return Math.ceil(perception * 0.8);
	  },
	  'resist-chaos': function resistChaos(_ref25) {
	    var perception = _ref25.perception;
	    return Math.ceil(perception * 0.8);
	  },
	  'resist-blindness': function resistBlindness(_ref26) {
	    var perception = _ref26.perception;
	    return Math.ceil(perception * 0.8);
	  },

	  // ############### Skill Stats ##############################################
	  'unlock': function unlock(_ref27) {
	    var intelligence = _ref27.intelligence;
	    var perception = _ref27.perception;
	    return Math.ceil((intelligence + perception) / 2 * 0.6);
	  },
	  'explore': function explore(_ref28) {
	    var intelligence = _ref28.intelligence;
	    var perception = _ref28.perception;
	    return Math.ceil((2 * intelligence + 3 * perception) / 5 * 0.8);
	  },
	  'steal': function steal(_ref29) {
	    var agility = _ref29.agility;
	    var perception = _ref29.perception;
	    return Math.ceil((agility + perception) / 2 * 0.5);
	  },
	  'negotiation': function negotiation(_ref30) {
	    var charisma = _ref30.charisma;
	    var intelligence = _ref30.intelligence;
	    return Math.ceil((2 * charisma + 3 * intelligence) / 5 * 0.8);
	  },
	  'mine': function mine(_ref31) {
	    var strength = _ref31.strength;
	    var constitution = _ref31.constitution;
	    return Math.ceil((3 * strength + 1 * constitution) / 4 * 0.6);
	  },
	  'study': function study(_ref32) {
	    var intelligence = _ref32.intelligence;
	    return Math.ceil(intelligence * 0.5);
	  },
	  'examine': function examine(_ref33) {
	    var intelligence = _ref33.intelligence;
	    var perception = _ref33.perception;
	    return Math.ceil((intelligence + perception) / 2 * 0.5);
	  }
	};

	exports.default = NPC;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GameObject = function () {
	  function GameObject(_ref) {
	    var _this = this;

	    var _ref$init = _ref.init;
	    var init = _ref$init === undefined ? null : _ref$init;
	    var _ref$display = _ref.display;
	    var display = _ref$display === undefined ? null : _ref$display;
	    var _ref$getDisplay = _ref.getDisplay;
	    var getDisplay = _ref$getDisplay === undefined ? null : _ref$getDisplay;
	    var _ref$runEvent = _ref.runEvent;
	    var runEvent = _ref$runEvent === undefined ? null : _ref$runEvent;
	    var _ref$x = _ref.x;
	    var x = _ref$x === undefined ? null : _ref$x;
	    var _ref$y = _ref.y;
	    var y = _ref$y === undefined ? null : _ref$y;
	    var _ref$act = _ref.act;
	    var act = _ref$act === undefined ? null : _ref$act;
	    var _ref$getSpeed = _ref.getSpeed;
	    var getSpeed = _ref$getSpeed === undefined ? null : _ref$getSpeed;
	    var _ref$name = _ref.name;
	    var name = _ref$name === undefined ? null : _ref$name;
	    var _ref$types = _ref.types;
	    var types = _ref$types === undefined ? [] : _ref$types;
	    var _ref$subscriptions = _ref.subscriptions;
	    var subscriptions = _ref$subscriptions === undefined ? null : _ref$subscriptions;

	    _classCallCheck(this, GameObject);

	    this.name = name;

	    this.x = x;
	    this.y = y;

	    this.types = {};
	    types.forEach(function (type) {
	      return _this.addType(type);
	    });

	    if (display) {
	      this.getDisplay = function () {
	        return display;
	      };
	    }
	    if (getDisplay) {
	      this.getDisplay = getDisplay;
	    }
	    if (runEvent) {
	      this.runEvent = runEvent;
	    }
	    if (act) {
	      this.act = act;
	    }
	    if (getSpeed) {
	      this.getSpeed = getSpeed;
	    }

	    // subscriptions
	    this.subscriptions = {};
	    if (subscriptions) {
	      for (var _name in subscriptions) {
	        this.on(_name, subscriptions[_name].bind(this));
	      }
	    }

	    if (init) {
	      init.bind(this)();
	    }

	    this.active = true; // if not active, then this gameObject is removed
	  }

	  _createClass(GameObject, [{
	    key: 'setPosition',
	    value: function setPosition(x, y) {
	      this.x = x;
	      this.y = y;
	    }
	  }, {
	    key: 'emit',
	    value: function emit(name) {
	      var data = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	      if (this.subscriptions[name]) {
	        return this.subscriptions[name](data);
	      }
	      return null;
	    }
	  }, {
	    key: 'on',
	    value: function on(name, func) {
	      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	        for (var n in name) {
	          this.on(n, name[n]);
	        }
	      } else {
	        this.subscriptions[name] = func;
	      }
	    }
	  }, {
	    key: 'off',
	    value: function off(name) {
	      delete this.subscriptions[name];
	    }
	  }, {
	    key: 'hasSubscription',
	    value: function hasSubscription(name) {
	      return this.subscriptions[name];
	    }

	    /**
	     * check if this has subscription `name`
	     * if '$name' exists in subscription, then check if that return true
	     * `$name` is the condition function.
	     * check 'furious-rat' in 'npc.js' for example
	     * @param  {[type]} name [description]
	     * @return {[type]}      [description]
	     */

	  }, {
	    key: 'canBeDone',
	    value: function canBeDone(name) {
	      if (this.subscriptions[name]) {
	        if (this.subscriptions['$' + name]) {
	          return this.subscriptions['$' + name]();
	        } else {
	          return true;
	        }
	      } else {
	        return false;
	      }
	    }

	    /**
	     * get shortest distance from this gameObject to b
	     * @param  {[type]} b [description]
	     * @return {[type]}   [description]
	     */

	  }, {
	    key: 'dist',
	    value: function dist(b) {
	      var option = arguments.length <= 1 || arguments[1] === undefined ? { checkBlock: false } : arguments[1];

	      var checkBlock = option.checkBlock;
	      var passableCallback = function passableCallback(x, y) {
	        return true;
	      };

	      var x = b.targetX,
	          y = b.targetY;

	      if (b instanceof GameObject) {
	        x = b.x;
	        y = b.y;
	      }

	      /* prepare path to given coords */
	      var dijkstra = new ROT.Path.Dijkstra(x, y, passableCallback);

	      var distance = -1;
	      /* compute from given coords #1 */
	      dijkstra.compute(this.x, this.y, function (x, y) {
	        // console.log(x, y)
	        distance += 1;
	      });

	      return distance;
	    }
	  }, {
	    key: 'act',
	    value: function act() {}
	  }, {
	    key: 'getSpeed',
	    value: function getSpeed() {
	      return 0;
	    }
	  }, {
	    key: 'getDisplay',
	    value: function getDisplay() {
	      return null;
	    }
	  }, {
	    key: 'runEvent',
	    value: function runEvent(eventTrigger) {}
	  }, {
	    key: 'setActive',
	    value: function setActive(active) {
	      this.active = active;
	    }
	  }, {
	    key: 'isOfType',
	    value: function isOfType(type) {
	      return this.types[type] === true;
	    }
	  }, {
	    key: 'addType',
	    value: function addType(type) {
	      this.types[type] = true;
	    }
	  }]);

	  return GameObject;
	}();

	window.GameObject = GameObject;

	exports.default = GameObject;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * This Inventory is not used yet
	 */
	/**
	 * Inventory class
	 * itemsData = [
	 * 	{ id: String required
	 * 		num: [1~+] optional, default: 1
	 * 	}
	 * ]
	 */

	var Inventory = function () {
	  function Inventory() {
	    var _this = this;

	    var itemsData = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	    _classCallCheck(this, Inventory);

	    this.itemStacks = {};

	    itemsData.forEach(function (itemData) {
	      return _this.addItem(itemData);
	    });
	  }

	  _createClass(Inventory, [{
	    key: "addItem",
	    value: function addItem(itemData) {
	      var item = GameManager.Database.getItem(itemData.id);
	      if (this.itemStacks[itemData.id]) {
	        this.itemStacks[itemData.id].num = this.itemStacks[itemData.id].num + (itemData.num || 1);
	      } else {
	        this.itemStacks[itemData.id] = {
	          id: itemData.id,
	          num: itemData.num || 1,
	          item: item
	        };
	      }
	    }
	  }, {
	    key: "removeItem",
	    value: function removeItem(itemStack, num) {
	      var id = itemStack.id;
	      if (this.itemStacks[id]) {
	        this.itemStacks[id].num = this.itemStacks[id].num - num;

	        if (this.itemStacks[id].num <= 0) {
	          delete this.itemStacks[id];
	        }
	      }
	    }
	  }]);

	  return Inventory;
	}();

	exports.default = Inventory;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * settings
	 */
	var settings = {
	  language: 'CN'
	};

	/*
	 * text
	 */
	var text = function text(t) {
	  if (typeof t === 'string') return t;
	  return t[settings.language.toLowerCase()];
	};

	/*
	 * D20
	 * return [1...20]
	 */
	var D20 = function D20() {
	  return Math.floor(Math.random() * 20 + 1);
	};
	/**
	 * [function description]
	 * @param  {[Number]} a [description]
	 * @param  {[Number]} b [description]
	 * @return {[Number]} return random number between [a, b)
	 */
	var randomInt = function randomInt(a, b) {
	  if (!b) {
	    b = a;
	    a = 0;
	  }

	  return Math.floor(Math.random() * (b - a) + a);
	};

	var randomArr = function randomArr(arr) {
	  return arr[Math.floor(Math.random() * arr.length)];
	};

	var Utility = {
	  text: text, D20: D20, randomInt: randomInt, randomArr: randomArr
	};

	exports.default = Utility;
	exports.text = text;
	exports.D20 = D20;
	exports.randomInt = randomInt;
	exports.randomArr = randomArr;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _player = __webpack_require__(2);

	var _player2 = _interopRequireDefault(_player);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Dungeon = function () {
	  function Dungeon(_ref, gm) {
	    var _ref$dungeonWidth = _ref.dungeonWidth;
	    var dungeonWidth = _ref$dungeonWidth === undefined ? 40 : _ref$dungeonWidth;
	    var _ref$dungeonHeight = _ref.dungeonHeight;
	    var dungeonHeight = _ref$dungeonHeight === undefined ? 25 : _ref$dungeonHeight;
	    var _ref$boxNum = _ref.boxNum;
	    var boxNum = _ref$boxNum === undefined ? 10 : _ref$boxNum;
	    var _ref$options = _ref.options;
	    var options = _ref$options === undefined ? {} : _ref$options;

	    _classCallCheck(this, Dungeon);

	    this.gm = gm;
	    this.player = null;

	    this.map = new ROT.Map.Digger(dungeonWidth, dungeonHeight, options /*, {roomWidth, roomHeight, dugPercentage, timeLimit}*/);

	    this.mapData = {};
	    this.freeCells = [];

	    this.map.create(this.digCallback.bind(this));
	    this.generateBoxes(boxNum);

	    // console.log(this.map.getRooms())
	  }

	  _createClass(Dungeon, [{
	    key: 'digCallback',
	    value: function digCallback(x, y, value) {
	      var key = x + ',' + y;

	      if (value) {
	        // wall
	        this.mapData[key] = {
	          text: '#',
	          description: '这是一面墙',
	          canPass: false,
	          color: '#636363',
	          type: 'wall'
	        };
	      } else {
	        this.mapData[key] = {
	          text: '.',
	          description: '迷宫的地面',
	          canPass: true,
	          color: '#078a62',
	          type: 'floor'
	        };

	        this.freeCells.push(key);
	      }
	    }
	  }, {
	    key: 'generateBoxes',
	    value: function generateBoxes(boxNum) {
	      var _freeCells = [];
	      for (var i = 0; i < boxNum; i++) {
	        var index = Math.floor(ROT.RNG.getUniform() * this.freeCells.length);
	        var key = this.freeCells.splice(index, 1)[0];
	        _freeCells.push(key);
	      }

	      this.freeCells = _freeCells;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      if (!this.player) {
	        throw 'Dungeon Error: Player has to be set first';
	      }
	      for (var key in this.mapData) {
	        var parts = key.split(','),
	            x = parseInt(parts[0]),
	            y = parseInt(parts[1]),
	            data = this.mapData[key];

	        var realPos = this.gm.relativeToPlayerPos(x, y);
	        var realX = realPos.x,
	            realY = realPos.y;

	        if (realX < 0 || realX > this.gm.DISPLAY_WIDTH || realY < 0 || realY > this.gm.DISPLAY_HEIGHT) {
	          continue; // outside screen
	        }

	        if (data.type === 'wall' && this.needToBeHidden(x, y)) {
	          // check nearby as floor
	          continue;
	        }

	        this.gm.display.draw(realX, realY, data.text, data.color, data.backgroundColor);
	      }
	    }
	  }, {
	    key: 'needToBeHidden',
	    value: function needToBeHidden(x, y) {
	      var dirs = [[-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0]];

	      for (var i = 0; i < dirs.length; i++) {
	        var dir = dirs[i],
	            key = x + dir[0] + ',' + (y + dir[1]),
	            data = this.mapData[key];

	        if (data && data.type === 'floor') {
	          return false;
	        }
	      }

	      return true;
	    }
	  }, {
	    key: 'setPlayer',
	    value: function setPlayer() {
	      var index = Math.floor(ROT.RNG.getUniform() * this.freeCells.length),
	          key = this.freeCells.splice(index, 1)[0],
	          parts = key.split(","),
	          x = parseInt(parts[0]),
	          y = parseInt(parts[1]);

	      var player = new _player2.default(x, y, this.gm);
	      this.player = player;
	      return player;
	    }
	  }, {
	    key: 'getDataAtPos',
	    value: function getDataAtPos(x, y) {
	      return this.mapData[x + ',' + y];
	    }
	  }]);

	  return Dungeon;
	}();

	exports.default = Dungeon;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	var _mainMenu = __webpack_require__(14);

	var _mainMenu2 = _interopRequireDefault(_mainMenu);

	var _newAdventureUi = __webpack_require__(15);

	var _newAdventureUi2 = _interopRequireDefault(_newAdventureUi);

	var _mapUi = __webpack_require__(16);

	var _mapUi2 = _interopRequireDefault(_mapUi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GameUI = _Simple2.default.Component({
	  init: function init() {
	    this.state = {
	      /**
	       * page
	       *
	       * MAIN_MENU
	       * NEW_ADVENTURE_UI
	       * MAP_UI
	       */
	      page: 'MAIN_MENU'
	    };
	  },
	  render: function render() {
	    switch (this.state.page) {
	      case 'MAIN_MENU':
	        return (0, _mainMenu2.default)();
	      case 'NEW_ADVENTURE_UI':
	        return (0, _newAdventureUi2.default)();
	      case 'MAP_UI':
	        return (0, _mapUi2.default)();
	      default:
	        throw 'GameUI Error: Invalid page';
	    }
	  }
	});

	exports.default = GameUI;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MainMenu = _Simple2.default.Component({
	  init: function init() {
	    // GameManager.Keyboard.setEvent(this.keyboardEvent.bind(this))
	  },
	  /*
	  keyboardEvent: function(e) {
	    let code = e.which
	    if (code === 90) { // z
	      console.log('start game')
	      // GameManager.gameUI.setState({page: 'NEW_ADVENTURE_UI'})
	    } else if (code === 88) { // x
	      console.log('load game')
	      // GameManager.gameUI.setState({page: 'MAP_UI'})
	    } else if (code === 67) { // c
	      console.log('exit game')
	    } else if (code === GameManager.Keyboard.keyCode.t) {
	      this.tutorial()
	    }
	  },
	  */
	  tutorial: function tutorial() {
	    GameManager.gameUI.setState({ page: 'MAP_UI' });
	    GameManager.Map.drawMapById('tutorial', 'spawn-point');
	  },

	  render: function render() {
	    return this.div({ class: 'main-menu' }, this.div({ class: 'title' }, '异世界冒险奇谭：曙光计划'), this.div({ class: 'start-game option' }, '新的冒险'), this.div({ class: 'load-game option' }, '旧的回忆'), this.div({ class: 'tutorial option', click: this.tutorial.bind(this) }, '进行教程'), this.div({ class: 'exit-game option' }, '回到现实'), this.div({ class: 'version' }, 'Version 0.0.01'));
	  }
	});

	exports.default = MainMenu;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NewAdventureUI = _Simple2.default.Component({
	  init: function init() {
	    this.state = {
	      /**
	       * page:
	       * ENTER_NAME
	       * ROLL_ATTRIBUTES
	       * CAREER_OPTION
	       * RACE_OPTION
	       *
	       */
	      page: 'ENTER_NAME',
	      playerName: '',

	      strength: Math.floor(Math.random() * 12 + 1),
	      agility: Math.floor(Math.random() * 12 + 1),
	      intelligence: Math.floor(Math.random() * 12 + 1),
	      constitution: Math.floor(Math.random() * 12 + 1),
	      charisma: Math.floor(Math.random() * 12 + 1),
	      perception: Math.floor(Math.random() * 12 + 1),
	      lockNum: 1,
	      strengthLock: false,
	      agilityLock: false,
	      intelligenceLock: false,
	      constitutionLock: false,
	      charismaLock: false,
	      perceptionLock: false,

	      career: 'knight', // 'archer'

	      gender: 'male' // or 'female
	    };
	    GameManager.Keyboard.setEvent(this.keyboardEvent.bind(this));
	  },
	  keyboardEvent: function keyboardEvent(e) {
	    var code = e.which;
	    if (this.state.page === 'ENTER_NAME') {
	      if (code === 13) {
	        // enter
	        var name = this.refs.nameInput.value.trim();
	        if (name.length) {
	          this.setState({ page: 'ROLL_ATTRIBUTES', playerName: name });
	        } else {
	          this.setState({ playerName: '' });
	        }
	      }
	    } else if (this.state.page === 'ROLL_ATTRIBUTES') {
	      var _code = e.which;

	      if (_code === 81) {
	        // q
	        if (this.state.lockNum > 0 && !this.state.strengthLock) {
	          this.setState({ lockNum: this.state.lockNum - 1, strengthLock: true });
	        } else if (this.state.strengthLock) {
	          this.setState({ lockNum: this.state.lockNum + 1, strengthLock: false });
	        }
	      } else if (_code === 87) {
	        // w
	        if (this.state.lockNum > 0 && !this.state.agilityLock) {
	          this.setState({ lockNum: this.state.lockNum - 1, agilityLock: true });
	        } else if (this.state.agilityLock) {
	          this.setState({ lockNum: this.state.lockNum + 1, agilityLock: false });
	        }
	      } else if (_code === 69) {
	        // e
	        if (this.state.lockNum > 0 && !this.state.intelligenceLock) {
	          this.setState({ lockNum: this.state.lockNum - 1, intelligenceLock: true });
	        } else if (this.state.intelligenceLock) {
	          this.setState({ lockNum: this.state.lockNum + 1, intelligenceLock: false });
	        }
	      } else if (_code === 65) {
	        // a
	        if (this.state.lockNum > 0 && !this.state.constitutionLock) {
	          this.setState({ lockNum: this.state.lockNum - 1, constitutionLock: true });
	        } else if (this.state.constitutionLock) {
	          this.setState({ lockNum: this.state.lockNum + 1, constitutionLock: false });
	        }
	      } else if (_code === 83) {
	        // s
	        if (this.state.lockNum > 0 && !this.state.perceptionLock) {
	          this.setState({ lockNum: this.state.lockNum - 1, perceptionLock: true });
	        } else if (this.state.perceptionLock) {
	          this.setState({ lockNum: this.state.lockNum + 1, perceptionLock: false });
	        }
	      } else if (_code === 68) {
	        // d
	        if (this.state.lockNum > 0 && !this.state.charismaLock) {
	          this.setState({ lockNum: this.state.lockNum - 1, charismaLock: true });
	        } else if (this.state.charismaLock) {
	          this.setState({ lockNum: this.state.lockNum + 1, charismaLock: false });
	        }
	      } else if (_code === 90) {
	        // z
	        console.log('确定属性');
	        this.setState({ page: 'CAREER_OPTION' });
	      } else if (_code === 88) {
	        // x
	        console.log('后退');
	        this.setState({ page: 'ENTER_NAME' });
	      } else if (_code === 82) {
	        // r
	        console.log('重新掷骰');
	        var strength = Math.floor(Math.random() * 12 + 1),
	            agility = Math.floor(Math.random() * 12 + 1),
	            intelligence = Math.floor(Math.random() * 12 + 1),
	            constitution = Math.floor(Math.random() * 12 + 1),
	            charisma = Math.floor(Math.random() * 12 + 1),
	            perception = Math.floor(Math.random() * 12 + 1);

	        // roll again
	        if (!this.state.strengthLock) {
	          this.state.strength = strength;
	        }

	        if (!this.state.agilityLock) {
	          this.state.agility = agility;
	        }

	        if (!this.state.intelligenceLock) {
	          this.state.intelligence = intelligence;
	        }

	        if (!this.state.constitutionLock) {
	          this.state.constitution = constitution;
	        }

	        if (!this.state.perceptionLock) {
	          this.state.perception = perception;
	        }

	        if (!this.state.charismaLock) {
	          this.state.charisma = charisma;
	        }

	        this.forceUpdate();
	      }
	    } else if (this.state.page === 'CAREER_OPTION') {
	      var _code2 = e.which;

	      if (_code2 === 90) {
	        // z
	        this.setState({ page: 'RACE_OPTION' });
	      } else if (_code2 === 88) {
	        // x
	        this.setState({ page: 'ROLL_ATTRIBUTES' });
	      }
	    } else if (this.state.page === 'RACE_OPTION') {
	      var _code3 = e.which;

	      if (_code3 === 90) {// z

	      } else if (_code3 === 88) {
	        // x
	        this.setState({ page: 'CAREER_OPTION' });
	      }
	    }
	  },
	  render: function render() {
	    switch (this.state.page) {
	      case 'ENTER_NAME':
	        return this.div({ class: 'new-adventure-ui' }, this.div({ class: 'welcome' }, '欢迎你，冒险者。'), this.input({ class: 'name-input', ref: 'nameInput', type: 'text', placeholder: '你的名字叫做？（按 [enter] 键确定)', autofocus: 'true', value: this.state.playerName }));
	      case 'ROLL_ATTRIBUTES':
	        return this.div({ class: 'new-adventure-ui roll-attributes' }, this.div({ class: 'welcome-with-name' }, '你好 ' + this.state.playerName), this.div({ class: 'hint' }, '请按 [r] 键重新掷骰。剩余 ' + this.state.lockNum + ' 个锁定'), this.div({ class: 'attribute strength' + (this.state.strengthLock ? ' lock' : '') }, '[q] 力量  ' + this.state.strength + (this.state.strengthLock ? '  🔒' : '')), this.div({ class: 'attribute agility' + (this.state.agilityLock ? ' lock' : '') }, '[w] 敏捷  ' + this.state.agility + (this.state.agilityLock ? '  🔒' : '')), this.div({ class: 'attribute intelligence' + (this.state.intelligenceLock ? ' lock' : '') }, '[e] 智力  ' + this.state.intelligence + (this.state.intelligenceLock ? '  🔒' : '')), this.div({ class: 'attribute constitution' + (this.state.constitutionLock ? ' lock' : '') }, '[a] 体质  ' + this.state.constitution + (this.state.constitutionLock ? '  🔒' : '')), this.div({ class: 'attribute perception' + (this.state.perceptionLock ? ' lock' : '') }, '[s] 感知  ' + this.state.perception + (this.state.perceptionLock ? '  🔒' : '')), this.div({ class: 'attribute charisma' + (this.state.charismaLock ? ' lock' : '') }, '[d] 魅力  ' + this.state.charisma + (this.state.charismaLock ? '  🔒' : '')), this.div({ class: 'bottom-hint' }, '[z] 确定，[x] 后退'));
	      case 'CAREER_OPTION':
	        return this.div({ class: 'new-adventure-ui career-option' }, this.div({ class: 'welcome' }, '请选择你的职业'), this.div({ class: 'careers-div' }, this.div({ class: 'career-name-title' }, '职业类型'), this.div({ class: 'career-name selected' }, '[q] 骑士'), this.div({ class: 'career-name' }, '[w] 剑士'), this.div({ class: 'career-name' }, '[e] 游侠'), this.div({ class: 'career-name' }, '[a] 盗贼'), this.div({ class: 'career-name' }, '[s] 法师'), this.div({ class: 'career-name' }, '[d] 牧师')), this.div({ class: 'career-intro' }, this.div({ class: 'basic-intro' }, '骑士是擅长防御的职业。'), this.div({ class: 'attribute-correct' }, '属性修正'), this.div({ class: 'attribute strength' }, '力量 ' + this.state.strength + ' + 2 = ' + (this.state.strength + 2)), this.div({ class: 'attribute agility' }, '敏捷 ' + this.state.agility + ' - 1 = ' + (this.state.agility - 1)), this.div({ class: 'attribute intelligence' }, '智力 ' + this.state.intelligence + ' + 1 = ' + (this.state.intelligence + 1)), this.div({ class: 'attribute constitution' }, '体质 ' + this.state.constitution + ' + 3 = ' + (this.state.constitution + 3)), this.div({ class: 'attribute perception' }, '感知 ' + this.state.perception + ' + 0 = ' + (this.state.perception + 0)), this.div({ class: 'attribute charisma' }, '魅力 ' + this.state.charisma + ' + 0 = ' + (this.state.charisma + 0)), this.div({ class: 'career-special' }, '职业特性'), this.div({ class: 'career-special-intro' }, '初始护甲 +4，初始魔抗 +2。 初始技能 盾击，盾防。')), this.div({ class: 'bottom-hint' }, '[z] 确定，[x] 后退'));
	      case 'RACE_OPTION':
	        return this.div({ class: 'new-adventure-ui race-option' }, this.div({ class: 'welcome' }, '请选择你的种族'), this.div({ class: 'races-div' }, this.div({ class: 'race-name-title' }, '种族类型'), this.div({ class: 'race-name selected' }, '人类'), this.div({ class: 'race-name' }, '精灵'), this.div({ class: 'race-name' }, '矮人'), this.div({ class: 'race-name' }, '地精'), this.div({ class: 'race-name' }, '兽人'), this.div({ class: 'race-name' }, '狼人'), this.div({ class: 'race-name' }, '猫族'), this.div({ class: 'race-name' }, '狐妖') /*,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       this.div({class: 'race-name'}, '魔人'),
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       this.div({class: 'race-name'}, '天神'),
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       this.div({class: 'race-name'}, '魔王'),
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       this.div({class: 'race-name'}, '恶魔')*/
	        ), this.div({ class: 'race-intro' }, this.div({ class: 'basic-intro' }, '人类占大陆的绝大部分人口。')), this.div({ class: 'bottom-hint' }, '[z] 确定，[x] 后退'));
	      default:
	        throw 'NewAdventureUI error: Invalid Page.';
	    }
	  }
	});

	exports.default = NewAdventureUI;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	var _emitter = __webpack_require__(3);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _playerInfoUi = __webpack_require__(17);

	var _playerInfoUi2 = _interopRequireDefault(_playerInfoUi);

	var _skillInfoUi = __webpack_require__(18);

	var _skillInfoUi2 = _interopRequireDefault(_skillInfoUi);

	var _helpInfoUi = __webpack_require__(19);

	var _helpInfoUi2 = _interopRequireDefault(_helpInfoUi);

	var _historyPanel = __webpack_require__(20);

	var _historyPanel2 = _interopRequireDefault(_historyPanel);

	var _textPanel = __webpack_require__(21);

	var _textPanel2 = _interopRequireDefault(_textPanel);

	var _descriptionPanel = __webpack_require__(22);

	var _descriptionPanel2 = _interopRequireDefault(_descriptionPanel);

	var _leftPanel = __webpack_require__(24);

	var _leftPanel2 = _interopRequireDefault(_leftPanel);

	var _mousePanel = __webpack_require__(26);

	var _mousePanel2 = _interopRequireDefault(_mousePanel);

	var _bottomPanel = __webpack_require__(28);

	var _bottomPanel2 = _interopRequireDefault(_bottomPanel);

	var _infoPanel = __webpack_require__(29);

	var _infoPanel2 = _interopRequireDefault(_infoPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_emitter2.default.on('map-ui-connect', function (data, component) {
	  this.setState({ mapUIComponent: component });
	});

	_emitter2.default.on('map-ui-bind-keyboard', function () {
	  this.state.mapUIComponent.rebindKeyboardEvent();
	});

	var MapUI = _Simple2.default.Component({
	  emitter: _emitter2.default,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      historyLogs: []
	    };
	  },
	  init: function init() {
	    this.state = {
	      showPlayerInfoUI: false,
	      showSkillInfoUI: false,
	      showHelpInfoUI: false
	    };
	    this.emit('map-ui-connect');
	    GameManager.Keyboard.setEvent(this.keyboardEvent.bind(this));
	  },
	  mount: function mount() {
	    // console.log(this)
	  },

	  keyboardEvent: function keyboardEvent(e) {
	    var code = e.which;
	    // 每个其他的组建应该又他们自己来控制，例如查看 info-panel.js
	    /*
	    if (code === GameManager.Keyboard.keyCode.c) { // c
	      this.setState({showPlayerInfoUI: !this.state.showPlayerInfoUI})
	    } else if (code === GameManager.Keyboard.keyCode.x) { // x
	      this.setState({showSkillInfoUI: !this.state.showSkillInfoUI})
	    } else if (code === GameManager.Keyboard.keyCode.z) { // z
	     } else if (code === GameManager.Keyboard.keyCode.QUESTION_MARK && e.shiftKey) { // ?
	      this.setState({showHelpInfoUI: !this.state.showHelpInfoUI})
	    } else
	    */

	    /*else if (code === GameManager.Keyboard.keyCode.ESC) { // esc
	      this.setState({
	        showPlayerInfoUI: false,
	        showSkillInfoUI: false,
	        showHelpInfoUI: false
	      })
	      this.emit('info-panel-hide')
	    }*/
	  },
	  rebindKeyboardEvent: function rebindKeyboardEvent() {
	    GameManager.Keyboard.setEvent(this.keyboardEvent.bind(this));
	  },
	  render: function render() {
	    var player = GameManager.player;

	    return this.div({ class: 'map-ui' },
	    /*
	              this.div({class: 'top-panel'},
	                this.div({class: 'weather'}, '晴天'),
	                this.div({class: 'time'}, '11:00'),
	                this.div({class: 'week'}, '星期一'),
	                this.div({class: 'year'}, '814年12月25日'),
	                this.div({class: 'gold'}, '金币: 100g'),
	                this.div({class: 'skill-point'}, '白金币: 5sp')
	              ),
	    */
	    (0, _mousePanel2.default)(),

	    // left panel
	    // used to show player and enemy info
	    (0, _leftPanel2.default)(), (0, _historyPanel2.default)({ logs: this.props.historyLogs }), (0, _descriptionPanel2.default)(), (0, _textPanel2.default)(), (0, _bottomPanel2.default)({ selectedItemOffset: player.selectedItemStackOffset }), (0, _infoPanel2.default)(),

	    /*
	    this.div({class: 'bottom-panel'},
	      this.div({class: 'map-container'}),
	      this.div({class: 'map-info'}, '洞窟 (0, 0)'),
	      this.div({class: 'player-info'},
	        this.div({class: 'name'}, '我一祎'),
	        this.div({class: 'level'}, 'Lvl. 12'),
	        this.div({class: 'hp'}, 'HP: 12 / 15'),
	        this.div({class: 'mana'}, 'MP: 4 / 6'),
	        this.div({class: 'energy'}, 'EP: 90 / 100'),
	        this.div({class: 'states-list'},
	          this.div({class: 'state'}, '眩晕'),
	          this.div({class: 'state'}, '中毒'),
	          this.div({class: 'state'}, '麻痹'),
	          this.div({class: 'state'}, '灼伤'),
	          this.div({class: 'state'}, '冻伤'),
	          this.div({class: 'state'}, '饥饿')
	        )
	      ),
	      HistoryPanel({logs: this.props.historyLogs}),
	      TextPanel(),
	      this.div({class: 'items'},
	        this.div({class: 'row-1 row'},
	          this.div({class: 'item' + (this.state.selectedItemOffset === 0 ? ' selected': '')}, '[1] 主武器'),
	          this.div({class: 'item' + (this.state.selectedItemOffset === 1 ? ' selected': '')}, '[2] 远程武器')
	        ),
	        this.div({class: 'row-2 row'},
	          this.div({class: 'item' + (this.state.selectedItemOffset === 2 ? ' selected': '')}, '[3] 无'),
	          this.div({class: 'item' + (this.state.selectedItemOffset === 3 ? ' selected': '')}, '[4] 无')
	        ),
	        this.div({class: 'row-3 row'},
	          this.div({class: 'item' + (this.state.selectedItemOffset === 4 ? ' selected': '')}, '[5] 无'),
	          this.div({class: 'item' + (this.state.selectedItemOffset === 5 ? ' selected': '')}, '[6] 无')
	        ),
	        this.div({class: 'row-4 row'},
	          this.div({class: 'item' + (this.state.selectedItemOffset === 6 ? ' selected': '')}, '[7] 无'),
	          this.div({class: 'item' + (this.state.selectedItemOffset === 7 ? ' selected': '')}, '[8] 无')
	        )
	      )
	    ),*/
	    this.state.showPlayerInfoUI ? (0, _playerInfoUi2.default)() : null, this.state.showSkillInfoUI ? (0, _skillInfoUi2.default)({ parent: this }) : null, this.state.showHelpInfoUI ? (0, _helpInfoUi2.default)() : null);
	  }
	});

	exports.default = MapUI;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PlayerInfoUI = _Simple2.default.Component({
	  render: function render() {
	    return this.div({ class: 'player-info-ui' }, this.div({ class: 'basic-info' }, this.div({ class: 'title' }, '人物信息'), this.div({ class: 'info name' }, this.span({ class: 'label' }, '名字: '), this.span({ class: 'value' }, '王一祎')), this.div({ class: 'info race' }, this.span({ class: 'label' }, '种族: '), this.span({ class: 'value' }, '人类')), this.div({ class: 'info gender' }, this.span({ class: 'label' }, '性别: '), this.span({ class: 'value' }, '男')), this.div({ class: 'info class' }, this.span({ class: 'label' }, '职业: '), this.span({ class: 'value' }, '骑士'))), this.div({ class: 'attribute-info' }, this.div({ class: 'title' }, '属性信息'), this.div({ class: 'info strength' }, this.span({ class: 'label' }, '力量 STR: '), this.span({ class: 'value' }, '12')), this.div({ class: 'info agility' }, this.span({ class: 'label' }, '敏捷 AGI: '), this.span({ class: 'value' }, '12')), this.div({ class: 'info intelligence' }, this.span({ class: 'label' }, '智力 INT: '), this.span({ class: 'value' }, '12')), this.div({ class: 'info constitution' }, this.span({ class: 'label' }, '体力 CON: '), this.span({ class: 'value' }, '12')), this.div({ class: 'info perception' }, this.span({ class: 'label' }, '感知 PER: '), this.span({ class: 'value' }, '12')), this.div({ class: 'info charisma' }, this.span({ class: 'label' }, '魅力 CHR: '), this.span({ class: 'value' }, '12'))), this.div({ class: 'level-info' }, this.div({ class: 'title' }, '基本信息'), this.div({ class: 'info level' }, this.span({ class: 'label' }, 'Lvl: '), this.span({ class: 'value' }, '1')), this.div({ class: 'info experience' }, this.span({ class: 'label' }, 'EXP: '), this.span({ class: 'value' }, '12/64')), this.div({ class: 'info HP' }, this.span({ class: 'label' }, 'HP : '), this.span({ class: 'value' }, '12/60')), this.div({ class: 'info MP' }, this.span({ class: 'label' }, 'MP : '), this.span({ class: 'value' }, '12/48')), this.div({ class: 'info EP' }, this.span({ class: 'label' }, 'EP : '), this.span({ class: 'value' }, '96/100')), this.div({ class: 'info attack-damage' }, this.span({ class: 'label' }, '物理攻击力: '), this.span({ class: 'value' }, '45')), this.div({ class: 'info magic-attack-damage' }, this.span({ class: 'label' }, '魔法攻击力: '), this.span({ class: 'value' }, '13'))), this.div({ class: 'other-info' }, this.div({ class: 'title' }, '其他属性'), this.div({ class: 'info' }, this.span({ class: 'label' }, '威胁: '), this.span({ class: 'value' }, '12')), this.div({ class: 'info' }, this.span({ class: 'label' }, '速度: '), this.span({ class: 'value' }, '8')), this.div({ class: 'info' }, this.span({ class: 'label' }, '护甲: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '魔抗: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '暴击: '), this.span({ class: 'value' }, '60%')), this.div({ class: 'info' }, this.span({ class: 'label' }, '闪避: '), this.span({ class: 'value' }, '20%')), this.div({ class: 'info' }, this.span({ class: 'label' }, '命中率: '), this.span({ class: 'value' }, '20%')), this.div({ class: 'info' }, this.span({ class: 'label' }, '法伤: '), this.span({ class: 'value' }, '20%')), this.div({ class: 'info' }, this.span({ class: 'label' }, '回血: '), this.span({ class: 'value' }, '5 hp/回合')), this.div({ class: 'info' }, this.span({ class: 'label' }, '回魔: '), this.span({ class: 'value' }, '4 mp/回合'))), this.div({ class: 'resistance-info' }, this.div({ class: 'title' }, '抗性'), this.div({ class: 'info' }, this.span({ class: 'label' }, '中毒抗性: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '灼烧抗性: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '冻伤抗性: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '伤口抗性: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '麻痹抗性: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '眩晕抗性: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '愤怒抗性: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '混乱抗性: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '致盲抗性: '), this.span({ class: 'value' }, '12 D20'))), this.div({ class: 'common-skill-info' }, this.div({ class: 'title' }, '通用属性'), this.div({ class: 'info' }, this.span({ class: 'label' }, '开锁: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '探索: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '偷窃: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '交涉: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '挖掘: '), this.span({ class: 'value' }, '12 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '学习: '), this.span({ class: 'value' }, '6 D20')), this.div({ class: 'info' }, this.span({ class: 'label' }, '鉴定: '), this.span({ class: 'value' }, '6 D20'))));
	  }
	});

	exports.default = PlayerInfoUI;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SkillInfoUI = _Simple2.default.Component({
	  init: function init() {
	    this.state = {
	      row: 0,
	      col: 0
	    };

	    GameManager.Keyboard.setEvent(this.keyboardEvent.bind(this));
	  },
	  keyboardEvent: function keyboardEvent(e) {
	    e.preventDefault();
	    var code = e.which;

	    var row = this.state.row,
	        col = this.state.col;

	    if (code === 40) {
	      // down
	      row = row + 1;
	      if (row === 10) {
	        row = 0;
	      }

	      this.setState({ row: row });
	    } else if (code === 37) {
	      // left
	      col = col - 1;
	      if (col === -1) {
	        col = 3;
	      }

	      this.setState({ col: col });
	    } else if (code === 38) {
	      // up
	      row = row - 1;
	      if (row === -1) {
	        row = 9;
	      }

	      this.setState({ row: row });
	    } else if (code === 39) {
	      // right
	      col = col + 1;
	      if (col === 4) {
	        col = 0;
	      }

	      this.setState({ col: col });
	    }

	    if (code === 88 || code === 27) {
	      // x esc
	      this.props.parent.setState({ showSkillInfoUI: false });
	      this.props.parent.rebindKeyboardEvent();
	    }
	  },
	  isSelected: function isSelected(row, col) {
	    if (row === this.state.row && col === this.state.col) {
	      return ' selected';
	    } else {
	      return '';
	    }
	  },
	  render: function render() {
	    return this.div({ class: 'skill-info-ui' }, this.div({ class: 'titles' },
	    // elona
	    // Examine, Drop, Eat, Read, Drink, Zap, Use, Open, Mix, Throw
	    this.div({ class: 'title selected', html: '技能<span>[x]</span>' }), this.div({ class: 'title', html: '快捷技能<span>[s]</span>' }), this.div({ class: 'title', html: '检查<span>[X]</span>' }), // 显示装备，道具的信息。
	    this.div({ class: 'title', html: '吃<span>[e]</span>' }), this.div({ class: 'title', html: '阅读<span>[r]</span>' }), // 例如阅读书籍学习技能。例如阅读鉴定卷轴鉴定未知物品。
	    this.div({ class: 'title', html: '使用<span>[t]</span>' }), // 例如使用 奴隶锁 在昏厥的being身上
	    this.div({ class: 'title', html: '投掷<span>[T]</span>' }), // 例如投掷 手榴弹。
	    this.div({ class: 'title', html: '合成<span>[m]</span>' }) // 合成道具。
	    ), this.div({ class: 'skills-list' }, this.div({ class: 'column' }, this.div({ class: 'skill' + this.isSelected(0, 0) }, '盾击'), this.div({ class: 'skill' + this.isSelected(1, 0) }, '盾击'), this.div({ class: 'skill' + this.isSelected(2, 0) }, '盾击'), this.div({ class: 'skill' + this.isSelected(3, 0) }, '盾击'), this.div({ class: 'skill' + this.isSelected(4, 0) }, '盾击'), this.div({ class: 'skill' + this.isSelected(5, 0) }, '盾击'), this.div({ class: 'skill' + this.isSelected(6, 0) }, '盾击'), this.div({ class: 'skill' + this.isSelected(7, 0) }, '盾击'), this.div({ class: 'skill' + this.isSelected(8, 0) }, '盾击'), this.div({ class: 'skill' + this.isSelected(9, 0) }, '盾击')), this.div({ class: 'column' }, this.div({ class: 'skill' + this.isSelected(0, 1) }, '盾击'), this.div({ class: 'skill' + this.isSelected(1, 1) }, '盾击'), this.div({ class: 'skill' + this.isSelected(2, 1) }, '盾击'), this.div({ class: 'skill' + this.isSelected(3, 1) }, '盾击'), this.div({ class: 'skill' + this.isSelected(4, 1) }, '盾击'), this.div({ class: 'skill' + this.isSelected(5, 1) }, '盾击'), this.div({ class: 'skill' + this.isSelected(6, 1) }, '盾击'), this.div({ class: 'skill' + this.isSelected(7, 1) }, '盾击'), this.div({ class: 'skill' + this.isSelected(8, 1) }, '盾击'), this.div({ class: 'skill' + this.isSelected(9, 1) }, '盾击')), this.div({ class: 'column' }, this.div({ class: 'skill' + this.isSelected(0, 2) }, '盾击'), this.div({ class: 'skill' + this.isSelected(1, 2) }, '盾击'), this.div({ class: 'skill' + this.isSelected(2, 2) }, '盾击'), this.div({ class: 'skill' + this.isSelected(3, 2) }, '盾击'), this.div({ class: 'skill' + this.isSelected(4, 2) }, '盾击'), this.div({ class: 'skill' + this.isSelected(5, 2) }, '盾击'), this.div({ class: 'skill' + this.isSelected(6, 2) }, '盾击'), this.div({ class: 'skill' + this.isSelected(7, 2) }, '盾击'), this.div({ class: 'skill' + this.isSelected(8, 2) }, '盾击'), this.div({ class: 'skill' + this.isSelected(9, 2) }, '盾击')), this.div({ class: 'column' }, this.div({ class: 'skill' + this.isSelected(0, 3) }, '盾击'), this.div({ class: 'skill' + this.isSelected(1, 3) }, '盾击'), this.div({ class: 'skill' + this.isSelected(2, 3) }, '盾击'), this.div({ class: 'skill' + this.isSelected(3, 3) }, '盾击'), this.div({ class: 'skill' + this.isSelected(4, 3) }, '盾击'), this.div({ class: 'skill' + this.isSelected(5, 3) }, '盾击'), this.div({ class: 'skill' + this.isSelected(6, 3) }, '盾击'), this.div({ class: 'skill' + this.isSelected(7, 3) }, '盾击'), this.div({ class: 'skill' + this.isSelected(8, 3) }, '盾击'), this.div({ class: 'skill' + this.isSelected(9, 3) }, '盾击'))), this.div({ class: 'skill-description' }, '这个技能没有说明'));
	  }
	});

	exports.default = SkillInfoUI;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HelpInfoUI = _Simple2.default.Component({
	  render: function render() {
	    return this.div({ class: 'help-info-ui' }, this.div({ class: 'title' }, '快捷键'), this.div({ class: 'shortcut' }, '[w,s,a,d] 移动'), this.div({ class: 'shortcut' }, '[1]~[8] 选中道具 / 技能'), this.div({ class: 'shortcut' }, '[s] 道具 / 技能 切换'), // 8 items / quick skills
	    this.div({ class: 'shortcut' }, '[z] 使用选中的道具'), this.div({ class: 'shortcut' }, '[x] 技能菜单'), this.div({ class: 'shortcut' }, '[c] 角色菜单'), this.div({ class: 'shortcut' }, '[w] 装备菜单'), this.div({ class: 'shortcut' }, '[X] 检查道具'), this.div({ class: 'shortcut' }, '[e] 吃'), this.div({ class: 'shortcut' }, '[r] 阅读'), this.div({ class: 'shortcut' }, '[t] 使用道具'), this.div({ class: 'shortcut' }, '[T] 投掷'), this.div({ class: 'shortcut' }, '[m] 合成'), this.div({ class: 'shortcut' }, '[l] 搜索周围'), this.div({ class: 'shortcut' }, '[i] (与npc)交谈'), this.div({ class: 'shortcut' }, '[g] 捡东西'), this.div({ class: 'shortcut' }, '[o] 打开／关闭'), this.div({ class: 'shortcut' }, '[@] 运行上一个命令'), this.div({ class: 'shortcut' }, '[space] 原地休息'), this.div({ class: 'shortcut' }, '[/] 查看历史'), this.div({ class: 'shortcut' }, '[esc] 取消'));
	  }
	});

	exports.default = HelpInfoUI;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	var _emitter = __webpack_require__(3);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_emitter2.default.on('history-panel-connect', function (data, component) {
	  this.setState({ historyPanelComponent: component });
	});

	_emitter2.default.on('history-panel-add-logs', function (_ref) {
	  var _ref$logs = _ref.logs;
	  var logs = _ref$logs === undefined ? [] : _ref$logs;

	  var historyPanelComponent = this.state.historyPanelComponent;
	  if (!historyPanelComponent) return;
	  var oldLogs = historyPanelComponent.props.logs;
	  var newLogs = oldLogs.concat(logs);
	  historyPanelComponent.setProps({ logs: newLogs });
	  this.state.mapUIComponent.props.historyLogs = newLogs;
	});

	var HistoryPanel = _Simple2.default.Component({
	  emitter: _emitter2.default,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      logs: []
	    };
	  },
	  init: function init() {
	    this.emit('history-panel-connect');
	    this.state = { showAll: false };
	  },
	  toggleAllHistory: function toggleAllHistory() {
	    var showAll = this.state.showAll;
	    this.setState({ showAll: !showAll });
	  },

	  /**
	   * Replace duplicate logs with 'x [num]'
	   * @param  {[String]} logs [an array of string]
	   * @return {[String]}      [an array of string]
	   */
	  getLogs: function getLogs(logs) {
	    var output = [];
	    var num = 4;
	    var i = logs.length - 1;
	    var occurence = 1;
	    while (i >= 0 && num !== 0) {
	      var log = logs[i];

	      occurence = 1;
	      var j = i - 1;
	      while (j >= 0 && logs[j] === log) {
	        occurence += 1;
	        j -= 1;
	      }
	      if (occurence > 1) {
	        output.push(log + (' x' + occurence));
	        i = j + 1;
	      } else {
	        output.push(log);
	      }

	      i -= 1;
	      num -= 1;
	    }

	    return output.reverse();
	  },
	  render: function render() {
	    var _this = this;

	    var logsDiv = [],
	        logs = this.props.logs;

	    if (this.state.showAll) {
	      logsDiv = logs.map(function (log) {
	        return _this.div({ class: 'log' }, log);
	      });
	      return this.div({ class: 'history-panel show-all', click: this.toggleAllHistory.bind(this) }, this.div({ class: 'logs' }, logsDiv));
	    } else {
	      logs = this.getLogs(logs);
	      for (var i = 0; i < logs.length; i++) {
	        logsDiv.push(this.div({ class: { 'log': true, 'last': i === logs.length - 1 } }, logs[i]));
	      }
	      return this.div({ class: 'history-panel', click: this.toggleAllHistory.bind(this) }, this.div({ class: 'logs' }, logsDiv));
	    }
	  }
	});

	exports.default = HistoryPanel;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	var _emitter = __webpack_require__(3);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_emitter2.default.on('text-panel-connect', function (data, component) {
	  this.setState({ textPanelComponent: component });
	});

	_emitter2.default.on('text-panel-show', function (_ref) {
	  var _ref$texts = _ref.texts;
	  var texts = _ref$texts === undefined ? [] : _ref$texts;
	  var _ref$options = _ref.options;
	  var options = _ref$options === undefined ? [] : _ref$options;

	  this.state.textPanelComponent.setProps({
	    texts: texts,
	    display: 'block',
	    offset: 0,
	    options: options,
	    optionOffset: 0
	  });
	  this.state.textPanelComponent.bindKeyboardEvent();
	});

	var TextPanel = _Simple2.default.Component({
	  emitter: _emitter2.default,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      texts: ['这是对话框'],
	      display: 'none',
	      offset: 0,
	      options: [],
	      optionOffset: 0
	    };
	  },
	  init: function init() {
	    this.emit('text-panel-connect');
	  },
	  bindKeyboardEvent: function bindKeyboardEvent() {
	    GameManager.Keyboard.setEvent(this.keyboardEvent.bind(this));
	  },
	  keyboardEvent: function keyboardEvent(e) {
	    var code = e.which;
	    // console.log(code)
	    var options = this.props.options;

	    if (options.length) {
	      var optionOffset = this.props.optionOffset;

	      for (var i = 0; i < options.length; i++) {
	        if (code === 65 + i) {
	          this.emit('text-panel-done', i);
	          this.setProps({ display: 'none' });
	        }
	      }

	      if (code === GameManager.Keyboard.keyCode.DOWN) {
	        optionOffset = (optionOffset + 1) % options.length;
	        this.setProps({ optionOffset: optionOffset });
	      } else if (code === GameManager.Keyboard.keyCode.UP) {
	        optionOffset = optionOffset - 1;
	        if (optionOffset < 0) {
	          optionOffset = options.length - 1;
	        }
	        this.setProps({ optionOffset: optionOffset });
	      } else if (code === GameManager.Keyboard.keyCode.ENTER) {
	        this.emit('text-panel-done', this.props.optionOffset);
	        this.setProps({ display: 'none' });
	      }

	      /**
	      if (code === GameManager.Keyboard.keyCode.ESC) {
	        this.emit('text-panel-done', -1) // -1 means esc
	      }
	      */
	    } else if (code === GameManager.Keyboard.keyCode.ENTER) {
	      // z enter
	      this.nextText();
	    }
	  },
	  nextText: function nextText() {
	    var offset = this.props.offset;
	    offset += 1;
	    if (offset >= this.props.texts.length) {
	      this.emit('text-panel-done');
	      this.setProps({ display: 'none' });
	    } else {
	      this.setProps({ offset: offset });
	    }
	  },
	  handleClick: function handleClick() {
	    if (this.props.display === 'none') return false; // not block
	    if (!this.props.options.length) {
	      this.nextText();
	      return true;
	    }

	    return true;
	  },
	  chooseOption: function chooseOption(optionOffset) {
	    this.emit('text-panel-done', optionOffset);
	    this.setProps({ display: 'none' });
	  },
	  mouseEnter: function mouseEnter(optionOffset) {
	    this.setProps({ optionOffset: optionOffset });
	  },
	  render: function render() {
	    var texts = this.props.texts,
	        offset = this.props.offset,
	        text = texts[offset],
	        options = this.props.options;

	    // format text
	    texts = text.split('\n');
	    if (texts[0].trim().length === 0) texts.splice(0, 1);
	    var textHTML = texts.join('<br>');

	    if (options.length) {
	      var optionsDiv = [];
	      for (var i = 0; i < options.length; i++) {
	        optionsDiv.push(this.div({ class: 'option' + (i === this.props.optionOffset ? ' selected' : ''), click: this.chooseOption.bind(this, i), mouseenter: this.mouseEnter.bind(this, i) }, this.span({ class: 'key' }, '[' + String.fromCharCode(65 + i).toLowerCase() + '] '), this.span({ class: 'content' }, options[i])));
	      }
	      return this.div({ class: 'text-panel', style: { display: this.props.display } }, this.div({ class: 'content-opt', html: textHTML }), this.div({ class: 'options' }, optionsDiv));
	    } else {
	      return this.div({ class: 'text-panel', style: { display: this.props.display }, click: this.nextText.bind(this) }, this.div({ class: 'content', html: textHTML }), this.div({ class: 'key-hint' }, '[enter] 继续'));
	    }
	  }
	});

	exports.default = TextPanel;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	var _text = __webpack_require__(23);

	var _emitter = __webpack_require__(3);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_emitter2.default.on('description-panel-connect', function (data, component) {
	  this.setState({ descriptionPanelComponent: component });
	});

	_emitter2.default.on('description-panel-set-hint', function (data) {
	  // console.log('set hint', data)
	  this.state.descriptionPanelComponent.setProps({ hint: data });
	});

	var DescriptionPanel = _Simple2.default.Component({
	  emitter: _emitter2.default,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      hint: null //
	    };
	  },
	  init: function init() {
	    this.emit('description-panel-connect');
	  },
	  render: function render() {
	    if (!this.props.hint) return this.div(); // return null
	    var subject = (0, _text.text)({ cn: '你看见了 ', en: 'You see' });
	    return this.div({ class: 'description-panel' }, subject + this.props.hint);
	  }
	});

	exports.default = DescriptionPanel;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * settings
	 */
	var settings = {
	  language: 'CN'
	};

	/*
	 * text
	 */
	var text = function text(t) {
	  if (typeof t === 'string') return t;
	  return t[settings.language.toLowerCase()];
	};

	exports.text = text;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	var _bar = __webpack_require__(25);

	var _bar2 = _interopRequireDefault(_bar);

	var _emitter = __webpack_require__(3);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_emitter2.default.on('left-panel-connect', function (data, component) {
	  this.setState({ leftPanelComponent: component });
	});

	_emitter2.default.on('left-panel-set-selected-gameObject', function (gameObject) {
	  this.state.leftPanelComponent.setProps({ selectedGameObject: gameObject });
	});

	_emitter2.default.on('left-panel-force-update', function (gameObject) {
	  this.state.leftPanelComponent.forceUpdate();
	});

	_emitter2.default.on('left-panel-show-npcs-info', function () {
	  var player = GameManager.player;
	  var npcs = GameManager.Map.npcsInView;

	  var data = [];
	  for (var coordKey in npcs) {
	    var coord = coordKey.split(','),
	        x = parseInt(coord[0]),
	        y = parseInt(coord[1]),
	        _npc = npcs[coordKey];

	    var dist = _npc.dist(player);
	    data.push([_npc, dist]);
	  }
	  npcs = data.sort(function (a, b) {
	    return a[1] > b[1];
	  }).map(function (d) {
	    return d[0];
	  });
	  if (this.state.leftPanelComponent) {
	    this.state.leftPanelComponent.setProps({ npcs: npcs });
	  }
	});

	var States = _Simple2.default.Component({
	  getDefaultProps: function getDefaultProps() {
	    return { states: {} }; // check npc.js this.states
	  },
	  render: function render() {
	    var _this = this;

	    var states = this.props.states;
	    var arr = [];
	    for (var stateID in states) {
	      var state = states[stateID].state,
	          restDuration = states[stateID].restDuration;
	      arr.push([state, restDuration]);
	    }
	    arr = arr.sort(function (a, b) {
	      return a[1] < b[1];
	    }); // sorted by restDuration.
	    var statesDiv = arr.map(function (o) {
	      var state = o[0];
	      return _this.div({ class: 'state ' + state.type }, state.name);
	    });
	    return this.div({ class: 'states' }, statesDiv);
	  }
	});

	var NPCInfo = _Simple2.default.Component({
	  emitter: _emitter2.default,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      npc: null, // NPC,
	      hover: false
	    };
	  },
	  mouseEnter: function mouseEnter() {
	    var npc = this.props.npc,
	        x = npc.x,
	        y = npc.y;
	    this.emit('mouse-panel-highlight-npc', npc);
	  },
	  mouseLeave: function mouseLeave() {
	    this.emit('mouse-panel-remove-npc-highlight', npc);
	  },
	  render: function render() {
	    var npc = this.props.npc;
	    var hp = npc.getStat('hp'),
	        currentHP = npc.getStat('currentHP');

	    return this.div({ class: 'player-info' + (this.props.hover ? ' hover' : ''),
	      mouseenter: this.mouseEnter.bind(this),
	      mouseleave: this.mouseLeave.bind(this) }, this.div({ class: 'name' }, npc.name),

	    // HP
	    (0, _bar2.default)({ value: currentHP,
	      maxValue: hp,
	      info: 'HP: ' + Math.ceil(currentHP) + '/' + hp,
	      backgroundColor: '#d23b30' }),

	    // States
	    States({ states: npc.states }));
	  }
	});

	var PlayerInfo = _Simple2.default.Component({
	  emitter: _emitter2.default,
	  mouseEnter: function mouseEnter() {
	    this.emit('mouse-panel-highlight-npc', GameManager.player);
	  },
	  mouseLeave: function mouseLeave() {
	    this.emit('mouse-panel-remove-npc-highlight', GameManager.player);
	  },
	  click: function click() {
	    this.emit('info-panel-show');
	  },
	  render: function render() {
	    var player = GameManager.player;

	    var hp = player.getStat('hp'),
	        currentHP = player.getStat('currentHP'),
	        mp = player.getStat('mp'),
	        currentMP = player.getStat('currentMP'),
	        ep = player.getStat('ep'),
	        currentEP = player.getStat('currentEP');

	    return this.div({ class: 'player-info',
	      mouseenter: this.mouseEnter.bind(this),
	      mouseleave: this.mouseLeave.bind(this),
	      click: this.click.bind(this) }, this.div({ class: 'name' }, '@: 王一祎'),

	    // HP, MP, EP
	    (0, _bar2.default)({ value: currentHP,
	      maxValue: hp,
	      info: 'HP: ' + Math.ceil(currentHP) + '/' + hp,
	      backgroundColor: '#d23b30' }), (0, _bar2.default)({ value: currentMP,
	      maxValue: mp,
	      info: 'MP: ' + Math.ceil(currentMP) + '/' + mp,
	      backgroundColor: '#3474a8' }), (0, _bar2.default)({ value: currentEP,
	      maxValue: ep,
	      info: 'EP: ' + Math.ceil(currentEP) + '/' + ep,
	      backgroundColor: '#6c933f' }),

	    // States
	    States({ states: player.states })
	    // GOLD, SKILL-POINT
	    //this.div({class: 'gold'}, `金币: ${gold}`),
	    //this.div({class: 'skill-point'}, `白金币: ${sp}`)
	    );
	  }
	});

	var LeftPanel = _Simple2.default.Component({
	  emitter: _emitter2.default,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      selectedGameObject: null,
	      npcs: []
	    };
	  },
	  init: function init() {
	    this.emit('left-panel-connect');
	  },

	  render: function render() {
	    var _this2 = this;

	    return this.div({ class: 'left-panel' }, PlayerInfo(), this.props.npcs.map(function (npc) {
	      return NPCInfo({ npc: npc, hover: _this2.props.selectedGameObject === npc });
	    })
	    // (this.props.selectedGameObject ? NPCInfo({npc: this.props.selectedGameObject, hover: true}) : null)
	    );
	  }
	});

	exports.default = LeftPanel;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
	function shadeColor(color, percent) {

	  var R = parseInt(color.substring(1, 3), 16);
	  var G = parseInt(color.substring(3, 5), 16);
	  var B = parseInt(color.substring(5, 7), 16);

	  R = parseInt(R * (100 + percent) / 100);
	  G = parseInt(G * (100 + percent) / 100);
	  B = parseInt(B * (100 + percent) / 100);

	  R = R < 255 ? R : 255;
	  G = G < 255 ? G : 255;
	  B = B < 255 ? B : 255;

	  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
	  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
	  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

	  return "#" + RR + GG + BB;
	}

	var Bar = _Simple2.default.Component({
	  getDefaultProps: function getDefaultProps() {
	    return {
	      value: 10,
	      maxValue: 16,
	      darkenPercent: 50,
	      info: 'HP: 10/16',
	      backgroundColor: '#d23b30'
	    };
	  },
	  render: function render() {
	    return this.div({ class: 'bar', style: { backgroundColor: shadeColor(this.props.backgroundColor, -this.props.darkenPercent) } }, this.div({ class: 'data', style: { width: this.props.value / this.props.maxValue * 100 + "%", backgroundColor: this.props.backgroundColor } }), this.div({ class: 'info' }, this.props.info));
	  }
	});

	exports.default = Bar;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	var _emitter = __webpack_require__(3);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _npc = __webpack_require__(8);

	var _npc2 = _interopRequireDefault(_npc);

	var _actionPanel = __webpack_require__(27);

	var _actionPanel2 = _interopRequireDefault(_actionPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_emitter2.default.on('mouse-panel-connect', function (data, component) {
	  this.setState({ mousePanelComponent: component });
	});

	_emitter2.default.on('mouse-panel-rerender', function () {
	  var mousePanelComponent = this.state.mousePanelComponent;
	  mousePanelComponent.mouseEnter(mousePanelComponent.state.mouseX, mousePanelComponent.state.mouseY);
	});

	// a: player
	_emitter2.default.on('mouse-panel-right-click', function (_ref) {
	  var a = _ref.a;
	  var tile = _ref.tile;
	  var event = _ref.event;
	  var targetX = _ref.targetX;
	  var targetY = _ref.targetY;

	  var b = tile.gameObject;
	  // Actions && Item
	  var actions = GameManager.Database.Actions;
	  var skills = a.skills;
	  var itemStack = a.getItemStackOnHand(a.selectedItemStackOffset);
	  var actionsAvailable = []; // actions to gameObject
	  var itemActionsAvailable = []; // actions to item
	  var skillsAvailable = []; // skills

	  for (var actID in actions) {
	    var action = actions[actID];
	    if (b && action.canAct({ a: a, b: b, targetX: targetX, targetY: targetY })) {
	      // for action, b has to be a gameObject
	      actionsAvailable.push(action);
	    }
	    if (itemStack && action.canAct({ a: a, b: itemStack.item, targetX: targetX, targetY: targetY })) {
	      itemActionsAvailable.push(action);
	    }
	  }

	  for (var skillID in skills) {
	    var skill = skills[skillID].skill;
	    var ScopeTypes = GameManager.Database.Types.ScopeTypes;
	    if (skill.scope === ScopeTypes.OneEnemy && b && b.isOfType('npc') && b.hasState('hostile') && skill.condition({ a: a, b: b })) {
	      skillsAvailable.push(skill);
	    }
	  }

	  if (actionsAvailable.length || itemActionsAvailable.length || skillsAvailable.length) {
	    _emitter2.default.emit('action-panel-show-actions', { actions: actionsAvailable,
	      itemActions: itemActionsAvailable,
	      skills: skillsAvailable,
	      itemStack: itemStack,
	      event: event, a: a, b: b, targetX: targetX, targetY: targetY });
	  }
	});

	_emitter2.default.on('mouse-panel-highlight-npc', function (npc) {
	  this.state.mousePanelComponent.setProps({ npc: npc });
	});

	_emitter2.default.on('mouse-panel-remove-npc-highlight', function () {
	  this.state.mousePanelComponent.setProps({ npc: null });
	});

	var MousePanel = _Simple2.default.Component({
	  emitter: _emitter2.default,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      npc: null
	    };
	  },
	  init: function init() {
	    this.emit('mouse-panel-connect');
	    this.state = {
	      mouseX: 0,
	      mouseY: 0
	    };
	  },
	  mount: function mount() {
	    window.addEventListener('resize', this.windowResize.bind(this));
	  },
	  windowResize: function windowResize() {
	    this.forceUpdate(); // make div size matches canvas size
	  },
	  mouseEnter: function mouseEnter(x, y) {
	    var player = GameManager.player,
	        targetX = x - player.relativeX,
	        targetY = y - player.relativeY;

	    this.state.mouseX = x;
	    this.state.mouseY = y;

	    var tiles = GameManager.Map.renderedTiles[targetX + ',' + targetY];
	    if (!tiles) {
	      return this.emit('description-panel-set-hint', null);
	    }
	    var tile = tiles[tiles.length - 1]; // GameManager.Map.getTopRenderedObject(targetX, targetY)
	    if (tile && tile.description) {
	      if (tile.type === 'player' && tiles[tiles.length - 2] && tiles[tiles.length - 2].description) {
	        this.emit('description-panel-set-hint', tile.description + '，正站在 ' + tiles[tiles.length - 2].description);
	      } else {
	        var description = tile.description;
	        if (tile.gameObject && tile.gameObject.name) {
	          description = tile.gameObject.name;
	        }
	        this.emit('description-panel-set-hint', description);
	      }
	    } else {
	      this.emit('description-panel-set-hint', null);
	    }

	    if (tile && tile.gameObject && tile.gameObject instanceof _npc2.default) {
	      this.emit('left-panel-set-selected-gameObject', tile.gameObject);
	    } else {
	      this.emit('left-panel-set-selected-gameObject', null);
	    }
	  },
	  mouseClick: function mouseClick(x, y) {
	    var player = GameManager.player,
	        targetX = x - player.relativeX,
	        targetY = y - player.relativeY;
	    GameManager.player.handleClick(targetX, targetY);
	  },
	  mouseRightClick: function mouseRightClick(x, y) {
	    var event = window.event;
	    event.preventDefault();

	    var player = GameManager.player,
	        targetX = x - player.relativeX,
	        targetY = y - player.relativeY;

	    var tiles = GameManager.Map.renderedTiles[targetX + ',' + targetY];
	    if (!tiles || !tiles.length) return;
	    var tile = tiles[tiles.length - 1];

	    this.emit('mouse-panel-right-click', { a: player,
	      tile: tile,
	      // b: tile.gameObject,
	      event: event,
	      targetX: targetX,
	      targetY: targetY });
	  },
	  render: function render() {
	    var canvas = GameManager.canvas,
	        width = canvas.offsetWidth,
	        height = canvas.offsetHeight,
	        displayWidth = GameManager.DISPLAY_WIDTH,
	        displayHeight = GameManager.DISPLAY_HEIGHT,
	        tileWidth = width / displayWidth,
	        tileHeight = height / displayHeight,
	        player = GameManager.player;

	    var npc = this.props.npc,
	        npcScreenX = null,
	        npcScreenY = null;
	    if (npc) {
	      npcScreenX = npc.x + player.relativeX;
	      npcScreenY = npc.y + player.relativeY;
	    }

	    var tiles = [];
	    for (var j = 0; j < displayHeight; j++) {
	      var r = [];
	      for (var i = 0; i < displayWidth; i++) {
	        var highlight = npcScreenX === i && npcScreenY === j;
	        r.push(this.div({
	          class: 'tile' + (highlight ? ' highlight' : ''),
	          style: { width: tileWidth, height: tileHeight },
	          mouseenter: this.mouseEnter.bind(this, i, j),
	          click: this.mouseClick.bind(this, i, j),
	          contextmenu: this.mouseRightClick.bind(this, i, j)
	        }));
	      }
	      var row = this.div({ class: 'row' }, r);
	      tiles.push(row);
	    }

	    return this.div({ class: 'mouse-panel', style: { width: width } }, tiles, (0, _actionPanel2.default)());
	  }
	});

	exports.default = MousePanel;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	var _emitter = __webpack_require__(3);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _utility = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_emitter2.default.on('action-panel-connect', function (data, component) {
	  this.setState({ actionPanelComponent: component });
	});

	_emitter2.default.on('action-panel-show-actions', function (_ref) {
	  var actions = _ref.actions;
	  var itemActions = _ref.itemActions;
	  var skills = _ref.skills;
	  var itemStack = _ref.itemStack;
	  var event = _ref.event;
	  var a = _ref.a;
	  var b = _ref.b;
	  var targetX = _ref.targetX;
	  var targetY = _ref.targetY;

	  this.state.actionPanelComponent.setProps({ actions: actions, itemActions: itemActions, skills: skills, itemStack: itemStack, a: a, b: b, targetX: targetX, targetY: targetY, event: event, display: 'block' });
	});

	var ActionPanel = _Simple2.default.Component({
	  emitter: _emitter2.default,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      actions: [],
	      itemActions: [],
	      skills: [],
	      a: null,
	      b: null,
	      itemStack: null,
	      targetX: null,
	      targetY: null,
	      display: 'none',
	      event: null
	    };
	  },
	  init: function init() {
	    this.emit('action-panel-connect');
	  },
	  mount: function mount() {
	    // console.log('mount action-panel')
	    window.addEventListener('keydown', this.keydown.bind(this));
	  },
	  unmount: function unmount() {
	    // console.log('unmount action-panel')
	    window.removeEventListener('keydown', this.keydown.bind(this));
	  },
	  keydown: function keydown() {
	    if (this.props.display !== 'none') {
	      this.setProps({ display: 'none' });
	    }
	  },
	  close: function close() {
	    this.setProps({ display: 'none' });
	  },
	  performAction: function performAction(action) {
	    var a = this.props.a,
	        b = this.props.b,
	        targetX = this.props.targetX,
	        targetY = this.props.targetY;

	    if (action.act) {
	      if (action.act({ a: a, b: b, targetX: targetX, targetY: targetY })) {
	        GameManager.engine.unlock();
	      }
	      this.setProps({ display: 'none' });
	    }
	  },
	  performItemAction: function performItemAction(action) {
	    var a = this.props.a,
	        itemStack = this.props.itemStack,
	        targetX = this.props.targetX,
	        targetY = this.props.targetY,
	        item = itemStack.item;

	    if (action.act) {
	      if (action.act({ a: a, b: item, targetX: targetX, targetY: targetY })) {
	        GameManager.engine.unlock();
	      }
	      if (item.consumable) {
	        a.removeItem(itemStack, 1); // TODO: 枪 消耗 子弹。
	        a.cleanItemStacksOnHand();
	        this.emit('left-panel-force-update');
	      }
	    }
	    this.setProps({ display: 'none' });
	  },
	  performSkill: function performSkill(skill) {
	    var _props = this.props;
	    var a = _props.a;
	    var b = _props.b;
	    var targetX = _props.targetX;
	    var targetY = _props.targetY;

	    var ScopeTypes = GameManager.Database.Types.ScopeTypes;

	    if (skill.act({ a: a, b: b, targetX: targetX, targetY: targetY })) {
	      GameManager.engine.unlock();
	    }

	    this.emit('left-panel-force-update');
	    this.setProps({ display: 'none' });
	  },
	  render: function render() {
	    var _this = this;

	    if (this.props.display === 'none') return this.div();else {
	      var target = this.props.event.target,
	          itemStack = this.props.itemStack,
	          b = this.props.b;

	      var actionsDiv = null;
	      if (this.props.actions.length) {
	        actionsDiv = this.div({ class: 'action-div' }, this.div({ class: 'title' }, b.name || '对象'), this.props.actions.map(function (action) {
	          return _this.div({ class: 'action', click: _this.performAction.bind(_this, action) }, action.name);
	        }));
	      }

	      var itemActionsDiv = null;
	      if (this.props.itemActions.length) {
	        itemActionsDiv = this.div({ class: 'item-action-div' }, this.div({ class: 'title' }, itemStack.item.name), this.props.itemActions.map(function (action) {
	          return _this.div({ class: 'action', click: _this.performItemAction.bind(_this, action) }, action.name);
	        }));
	      }

	      var skillsDiv = null;
	      if (this.props.skills.length) {
	        skillsDiv = this.div({ class: 'skills-div' }, this.div({ class: 'title' }, (0, _utility.text)({ cn: '使用技能' })), this.props.skills.map(function (skill) {
	          return _this.div({ class: 'action', click: _this.performSkill.bind(_this, skill) }, skill.name);
	        }));
	      }

	      return this.div({ class: 'action-panel', style: { display: this.props.display, left: target.offsetLeft + target.offsetWidth, top: target.offsetTop } }, this.div({ class: 'close-btn', click: this.close.bind(this) }, 'X'), actionsDiv, skillsDiv, itemActionsDiv);
	    }
	  }
	});

	exports.default = ActionPanel;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	var _emitter = __webpack_require__(3);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_emitter2.default.on('bottom-panel-connect', function (data, component) {
	  this.setState({ bottomPanelComponent: component });
	});

	_emitter2.default.on('bottom-panel-force-update', function () {
	  this.state.bottomPanelComponent.forceUpdate();
	});

	var BottomPanel = _Simple2.default.Component({
	  emitter: _emitter2.default,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      selectedItemOffset: 0
	    };
	  },
	  init: function init() {
	    this.emit('bottom-panel-connect');
	    this.onKeydown = this.onKeydown.bind(this);
	  },
	  mount: function mount() {
	    window.addEventListener('keydown', this.onKeydown);
	  },
	  unmount: function unmount() {
	    window.removeEventListener('keydown', this.onKeydown);
	  },
	  onKeydown: function onKeydown(e) {
	    var code = e.which,
	        player = GameManager.player;
	    if (code >= GameManager.Keyboard.keyCode.NUM_1 && code < GameManager.Keyboard.keyCode.NUM_1 + player.slotCount) {
	      var offset = code - GameManager.Keyboard.keyCode.NUM_1;
	      this.setProps({ selectedItemOffset: offset });

	      player.selectedItemStackOffset = offset;
	    }
	  },
	  selectItem: function selectItem(offset) {
	    this.setProps({ selectedItemOffset: offset });
	  },
	  toName: function toName(itemStack, offset) {
	    if (!itemStack) {
	      return '[' + offset + '] 空';
	    } else {
	      var num = itemStack.num,
	          item = itemStack.item;
	      var outputStr = '';
	      outputStr += item.name;

	      if (num !== 1) {
	        outputStr += ' x ' + num;
	      }
	      return outputStr;
	    }
	  },
	  render: function render() {
	    var selectedItemOffset = this.props.selectedItemOffset;

	    var player = GameManager.player,
	        slotCount = player.slotCount;

	    var itemStacks = [];
	    for (var i = 0; i < slotCount; i++) {
	      itemStacks.push(player.getItemStackOnHand(i));
	    }

	    var slotDivs = [];
	    for (var _i = 0; _i < slotCount; _i++) {
	      // TODO merge slots like rifle, which takes 2 slots
	      slotDivs.push(this.div({ class: { 'button': true, 'selected': selectedItemOffset === _i }, click: this.selectItem.bind(this, _i) }, this.toName(itemStacks[_i], _i + 1)));
	    }

	    return this.div({ class: 'bottom-panel' }, slotDivs);
	  }
	});

	exports.default = BottomPanel;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Simple = __webpack_require__(4);

	var _Simple2 = _interopRequireDefault(_Simple);

	var _emitter = __webpack_require__(3);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Show
	 * 	Player Info
	 * 	Skills
	 * 	Items
	 * 	Equipments
	 * 	Study:    study skills
	 *
	 */


	var InventoryPanel = _Simple2.default.Component({
	  getDefaultProps: function getDefaultProps() {
	    return {
	      inventory: null // Inventory class
	    };
	  },
	  init: function init() {
	    this.state = {
	      selectedItemStackOffset: 0
	    };
	    this.keydown = this.keydown.bind(this);
	    this.selectedItemStack = null;
	  },
	  mount: function mount() {
	    window.addEventListener('keydown', this.keydown);
	  },
	  unmount: function unmount() {
	    window.removeEventListener('keydown', this.keydown);
	  },
	  selectItem: function selectItem(offset, itemStack) {
	    this.setState({ selectedItemStackOffset: offset });
	  },
	  keydown: function keydown(e) {
	    var code = e.which;
	    if (code >= GameManager.Keyboard.keyCode.NUM_1 && code <= GameManager.Keyboard.keyCode.NUM_6) {
	      var offset = code - GameManager.Keyboard.keyCode.NUM_1;
	      GameManager.player.setItemStackOnHand(this.selectedItemStack, offset);
	      this.forceUpdate();
	    }
	  },
	  render: function render() {
	    if (!this.props.inventory) {
	      throw 'Error InventoryPanel: no inventory provided.';
	    }
	    var itemStacks = this.props.inventory.itemStacks;
	    var selectedItemStackOffset = this.state.selectedItemStackOffset;
	    var player = GameManager.player;

	    var itemsDiv = [];
	    var offset = 0;
	    var selectedItem = null;
	    for (var itemKey in itemStacks) {
	      var itemStack = itemStacks[itemKey];
	      var item = itemStack.item;
	      var num = itemStack.num;

	      var onHandOffset = null;
	      if (itemStack.id in player.itemStacksOnHand) {
	        onHandOffset = this.div({ class: 'offset' }, '[' + (player.itemStacksOnHand[itemStack.id].offset + 1) + ']');
	      }

	      itemsDiv.push(this.div({ class: { 'item': true, 'selected': selectedItemStackOffset === offset },
	        click: this.selectItem.bind(this, offset, itemStack) }, this.div({ class: 'name' }, num + ' ' + item.name), onHandOffset, this.div({ class: 'weight' }, item.weight * num + ' kg')));

	      if (selectedItemStackOffset === offset) {
	        selectedItem = item;
	        this.selectedItemStack = itemStack;
	      }

	      offset += 1;
	    }

	    return this.div({ class: 'inventory-panel' }, this.div({ class: 'left' }, this.div({ class: 'inventory-titles' }, this.div({ class: 'title-left' }, '名称'), this.div({ class: 'title-right' }, '重量')), this.div({ class: 'items-list' },
	    // item
	    itemsDiv)), this.div({ class: 'right' },
	    // description
	    this.div({ class: 'description' }, this.div({ class: 'title' }, '说明'), selectedItem.description),
	    // keyboard
	    this.div({ class: 'keyboard-hint' }, '键盘数字 [1]~[6] 将道具拿在手中。')));
	  }
	});

	_emitter2.default.on('info-panel-connect', function (data, component) {
	  this.setState({ infoPanelComponent: component });
	});

	_emitter2.default.on('info-panel-show', function (data, component) {
	  this.state.infoPanelComponent.setProps({ display: 'block' });
	});

	_emitter2.default.on('info-panel-hide', function (data, component) {
	  this.state.infoPanelComponent.setProps({ display: 'none' });
	});

	var InfoPanel = _Simple2.default.Component({
	  emitter: _emitter2.default,
	  init: function init() {
	    this.state = {
	      selectedPanelOffset: 0
	    };
	    this.emit('info-panel-connect');
	    this.keydown = this.keydown.bind(this);
	  },
	  getDefaultProps: function getDefaultProps() {
	    return { display: 'none' };
	  },
	  mount: function mount() {
	    window.addEventListener('keydown', this.keydown);
	  },
	  unmount: function unmount() {
	    window.removeEventListener('keydown', this.keydown);
	  },
	  keydown: function keydown(evt) {
	    var code = evt.which;
	    if (code === GameManager.Keyboard.keyCode.ESC) {
	      this.setProps({ display: 'none' });
	    } else if (code === GameManager.Keyboard.keyCode.e) {
	      if (this.props.display === 'none') {
	        this.setProps({ display: 'block' });
	      } else {
	        this.setProps({ display: 'none' });
	      }
	    }
	  },
	  setSelectedPanel: function setSelectedPanel(offset) {
	    this.setState({ selectedPanelOffset: offset });
	  },
	  render: function render() {
	    if (this.props.display === 'none') return this.div();

	    var selectedPanelOffset = this.state.selectedPanelOffset;
	    var panel = null;

	    if (selectedPanelOffset === 2) {
	      // 道具
	      panel = InventoryPanel({ inventory: GameManager.player.inventory });
	    }
	    return this.div({ class: 'info-panel' }, this.div({ class: 'titles' }, this.div({ class: { 'title': true, 'selected': selectedPanelOffset === 0 },
	      click: this.setSelectedPanel.bind(this, 0) }, '人物'), this.div({ class: { 'title': true, 'selected': selectedPanelOffset === 1 },
	      click: this.setSelectedPanel.bind(this, 1) }, '技能'), this.div({ class: { 'title': true, 'selected': selectedPanelOffset === 2 },
	      click: this.setSelectedPanel.bind(this, 2) }, '道具'), this.div({ class: { 'title': true, 'selected': selectedPanelOffset === 3 },
	      click: this.setSelectedPanel.bind(this, 3) }, '装备'), this.div({ class: { 'title': true, 'selected': selectedPanelOffset === 4 },
	      click: this.setSelectedPanel.bind(this, 4) }, '学习'), this.div({ class: { 'title': true, 'selected': selectedPanelOffset === 5 },
	      click: this.setSelectedPanel.bind(this, 5) }, '菜单')), this.div({ class: 'panel' }, panel));
	  }
	});

	exports.default = InfoPanel;

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Keyboard
	 */
	var Keyboard = {
	  event: null,

	  keyboardEvent: function keyboardEvent(e) {
	    // console.log(e)
	    if (this.event) {
	      this.event(e);
	    }
	  },
	  setEvent: function setEvent(event) {
	    this.event = event;
	  },
	  keyCode: {
	    a: 65,
	    b: 66,
	    c: 67,
	    d: 68,
	    e: 69,
	    f: 70,
	    g: 71,
	    h: 72,
	    i: 73,
	    j: 74,
	    k: 75,
	    l: 76,
	    m: 77,
	    n: 78,
	    o: 79,
	    p: 80,
	    q: 81,
	    r: 82,
	    s: 83,
	    t: 84,
	    u: 85,
	    v: 86,
	    w: 87,
	    x: 88,
	    y: 89,
	    z: 90,
	    UP: 38,
	    DOWN: 40,
	    LEFT: 37,
	    RIGHT: 39,
	    ESC: 27,
	    ENTER: 13,
	    QUESTION_MARK: 191,
	    SLASH: 191,
	    NUM_1: 49,
	    NUM_2: 50,
	    NUM_3: 51,
	    NUM_4: 52,
	    NUM_5: 53,
	    NUM_6: 54,
	    NUM_7: 55,
	    NUM_8: 56,
	    NUM_9: 57,
	    NUM_0: 48
	  }
	};

	window.addEventListener('keydown', Keyboard.keyboardEvent.bind(Keyboard));

	exports.default = Keyboard;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _emitter = __webpack_require__(3);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Event = {
	  globalVariables: {},
	  missionVariables: {},
	  eventVariables: {}, // local event. 仅在此地图储存，出了地图就不储存了。
	  commonEventVariables: {},

	  onGoingEvents: {}, // local event
	  onGoingMission: {},
	  onGoingCommonEvents: {}, // 这个是全局的，会一直检查。

	  setGlobalVariable: function setGlobalVariable(name, value) {
	    this.globalVariables[name] = value;
	  },

	  getGlobalVariable: function getGlobalVariable(name) {
	    return this.globalVariables[name];
	  },

	  hasMissionStarted: function hasMissionStarted(missionName) {
	    return this.onGoingMission[missionName];
	  },

	  startMission: function startMission(missionName) {
	    if (missionName in this.missionVariables) {
	      throw 'Event Error: startMission: ${missionName} already started';
	    } else {
	      this.missionVariables[missionName] = {}; // initiate mission variables
	      this.onGoingMission[missionName] = true;
	    }
	  },

	  finishMission: function finishMission(missionName) {
	    if (missionName in this.missionVariables) {
	      delete this.missionVariables[missionName];
	      delete this.onGoingMission[missionName];
	    } else {
	      throw 'Event Error: finishMission: ' + missionName + ' hasn\'t started.';
	    }
	  },

	  setMissionVariable: function setMissionVariable(missionName, name, value) {
	    if (missionName in this.missionVariables) {
	      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	        var obj = name;
	        for (var _name in obj) {
	          this.setMissionVariable(missionName, _name, obj[_name]);
	        }
	      } else {
	        this.missionVariables[missionName][name] = value;
	      }
	    } else {
	      throw '\nEvent Error: setMissionVariable:\n             mission ' + missionName + ' is not registered.\n             please register mission first by calling\n             GameManager.Event.registerMission("mission name")';
	    }
	  },

	  getMissionVariable: function getMissionVariable(missionName, name) {
	    if (missionName in this.missionVariables) {
	      return this.missionVariables[missionName][name];
	    } else {
	      return null;

	      throw '\nEvent Error: getMissionVariable:\n             mission ' + missionName + ' is not registered.\n             please register mission first by calling\n             GameManager.Event.registerMission("mission name")';
	    }
	  },

	  /**
	   * 全局发生的事件。一般来说 Common Event 的变量储存在 globalVariables 中。
	   * @param  {[type]} eventName [description]
	   * @param  {[type]} args      [description]
	   * @return {[type]}           [description]
	   */
	  createCommonEvent: function createCommonEvent(eventName, args) {
	    if (eventName in this.commonEventVariables) {
	      throw 'Event Error: createCommonEvent: ${eventName} is already registered';
	    } else {
	      this.onGoingCommonEvents[eventName] = args;
	    }
	  },

	  // ##################################
	  // ########### Events ###############
	  // ##################################
	  teleportPlayer: function teleportPlayer(mapId, positionId) {
	    GameManager.Map.drawMapById(mapId, positionId);
	  },

	  showText: function showText() {
	    var args = arguments;
	    return new Promise(function (resolve, reject) {
	      _emitter2.default.emit('text-panel-show', { texts: args });
	      _emitter2.default.on('text-panel-done', function () {
	        _emitter2.default.off('text-panel-done');
	        _emitter2.default.emit('map-ui-bind-keyboard');
	        resolve();
	      });
	    });
	  },

	  showOptions: function showOptions(text) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	    return new Promise(function (resolve, reject) {
	      _emitter2.default.emit('text-panel-show', { texts: [text], options: options });
	      _emitter2.default.on('text-panel-done', function (option) {
	        _emitter2.default.off('text-panel-done');
	        _emitter2.default.emit('map-ui-bind-keyboard');
	        resolve(option);
	      });
	    });
	  },

	  addHistory: function addHistory() {
	    var args = Array.prototype.slice.apply(arguments);
	    _emitter2.default.emit('history-panel-add-logs', { logs: args });
	  },

	  debug: function debug(text) {
	    console.log(text);
	  },

	  /**
	   * run custom script
	   * eg: GameManager.event.runScript(function(){ console.log('Hi there') })
	   * @param  {[function]} func [description]
	   */
	  runScript: function runScript(func) {
	    return function () {
	      func();
	    };
	  }
	};

	exports.default = Event;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _type = __webpack_require__(33);

	var _type2 = _interopRequireDefault(_type);

	var _state = __webpack_require__(35);

	var _state2 = _interopRequireDefault(_state);

	var _tileset = __webpack_require__(37);

	var _tileset2 = _interopRequireDefault(_tileset);

	var _action = __webpack_require__(38);

	var _action2 = _interopRequireDefault(_action);

	var _item = __webpack_require__(39);

	var _item2 = _interopRequireDefault(_item);

	var _skill = __webpack_require__(40);

	var _skill2 = _interopRequireDefault(_skill);

	var _npc = __webpack_require__(8);

	var _npc2 = _interopRequireDefault(_npc);

	var _state3 = __webpack_require__(36);

	var _state4 = _interopRequireDefault(_state3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Database = {
	  Types: _type2.default,
	  States: {},
	  Skills: {},
	  Items: {},
	  Tilesets: _tileset2.default,
	  Actions: {},
	  NPCs: {}
	};

	Database.getTileset = function (name) {
	  return this.Tilesets[name];
	};

	// add actions
	Database.loadActionData = function (actions) {
	  for (var actID in actions) {
	    Database.Actions[actID] = new _action2.default(actions[actID]);
	  }
	};

	// add items
	Database.loadItemData = function (items) {
	  for (var itemID in items) {
	    Database.Items[itemID] = new _item2.default(items[itemID]);
	  }
	};

	Database.getItem = function (itemID) {
	  if (this.Items[itemID]) {
	    return this.Items[itemID];
	  } else {
	    throw 'Error: getItem id:' + itemID + ' not found';
	  }
	};

	// add skills
	Database.loadSkillData = function (skills) {
	  for (var skillID in skills) {
	    Database.Skills[skillID] = new _skill2.default(skills[skillID]);
	  }
	};

	Database.getSkill = function (skillID) {
	  if (this.Skills[skillID]) {
	    return this.Skills[skillID];
	  } else {
	    throw 'Error: getSkill id:' + skillID + ' not found';
	  }
	};

	// add npcs
	Database.loadNPCData = function (npcs) {
	  for (var npcID in npcs) {
	    // Database.NPCs[npcID] = new NPC(npcs[npcID])
	    Database.NPCs[npcID] = npcs[npcID];
	    window.npc = new _npc2.default(npcs[npcID]);
	  }
	};

	Database.getNPC = function (npcID) {
	  if (this.NPCs[npcID]) {
	    return this.NPCs[npcID];
	  } else {
	    throw 'Error: getNPC id:' + npcID + ' not found';
	  }
	};

	// add states
	Database.loadStateData = function (states) {
	  for (var stateID in states) {
	    Database.States[stateID] = new _state4.default(states[stateID]);
	  }
	};

	Database.getState = function (stateID) {
	  return this.States[stateID];
	};

	exports.default = Database;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Types
	 */

	var types = {
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
	    'Flail': 3, // 类似于雷姆的铁球
	    'Axe': 4,
	    'Whip': 5, // 鞭子
	    'Cane': 6, // 魔杖
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
	    'OneFriend': 'OneFriend', // ally
	    'AreaFriend': 'AreaFriend',
	    'LineFriend': 'LineFriend',
	    'AreaAll': 'AreaAll',
	    'LineAll': 'LineAll',
	    'OneAnyone': 'OneAnyone',
	    'None': 'None' },
	  HitTypes: {
	    'Physical': 1,
	    'Magical': 2
	  },
	  DamageTypes: {
	    'HPDamage': 1,
	    'MPDamage': 2,
	    'EPDamage': 3,
	    'HPRecover': 4,
	    'MPRecover': 5,
	    'EPRecover': 6,
	    'HPDrain': 7, // 吸血
	    'MPDrain': 8,
	    'EPDrain': 9
	  },

	  EffectTypes: {
	    'AddBuff': 1, // 增益魔法
	    'AddDebuff': 2, // 减益魔法
	    'RemoveBuff': 3,
	    'RemoveDebuff': 4,

	    'AddState': 5, // {type: AddState, id: 'knockout', rate: 0.2}
	    // 0.2的概率一击致死。
	    //
	    'RemoveState': 6,

	    'ChangeStat': 'ChangeStat', // {type: ChangeStat, id: 'currentHP', value: 10}

	    'LearnSkill': 10,
	    'ForgetSkill': 11,
	    'SpecialEffect': 12 // for example: 偷东西, 挖东西。
	  },
	  BuffTypes: {
	    'Shield': 1,
	    'MagicResistance': 2,
	    'Attack': 3, // 这里的 Attack 指的是 Physical Attack
	    'MagicalAttack': 4
	  },
	  SpecialEffectTypes: {
	    'Steal': 1,
	    'Mining': 2,
	    'Walk': 3,
	    'Explore': 4
	  },

	  TraitTypes: {
	    'AddState': 'AddState', // {type: AddState, state: Knockout, rate: 0.2}
	    // 0.2的概率一击致死。
	    //
	    'ResistState': 'ResistState', // {type: ResistState, state: Burn, rate: 0.3}
	    // {type: ResistState, state: Knockout, rate: 1} 不朽，永远不死。
	    //
	    'ChangeStat': 'ChangeStat', // {type: ChangeStat, id: 'ATK', value: 20},
	    // {type: ChangeStat, id: 'poisonResist', value: 4}
	    //
	    'AddSkill': 4, // 例如其实职业，就自动获得了 Guard 的技能。
	    // {type: AddSkill, skill: Guard}
	    //
	    'SealSkillType': 5 // {type: SealSkillType, type: SkillTypes.Magic}
	    // 封印 Magic 技能。 Silence
	  },

	  EventTriggerTypes: {
	    'AutoRun': 'AutoRun',
	    'Parallel': 'Parallel',
	    'ActionButton': 'ActionButton',
	    'PlayerAbove': 'PlayerAbove'
	  }
	};

	var customTypes = __webpack_require__(34);
	exports.default = Object.assign(types, customTypes);

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var types = {};

	exports.default = types;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _state = __webpack_require__(36);

	var _state2 = _interopRequireDefault(_state);

	var _text = __webpack_require__(23);

	var _utility = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var states = {
	  'knockout': {
	    name: (0, _text.text)({ cn: '死亡' }),
	    duration: 0,
	    type: 'neutral',
	    condition: function condition(a) {
	      return a.getStat('currentHP') <= 0;
	    },
	    act: function act(a) {
	      // do nothing
	    }
	  },
	  'illness': {
	    name: (0, _text.text)({ cn: '疾病' }),
	    description: '普通的疾病 (-4 疾病)',
	    duration: 0,
	    type: 'bad',
	    condition: function condition(a) {
	      var illnessResistance = a.getStat('resist-illness') - 4; // -4 correction
	      var d = (0, _utility.D20)();
	      if (d < illnessResistance) {
	        return false;
	      } else {
	        // be sick
	        return true;
	      }
	    },
	    init: function init(a) {
	      GameManager.Event.addHistory(a.name + '染上了疾病');
	    },
	    act: function act(a) {
	      GameManager.Event.addHistory(a.name + '被疾病困扰');
	    },
	    remove: function remove(a) {
	      GameManager.Event.addHistory(a.name + '的病好了');
	    }
	  },
	  'poisoning': {
	    name: (0, _text.text)({ cn: '中毒' }),
	    description: '身体中了普通的毒',
	    duration: 0,
	    type: 'bad',
	    condition: function condition(a) {
	      return true;
	    }
	  },
	  'chaotic': {
	    name: (0, _text.text)({ cn: '混乱' }),
	    description: '大脑陷入了混乱，无法控制自己的移动',
	    duration: 0,
	    type: 'bad',
	    condition: function condition(a) {
	      var chaosResistance = a.getStat('resist-chaos');
	      var d = (0, _utility.D20)();
	      if (d < chaosResistance) {
	        return false;
	      } else {
	        return true;
	      }
	    },
	    init: function init(a) {
	      // TODO
	      GameManager.Event.addHistory(a.name + '的大脑陷入了混乱状态');
	    },
	    act: function act(a) {
	      GameManager.Event.addHistory(a.name + '的大脑感到非常的混乱，' + a.name + '不能控制自己的移动');
	    },
	    remove: function remove(a) {
	      GameManager.Event.addHistory(a.name + '不再感到混乱了');
	    }
	  },
	  'hostile': {
	    name: (0, _text.text)({ cn: '敌人' }),
	    description: '这是你的对你患有敌意的敌人',
	    duration: 0,
	    type: 'bad',
	    condition: function condition() {
	      return true;
	    }
	  }
	};

	exports.default = states;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * State
	 */

	var State = function () {
	  function State(_ref) {
	    var _ref$name = _ref.name;
	    var name = _ref$name === undefined ? '' : _ref$name;
	    var _ref$description = _ref.description;
	    var description = _ref$description === undefined ? null : _ref$description;
	    var _ref$type = _ref.type;
	    var type = _ref$type === undefined ? 'neutral' : _ref$type;
	    var _ref$duration = _ref.duration;
	    var duration = _ref$duration === undefined ? 0 : _ref$duration;
	    var _ref$condition = _ref.condition;
	    var condition = _ref$condition === undefined ? function () {
	      return true;
	    } : _ref$condition;
	    var _ref$init = _ref.init;
	    var init = _ref$init === undefined ? function () {} : _ref$init;
	    var _ref$act = _ref.act;
	    var act = _ref$act === undefined ? function () {} : _ref$act;
	    var _ref$remove = _ref.remove;
	    var remove = _ref$remove === undefined ? function () {} : _ref$remove;

	    _classCallCheck(this, State);

	    this.name = name;
	    this.duration = duration;

	    this.description = description;
	    if (!description) {
	      this.description = '没有关于 ' + this.name + ' 的介绍。';
	    }

	    this.type = type;
	    this.condition = condition;
	    this.init = init;
	    this.act = act;
	    this.remove = remove;
	  }

	  _createClass(State, [{
	    key: 'canAct',
	    value: function canAct(a) {
	      return this.condition(a);
	    }
	  }]);

	  return State;
	}();

	exports.default = State;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _text = __webpack_require__(23);

	var tilesets = {
	  'player': {
	    text: '﹫',
	    passable: false,
	    blockLight: false,
	    color: '#1b6efc', // '#ff0',
	    description: (0, _text.text)({ cn: '你自己' }),
	    type: 'player'
	  },

	  'npc': {
	    'text': '@',
	    'passable': false,
	    'blockLight': false,
	    'description': (0, _text.text)({ cn: '一个 NPC' }),
	    'color': '#1edb86'
	  },

	  'ground': {
	    'text': '.',
	    'passable': true,
	    'blockLight': false,
	    'description': (0, _text.text)({ cn: '绿色的草地' }),
	    'color': '#1c984a',
	    'background': '#1c984a'
	  },

	  'mud-ground': {
	    'text': '.',
	    'passable': true,
	    'blockLight': false,
	    'description': (0, _text.text)({ cn: '坑坑洼洼的泥地' }),
	    'color': '#ba931e',
	    'background': '#46390f'
	  },

	  'marbel-floor': {
	    'text': '.',
	    'passable': true,
	    'blockLight': false,
	    'description': (0, _text.text)({ cn: '光滑的大理石地砖' }),
	    'color': '#e7e7e7',
	    'background': '#d1d1d1'
	  },

	  'wooden-wall': {
	    'text': '#',
	    'passable': false,
	    'blockLight': true,
	    'description': (0, _text.text)({ cn: '树做的墙' }),
	    'color': '#ba931e',
	    'background': '#9f7f1d'
	  },

	  'white-wall': {
	    'text': '#',
	    'passable': false,
	    'blockLight': true,
	    'description': (0, _text.text)({ cn: '白颜色的墙' }),
	    'color': '#f0f0f0',
	    'background': '#919191'
	  },

	  'mud-wall': {
	    'text': '#',
	    'passable': false,
	    'blockLight': true,
	    'description': (0, _text.text)({ cn: '泥土做的墙' }),
	    'color': '#d0c4a1',
	    'background': '#9f7f1d'
	  },

	  'glass-window': {
	    'text': '⚀',
	    'passable': false,
	    'blockLight': false,
	    'description': (0, _text.text)({ cn: '透亮的窗户' }),
	    'color': '#fffaec',
	    'background': '#78b0b0'
	  },

	  'grass': {
	    text: '\'',
	    passable: true,
	    blockLight: false,
	    description: (0, _text.text)({ cn: '绿油油的小草' }),
	    color: '#4cc87a'
	  },

	  'bush': {
	    text: '"',
	    passable: true,
	    blockLight: true,
	    description: (0, _text.text)({ cn: '灌木。(只有进入灌木才可以看到其它相邻灌木中的东西)' }),
	    color: '#4cc87a'
	  },

	  'tree': {
	    text: '♣︎',
	    passable: false,
	    blockLight: true,
	    description: (0, _text.text)({ cn: '一颗大树' }),
	    color: '#2d874e'
	  },

	  'small-tree': {
	    text: '♠︎',
	    passable: false,
	    blockLight: false, // small tree doesn't block light
	    description: (0, _text.text)({ cn: '一颗小树' }),
	    color: '#3b9d5f'
	  },

	  'torch': {
	    'text': '^',
	    'passable': false,
	    'blockLight': false,
	    'description': (0, _text.text)({ cn: '燃烧的火炬' }),
	    'color': '#f6d736',
	    'light': '#f2fa57',
	    'power': 0.1,
	    'range': 5
	  },

	  'portal': {
	    'text': 'P',
	    'passable': true,
	    'blockLight': false,
	    'description': (0, _text.text)({ cn: '一个闪耀着紫色光芒的传送门' }),
	    'color': '#9242bd'
	  },

	  'water': {
	    'text': '≈',
	    'passable': false,
	    'blockLight': false,
	    'description': (0, _text.text)({ cn: '清澈的水' }),
	    'color': '#85ddf9',
	    'background': '#3dc0e9'
	  },

	  'wooden-door-open': {
	    text: '/',
	    passable: true,
	    blockLight: false,
	    description: (0, _text.text)({ cn: '一个打开的木门' }),
	    color: '#8e8c21'
	  },

	  'wooden-door-closed': {
	    text: '+',
	    passable: false,
	    blockLight: true,
	    description: (0, _text.text)({ cn: '一个关闭的木门' }),
	    color: '#8e8c21'
	  },

	  'iron-door-open': {
	    text: '/',
	    passable: true,
	    blockLight: false,
	    description: (0, _text.text)({ cn: '一个打开的铁门' }),
	    color: '#535353'
	  },

	  'iron-door-closed': {
	    text: '+',
	    passable: false,
	    blockLight: true,
	    description: (0, _text.text)({ cn: '一个关闭的铁门' }),
	    color: '#535353'
	  },

	  'checkpoint': {
	    text: '!',
	    passable: true,
	    blockLight: false,
	    description: (0, _text.text)({ cn: '检查点' }),
	    color: '#ff7b01'
	  },

	  'rat': {
	    text: 'r',
	    passable: false,
	    blockLight: false,
	    description: (0, _text.text)({ cn: '老鼠' }),
	    color: '#303016'
	  },

	  'dropped-items': {
	    text: '}',
	    passable: true,
	    blockLight: false,
	    description: (0, _text.text)({ cn: '掉落的物品' }),
	    color: '#626b14'
	  },

	  'corpse': {
	    text: 'c',
	    passable: true,
	    blockLight: false,
	    description: (0, _text.text)({ cn: '尸体' }),
	    color: '#626b14'
	  },

	  'unknown': {
	    'text': '?'
	  }
	};

	module.exports = tilesets;

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Action = function () {
	  function Action(_ref) {
	    var _ref$name = _ref.name;
	    var name = _ref$name === undefined ? '' : _ref$name;
	    var _ref$condition = _ref.condition;
	    var condition = _ref$condition === undefined ? function () {
	      return true;
	    } : _ref$condition;
	    var _ref$act = _ref.act;
	    var act = _ref$act === undefined ? null : _ref$act;

	    _classCallCheck(this, Action);

	    this.name = name;
	    this.condition = condition;
	    this.act = act;
	  }

	  _createClass(Action, [{
	    key: 'canAct',
	    value: function canAct(a, b) {
	      return this.condition(a, b);
	    }
	  }]);

	  return Action;
	}();

	exports.default = Action;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _gameobject = __webpack_require__(9);

	var _gameobject2 = _interopRequireDefault(_gameobject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Items
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Item = function (_GameObject) {
	  _inherits(Item, _GameObject);

	  function Item(_ref) {
	    var _ref$name = _ref.name;
	    var name = _ref$name === undefined ? '' : _ref$name;
	    var _ref$description = _ref.description;
	    var description = _ref$description === undefined ? null : _ref$description;
	    var _ref$price = _ref.price;
	    var price = _ref$price === undefined ? 0 : _ref$price;
	    var _ref$weight = _ref.weight;
	    var weight = _ref$weight === undefined ? 0 : _ref$weight;
	    var _ref$subscriptions = _ref.subscriptions;
	    var subscriptions = _ref$subscriptions === undefined ? {} : _ref$subscriptions;
	    var _ref$consumable = _ref.consumable;
	    var consumable = _ref$consumable === undefined ? false : _ref$consumable;
	    var _ref$hidden = _ref.hidden;
	    var hidden = _ref$hidden === undefined ? false : _ref$hidden;

	    _classCallCheck(this, Item);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, { name: name, subscriptions: subscriptions, types: ['item'] }));

	    if (!description) {
	      _this.description = '$没有有关 {this.name} 的说明';
	    } else {
	      _this.description = description;
	    }

	    _this.price = price;
	    _this.consumable = consumable;
	    _this.hidden = hidden;
	    _this.weight = weight;
	    return _this;
	  }

	  return Item;
	}(_gameobject2.default);

	exports.default = Item;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _type = __webpack_require__(33);

	var _type2 = _interopRequireDefault(_type);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * Skills
	                                                                                                                                                           */

	var Skill = function Skill(_ref) {
	  var _ref$name = _ref.name;
	  var name = _ref$name === undefined ? '' : _ref$name;
	  var _ref$description = _ref.description;
	  var description = _ref$description === undefined ? null : _ref$description;
	  var _ref$scope = _ref.scope;
	  var scope = _ref$scope === undefined ? _type2.default.ScopeTypes.OneEnemy : _ref$scope;
	  var _ref$passive = _ref.passive;
	  var passive = _ref$passive === undefined ? false : _ref$passive;
	  var _ref$condition = _ref.condition;
	  var condition = _ref$condition === undefined ? function () {
	    return true;
	  } : _ref$condition;
	  var _ref$act = _ref.act;
	  var act = _ref$act === undefined ? function (a, b) {} : _ref$act;

	  _classCallCheck(this, Skill);

	  this.name = name;

	  if (!description) {
	    this.description = '$没有有关 {this.name} 的说明';
	  }

	  this.scope = scope;
	  this.passive = passive;
	  this.condition = condition;
	  this.act = act;
	};

	exports.default = Skill;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _gameobject = __webpack_require__(9);

	var _gameobject2 = _interopRequireDefault(_gameobject);

	var _npc = __webpack_require__(8);

	var _npc2 = _interopRequireDefault(_npc);

	var _player = __webpack_require__(2);

	var _player2 = _interopRequireDefault(_player);

	var _type = __webpack_require__(33);

	var _type2 = _interopRequireDefault(_type);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Map = {
	  // $: GameManager
	  maps: {},

	  currentMapId: null,
	  currentEvents: {},
	  eventList: [],

	  mapObjects: [], // 2d array. value = [1, 2, 3]. 3 在最高层
	  objectToBeRendered: {}, // key='x,y'
	  renderedTiles: {}, // key = 'x,y'
	  tilesSeen: {}, // key = 'x,y'
	  npcsInView: {}, // key = 'x,y'

	  lightData: null,
	  fovData: null };

	Map.loadMapData = function (mapData) {
	  var id = mapData.id;

	  if (id in this.maps) {
	    throw 'Error Map.loadMapData: ID ' + id + ' already exists';
	  }

	  var data = {};
	  this.maps[id] = data;

	  data.name = mapData.name;
	  data.sight = mapData.sight || 0; // 视野修正值
	  data.light = mapData.light || [50, 50, 50];
	  data.tiles = mapData.tiles;
	  data.events = mapData.events || [];
	  data.map = mapData.map;
	};

	Map.getMapDataById = function (mapId) {
	  return this.maps[mapId];
	};

	Map.initEvents = function (events) {
	  var _this = this;

	  this.currentEvents = {};
	  this.eventList = [];

	  var _loop = function _loop(key) {
	    var evs = events[key];
	    var selectors = key.split(',');

	    selectors.forEach(function (selector) {
	      selector = selector.trim();

	      if (selector in _this.currentEvents) {
	        throw 'Error Map.initEvents: ' + selector + ' already exists';
	      }
	      _this.currentEvents[selector] = evs;
	    });
	  };

	  for (var key in events) {
	    _loop(key);
	  }
	};

	// 左上角是 (0, 0)
	// below: [1, 2, 3]  3 是最高的。
	Map.initMapObjects = function (mapData) {
	  var _this2 = this;

	  this.mapObjects = [];

	  var setMapObject = function setMapObject(x, y, tile) {
	    if (tile.below) {
	      tile.below.forEach(function (tile) {
	        return setMapObject(x, y, tile);
	      });
	    }
	    var obj = null;
	    if (tile.id || tile.class) {
	      var selector = tile.id ? '#' + tile.id : '.' + tile.class;
	      obj = _this2.currentEvents[selector];
	      if (!obj) {
	        obj = new _gameobject2.default({});
	      } else {
	        obj = obj();
	      }
	      obj.setPosition(x, y);

	      var event = { gameObject: obj };
	      if (tile.id) {
	        event.id = tile.id;
	      } else {
	        event.class = tile.class;
	      }

	      _this2.eventList.push(event); // save event to eventList
	    } else if (tile.type) {
	      obj = Object.assign({}, GameManager.Database.Tilesets[tile.type], tile);

	      if (!_this2.mapObjects[y][x]) {
	        _this2.mapObjects[y][x] = [obj];
	      } else {
	        // below
	        _this2.mapObjects[y][x].push(obj);
	      }
	    } else {
	      throw 'Error Map.initMapObjects: invalid tile: ', tile;
	    }
	  };

	  var map = mapData.map.split('\n').filter(function (x) {
	    return x.length > 0;
	  });
	  for (var y = 0; y < map.length; y++) {
	    this.mapObjects.push([]);
	    for (var x = 0; x < map[y].length; x++) {
	      var data = map[y][x];
	      if (data === ' ') continue; // escape ' '
	      var tile = mapData.tiles[data];
	      if (!tile) {
	        throw 'Error Map.initMapObjects: undefined tile ' + data;
	      }
	      setMapObject(x, y, tile);
	    }
	  }
	};

	Map.initPlayer = function (spawnPosId) {
	  for (var i = 0; i < this.eventList.length; i++) {
	    var obj = this.eventList[i];
	    if (obj.id === spawnPosId) {
	      var gameObject = obj.gameObject;
	      GameManager.player.setPosition(gameObject.x, gameObject.y);
	    }
	  }
	};

	Map.initScheduler = function () {
	  var scheduler = new ROT.Scheduler.Speed();
	  var player = GameManager.player;

	  scheduler.add(player, true);

	  // add gameObjects
	  this.eventList.forEach(function (obj) {
	    var gameObject = obj.gameObject;
	    scheduler.add(gameObject, true);
	  });

	  GameManager.engine = new ROT.Engine(scheduler);
	  GameManager.engine.start();
	};

	/**
	 * [function description]
	 * @param  {[Number]} x     [description]
	 * @param  {[Number]} y     [description]
	 * @param  {[Array]} tiles [description]
	 */
	Map.drawTilesAtPos = function (x, y, tiles) {
	  var ambientLight = [100, 100, 100]; //[100, 100, 100]
	  // TODO: 这个函数中，设定光线影响。
	  var player = GameManager.player,
	      realX = x + player.relativeX,
	      realY = y + player.relativeY,
	      coordKey = x + ',' + y;

	  var backgroundColor = null;
	  for (var i = tiles.length - 1; i >= 0; i--) {
	    if (tiles[i].background) {
	      backgroundColor = tiles[i].background;
	      break;
	    }
	  }

	  if (!backgroundColor) {
	    throw 'Error Map.drawTilesAtPos: backgroundColor not found';
	  }

	  var light = ambientLight;
	  if (this.lightData[coordKey]) {
	    // light
	    light = ROT.Color.add(light, this.lightData[x + ',' + y]);
	  }

	  for (var _i = 0; _i < tiles.length; _i++) {
	    var tile = tiles[_i];
	    var finalBackgroundColor = ROT.Color.multiply(ROT.Color.fromString(backgroundColor), light);
	    var finalColor = ROT.Color.multiply(ROT.Color.fromString(tile.color), light);

	    if (!this.fovData[coordKey]) {
	      // not visible
	      if (!this.tilesSeen[coordKey]) continue; // not discovered yet
	      finalBackgroundColor = ROT.Color.multiply(finalBackgroundColor, ROT.Color.fromString('#1b1b1b'));
	      finalColor = ROT.Color.multiply(finalColor, ROT.Color.fromString('#1b1b1b'));
	    } else {
	      this.tilesSeen[coordKey] = true;
	      this.renderedTiles[coordKey] = tiles;
	      if (tile.gameObject && tile.gameObject instanceof _npc2.default) {
	        this.npcsInView[coordKey] = tile.gameObject;
	      }
	    }

	    this.$.display.draw(realX, realY, tile.text, ROT.Color.toRGB(finalColor), ROT.Color.toRGB(finalBackgroundColor));
	  }
	};

	Map.setLight = function (x, y) {
	  var lightColor = arguments.length <= 2 || arguments[2] === undefined ? '#f2fa57' : arguments[2];

	  var _this3 = this;

	  var power = arguments.length <= 3 || arguments[3] === undefined ? 0.1 : arguments[3];
	  var range = arguments.length <= 4 || arguments[4] === undefined ? 5 : arguments[4];

	  var player = GameManager.player,
	      playerX = player.x,
	      playerY = player.y;
	  var inBush = this.objectToBeRendered[playerX + ',' + playerY].filter(function (tile) {
	    return tile.type === 'bush';
	  }).length; // if in bush, then bush not blocklight(ignor bush)

	  var lightPasses = function lightPasses(x, y) {
	    var tiles = _this3.objectToBeRendered[x + ',' + y];
	    if (!tiles) return false;
	    if (inBush) {
	      return !tiles.filter(function (tile) {
	        return tile.blockLight && tile.type !== 'bush';
	      }).length;
	    }
	    return !tiles.filter(function (tile) {
	      return tile.blockLight;
	    }).length;
	  };
	  var fov = new ROT.FOV.PreciseShadowcasting(lightPasses, { topology: 8 });

	  // prepare a lighting algorithm
	  var reflectivity = function reflectivity(x, y) {
	    var tiles = _this3.objectToBeRendered[x + ',' + y];
	    if (!tiles) return 0;
	    var flag = !tiles.filter(function (tile) {
	      return tile.blockLight;
	    }).length;
	    return flag ? power : 0;
	  };
	  var lighting = new ROT.Lighting(reflectivity, { range: range, passes: 2 });
	  lighting.setFOV(fov);
	  lighting.setLight(x, y, ROT.Color.fromString(lightColor));

	  var lightingCallback = function lightingCallback(x, y, color) {
	    var key = x + ',' + y;
	    if (_this3.lightData[key]) {
	      _this3.lightData[key] = ROT.Color.add(color, _this3.lightData[key]); //ROT.Color.interpolate(color, this.lightData[key], 0.5)
	    } else {
	      _this3.lightData[key] = color;
	    }
	  };
	  lighting.compute(lightingCallback);
	};

	Map.manageLights = function () {
	  this.lightData = {};

	  for (var key in this.objectToBeRendered) {
	    var pos = key.split(','),
	        x = parseInt(pos[0]),
	        y = parseInt(pos[1]),
	        tiles = this.objectToBeRendered[key];
	    for (var i = tiles.length - 1; i >= 0; i--) {
	      var tile = tiles[i];
	      if (tile.light) {
	        // find light
	        this.setLight(x, y, tile.light, tile.power, tile.range);
	      }
	    }
	  }

	  // player light
	  var player = GameManager.player;
	  var daytime = true;
	  if (!daytime) {
	    this.setLight(player.x, player.y, '#545353', 0.1, 4); // night
	  } else {
	    this.setLight(player.x, player.y, '#b1b1b1', 0.2, GameManager.DISPLAY_HEIGHT / 2); // daytime
	  }
	};

	Map.manageFOV = function () {
	  var _this4 = this;

	  var player = GameManager.player,
	      playerX = player.x,
	      playerY = player.y;
	  var inBush = this.objectToBeRendered[playerX + ',' + playerY].filter(function (tile) {
	    return tile.type === 'bush';
	  }).length; // if in bush, then bush not blocklight(ignor bush)

	  var lightPasses = function lightPasses(x, y) {
	    var tiles = _this4.objectToBeRendered[x + ',' + y];
	    if (!tiles) return false;
	    if (inBush) {
	      return !tiles.filter(function (tile) {
	        return tile.blockLight && tile.type !== 'bush';
	      }).length;
	    }
	    return !tiles.filter(function (tile) {
	      return tile.blockLight;
	    }).length;
	  };

	  var fov = new ROT.FOV.PreciseShadowcasting(lightPasses);
	  this.fovData = {};

	  var callback = function callback(x, y, r, visibility) {
	    if (visibility !== 0) {
	      _this4.fovData[x + ',' + y] = true;
	    }
	  };

	  // TODO: during the daytime, fovRadius should be the DISPLAY_WIDTH/2
	  var daytimeFovRadius = GameManager.DISPLAY_WIDTH / 2;
	  var daytime = true;
	  if (!daytime) fov.compute(player.x, player.y, player.getStat('fov'), callback);else fov.compute(player.x, player.y, daytimeFovRadius, callback);
	};

	Map.draw = function (_ref) {
	  var _ref$isActionButton = _ref.isActionButton;
	  var isActionButton = _ref$isActionButton === undefined ? false : _ref$isActionButton;
	  var _ref$targetPos = _ref.targetPos;
	  var targetPos = _ref$targetPos === undefined ? {} : _ref$targetPos;
	  var _ref$needToRunEvents = _ref.needToRunEvents;
	  var needToRunEvents = _ref$needToRunEvents === undefined ? true : _ref$needToRunEvents;

	  GameManager.display.clear();
	  this.objectToBeRendered = {};
	  this.renderedTiles = {};
	  this.npcsInView = {};

	  // get objects to be rendered
	  var player = GameManager.player;
	  for (var dy = -GameManager.DISPLAY_HEIGHT / 2; dy < GameManager.DISPLAY_HEIGHT / 2; dy++) {
	    var y = dy + player.y;
	    if (y < 0 || y >= this.mapObjects.length) continue;

	    for (var dx = -GameManager.DISPLAY_WIDTH / 2; dx < GameManager.DISPLAY_WIDTH / 2; dx++) {
	      var x = dx + player.x;

	      var tiles = this.mapObjects[y][x];
	      if (!tiles) continue;

	      var key = x + ',' + y;
	      this.objectToBeRendered[key] = tiles;
	    }
	  }

	  // run events
	  this.runEvents(isActionButton, targetPos, needToRunEvents);

	  // check fov to delete object that is invisible from this.objectToBeRendered
	  this.manageFOV();

	  // compute light
	  this.manageLights();

	  // draw tiles
	  for (var _key in this.objectToBeRendered) {
	    var pos = _key.split(','),
	        _x4 = parseInt(pos[0]),
	        _y = parseInt(pos[1]),
	        _tiles = this.objectToBeRendered[_key];
	    this.drawTilesAtPos(_x4, _y, _tiles);
	  }

	  // draw player
	  this.drawPlayer();
	};

	Map.runEvents = function (isActionButton, targetPos, needToRunEvents) {
	  var player = GameManager.player;
	  for (var i = 0; i < this.eventList.length; i++) {
	    var obj = this.eventList[i]; // {x, y, event}
	    var gameObject = obj.gameObject,
	        x = gameObject.x,
	        y = gameObject.y,
	        eventTrigger = null;

	    if (!gameObject.active) continue;

	    var realX = x + player.relativeX,
	        realY = y + player.relativeY;

	    if (isActionButton && x === targetPos.x && y === targetPos.y) {
	      eventTrigger = 'ActionButton';
	    } else if (!isActionButton && x === targetPos.x && y === targetPos.y) {
	      eventTrigger = 'PlayerAbove';
	    }

	    if (needToRunEvents) {
	      gameObject.runEvent(eventTrigger);
	    }

	    var display = gameObject.getDisplay();
	    if (display && realX >= 0 && realX < GameManager.DISPLAY_WIDTH && realY >= 0 && realY < GameManager.DISPLAY_HEIGHT) {
	      var _obj = { gameObject: gameObject };
	      if (display.type) {
	        _obj = Object.assign(_obj, GameManager.Database.Tilesets[display.type], display);
	      } else {
	        _obj = Object.assign(_obj, display);
	      }
	      this.objectToBeRendered[x + ',' + y] = this.objectToBeRendered[x + ',' + y].concat(_obj);
	    }
	  }
	};

	Map.drawPlayer = function () {
	  var player = GameManager.player,
	      x = player.x,
	      y = player.y;

	  var display = player.getDisplay();

	  this.drawTilesAtPos(x, y, this.objectToBeRendered[x + ',' + y].concat([Object.assign({}, GameManager.Database.Tilesets[display.type], display)]));
	};

	/**
	 * [function description]
	 * eg Map.drawMapById('arena', 'spawn-point')
	 * @param  {[string]} mapID                  the ID of map. eg 'arena' without #
	 * @param  {[string]} playerSpawnPosId where to put player? eg 'spawn-point'
	 * @return {[type]}                          [description]
	 */
	Map.drawMapById = function (mapId, playerSpawnPosId) {
	  if (mapId === this.currentMapId) {
	    // same map
	    // this.player = new Player()
	    this.initPlayer(playerSpawnPosId);
	    this.draw({ needToRunEvents: false });
	  } else {
	    this.currentMapId = mapId;
	    var mapData = this.getMapDataById(mapId);

	    this.tilesSeen = {}; // init/reset tilesSeen

	    this.initEvents(mapData.events);
	    this.initMapObjects(mapData);
	    this.initPlayer(playerSpawnPosId);
	    this.initScheduler();
	    this.draw({ needToRunEvents: true });
	  }
	};

	Map.getTopRenderedObject = function (x, y) {
	  var tiles = this.renderedTiles[x + ',' + y];
	  if (tiles && tiles.length) {
	    return tiles[tiles.length - 1];
	  } else {
	    return null;
	  }
	};

	// UI Canvas
	/*
	Map.drawSelection = function(x, y, option={}) {
	  let canvas = GameManager.canvas,
	      context = canvas.getContext('2d'),
	      player = GameManager.player,
	      width = GameManager.canvas.offsetWidth / GameManager.DISPLAY_WIDTH,
	      strokeStyle = option.strokeStyle || "#36d592",
	      fillStyle = option.fillStyle || "rgba(255, 255, 255, 0)"

	  width = width * (parseInt(GameManager.canvas.getAttribute('width')) / GameManager.canvas.offsetWidth)

	  // width = Math.floor(width)
	  x = x + player.relativeX
	  y = y + player.relativeY

	  x = x * width
	  y = y * width

	  context.beginPath()

	  context.rect(x, y, width, width)
	  context.fillStyle = fillStyle
	  context.fill()
	  context.lineWidth = 4
	  context.strokeStyle = strokeStyle
	  context.stroke()
	}

	Map.bindUICanvas = function(uiCanvas) {
	  this.uiCanvas = uiCanvas

	  let width = GameManager.canvas.offsetWidth / GameManager.DISPLAY_WIDTH
	  width = width * (parseInt(GameManager.canvas.getAttribute('width')) / GameManager.canvas.offsetWidth)

	  console.log('width', width)

	  uiCanvas.addEventListener('mousemove', function(evt) {
	    let curX = evt.clientX
	    let curY = evt.clientY
	  }, false)

	}
	*/

	exports.default = Map;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _text = __webpack_require__(23);

	var actions = {
	  'logging': // id
	  {
	    name: (0, _text.text)({ cn: '伐木', en: 'logging' }),
	    condition: function condition(_ref) {
	      var a = _ref.a;
	      var b = _ref.b;

	      return a.getStat('logging') > 1;
	    },
	    act: function act(_ref2) {
	      var a = _ref2.a;
	      var b = _ref2.b;

	      a.changeStat('ep', -5); // cost energy
	    }
	  },

	  'open': {
	    name: (0, _text.text)({ cn: '开门', en: 'open' }),
	    condition: function condition(_ref3) {
	      var a = _ref3.a;
	      var b = _ref3.b;

	      return a.dist(b) === 1 && b.hasSubscription('open') && b.closed;
	    },
	    act: function act(_ref4) {
	      var a = _ref4.a;
	      var b = _ref4.b;

	      b.emit('open', a);
	      return true; // finish current turn
	    }
	  },

	  'close': {
	    name: (0, _text.text)({ cn: '关闭', en: 'close' }),
	    condition: function condition(_ref5) {
	      var a = _ref5.a;
	      var b = _ref5.b;

	      return a.dist(b) === 1 && b.hasSubscription('close') && !b.closed;
	    },
	    act: function act(_ref6) {
	      var a = _ref6.a;
	      var b = _ref6.b;

	      b.emit('close', a);
	      return true; // finish current turn
	    }
	  },

	  'touch-head': {
	    name: (0, _text.text)({ cn: '摸头', en: 'touch head' }),
	    condition: function condition(_ref7) {
	      var a = _ref7.a;
	      var b = _ref7.b;

	      return a.dist(b) === 1 && b.hasSubscription('touch-head');
	    },
	    act: function act(_ref8) {
	      var a = _ref8.a;
	      var b = _ref8.b;

	      b.emit('touch-head', a);
	      return true;
	    }
	  },

	  'pick': {
	    name: (0, _text.text)({ cn: '捡起', en: 'pick' }),
	    condition: function condition(_ref9) {
	      var a = _ref9.a;
	      var b = _ref9.b;

	      return a.dist(b) === 1 && b.hasSubscription('pick');
	    },
	    act: function act(_ref10) {
	      var a = _ref10.a;
	      var b = _ref10.b;

	      b.emit('pick', a);
	      return false;
	    }
	  },

	  'eat': {
	    name: (0, _text.text)({ cn: '吃', en: 'eat' }),
	    condition: function condition(_ref11) {
	      var a = _ref11.a;
	      var b = _ref11.b;
	      var targetX = _ref11.targetX;
	      var targetY = _ref11.targetY;

	      if (b.isOfType('item')) {
	        return a.dist({ targetX: targetX, targetY: targetY }) === 0 && b.hasSubscription('eat');
	      } else {
	        return a.dist({ targetX: targetX, targetY: targetY }) <= 1 && b.hasSubscription('eat');
	      }
	    },
	    act: function act(_ref12) {
	      var a = _ref12.a;
	      var b = _ref12.b;

	      GameManager.Event.addHistory(a.name + '吃掉了' + b.name);
	      b.emit('eat', a);
	      return false;
	    }
	  },

	  'gather': {
	    name: (0, _text.text)({ cn: '采集', en: 'gather' }),
	    condition: function condition(_ref13) {
	      var a = _ref13.a;
	      var b = _ref13.b;
	      var targetX = _ref13.targetX;
	      var targetY = _ref13.targetY;

	      return a.dist(b) <= 1 && b.canBeDone('gather');
	    },
	    act: function act(_ref14) {
	      var a = _ref14.a;
	      var b = _ref14.b;

	      b.emit('gather', a);
	    }
	  }

	  //'touch': { // TODO: touch all parts available
	  //  name: text({cn: '摸', en: 'touch'})
	  //  condition: function() { return false }
	  //  act: function() {}
	  //},

	  //'lock': {
	  //  name: text({cn: '上锁'})
	  //}
	};

	exports.default = actions;

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Items = {
	  'potion': {
	    name: '草药',
	    description: '非常普通的草药，可以恢复 10 点 hp。',
	    price: 50,
	    consumable: true,
	    weight: 1,
	    subscriptions: {
	      'eat': function eat(a) {
	        console.log(a, 'eat potion');
	        a.changeStat('currentHP', 10);
	      }
	    }
	  },

	  'rat-meat': {
	    name: '老鼠肉',
	    description: '一片老鼠肉，非常的小。',
	    price: 25,
	    consumable: true,
	    weight: 2,
	    subscriptions: {
	      'eat': function eat(a, b) {
	        a.changeStat('currentEP', 5);
	        a.addState('illness', { probability: 1 });
	      }
	    }
	  },

	  'rotten-meat': {
	    name: '腐肉',
	    description: '腐烂的肉，散发着恶臭。必须得捏住鼻子才可以拿的了。',
	    price: 5,
	    consumable: true,
	    weight: 1,
	    subscriptions: {
	      'eat': function eat(a, b) {
	        a.addState('illness', { probability: 0.5 });
	      }
	    }
	  }
	};

	exports.default = Items;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _type = __webpack_require__(33);

	var _type2 = _interopRequireDefault(_type);

	var _skill = __webpack_require__(40);

	var _skill2 = _interopRequireDefault(_skill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	var Skills = {
	  'normal-attack': {
	    name: '普通攻击',
	    description: '非常普通的攻击方式，所以也经常被人们成为 普通攻击！',
	    scope: _type2.default.ScopeTypes.OneEnemy,
	    passive: false, // it is not a passive skill
	    condition: function condition(_ref) {
	      var a = _ref.a;
	      var b = _ref.b;

	      return a.dist(b) === 1 && a.getStat('ep') > 0;
	    },
	    act: function act(_ref2) {
	      var a = _ref2.a;
	      var b = _ref2.b;

	      a.changeStat('currentEP', -1);
	      GameManager.Event.addHistory(a.name + '向' + b.name + '发起了攻击');
	      if (Math.random() < a.getStat('hit')) {
	        var damage = b.receivePhysicalDamage(a.getStat('atk'), { critical: a.getStat('critical'), variance: 0.1 });
	        GameManager.Event.addHistory(b.name + '受到了' + Math.floor(damage) + '点物理伤害');
	      } else {
	        GameManager.Event.addHistory(a.name + ' 没有击中 ' + b.name);
	      }
	      return true; // end of turn
	    }
	  }
	};

	exports.default = Skills;

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var npcs = {
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
	      hidden: true // this shouldn't be displayed in inventory panel
	    }],
	    attitude: 5,
	    // personalities: ['gluttony'],
	    skills: [{ id: 'normal-attack',
	      condition: function condition() {
	        return !a.hasState('flee');
	      },
	      priority: 5 } /*,
	                    { id: 'flee',
	                    condition: function(a){
	                    return a.getStat('hp') <= 10
	                    },
	                    priority: 6}
	                    */
	    ],
	    states: ['hostile'],
	    subscriptions: {
	      gather: function gather(a) {
	        // TODO
	        console.log('采集老鼠');
	      },
	      $gather: function $gather() {
	        return this.hasState('knockout'); // can only be gathered when 'dead'
	      }
	    },
	    getDisplay: function getDisplay() {
	      if (this.hasState('knockout')) {
	        return { type: 'corpse', color: '#8f1a3a' };
	      }
	      return { type: 'rat', color: '#8f1a3a' };
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
	      currentHP: 20
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
	    getDisplay: function getDisplay() {
	      return { type: 'player' };
	    }
	  }
	};

	exports.default = npcs;

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = {
	  map: '\n....................................................................................................\n....................................................................................................\n........................................###+++###...................................................\n....................................#####.......#####...............................................\n.............................#######.................#######........................................\n.....................########...............................########................................\n..................####.............................................####.............................\n.................##..................................................##.............................\n................##......................W..................2..........##............................\n...............##......................................................##...........................\n..............##.....................................W..................##..........................\n.............##..........................................................##.........................\n.............##..........................................................##.........................\n.............##..........................................................##.........................\n.............##.............................@............................##.........................\n..............##........................................................##..........................\n...............##......................................................##...........................\n................##.............1......................................##............................\n.................##..................................................##.............................\n..................##................................................##..............................\n...................##..............................................##...............................\n....................##............................................##................................\n.....................###........................................###.................................\n.......................###....................................###...................................\n.........................####..............................####.....................................\n............................####........................####........................................\n...............................####..................####...........................................\n..................................#####..........#####..............................................\n......................................############..................................................\n....................................................................................................\n....................................................................................................\n....................................................................................................\n',
	  id: 'arena',
	  name: '罗塞斯竞技场',
	  sight: 12,
	  light: [50, 50, 50],
	  tiles: {
	    '.': {
	      type: 'mud-ground'
	    },
	    '#': {
	      type: 'mud-wall'
	    },
	    '+': {
	      type: 'wooden-door'
	    },
	    '@': {
	      id: 'spawn-point',
	      below: [{ type: 'mud-ground' }]
	    },
	    '1': {
	      id: 'portal-1',
	      below: [{ type: 'mud-ground' }]
	    },
	    '2': {
	      id: 'portal-2',
	      below: [{ type: 'mud-ground' }]
	    }
	  },
	  events: {
	    '#portal-1': [{
	      display: { type: 'portal' },
	      trigger: 'ActionButton',
	      contents: function contents() {
	        GameManager.Event.showText({ c: '你好是否要使用 传送门 呢？' });
	        GameManager.Event.teleportPlayer('#portal-2');
	      }
	    }],
	    '#portal-2': [{
	      display: { type: 'portal' },
	      trigger: 'ActionButton',
	      contents: function contents() {
	        GameManager.Event.showText({ c: '你好是否要使用 传送门 呢？' });
	        GameManager.Event.teleportPlayer('#portal-1');
	      }
	    }]
	  }
	};

	exports.default = data;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _gameobject = __webpack_require__(9);

	var _gameobject2 = _interopRequireDefault(_gameobject);

	var _npc = __webpack_require__(8);

	var _npc2 = _interopRequireDefault(_npc);

	var _text = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Door Example
	 */

	var Door = function (_GameObject) {
	  _inherits(Door, _GameObject);

	  function Door() {
	    var option = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Door);

	    // it is a door

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Door).call(this, {}));

	    _this.closed = option.closed || false;
	    _this.doorType = option.doorType || 'wooden-door';

	    _this.on('open', _this.openDoor.bind(_this));
	    _this.on('close', _this.closeDoor.bind(_this));
	    return _this;
	  }

	  _createClass(Door, [{
	    key: 'openDoor',
	    value: function openDoor() {
	      this.closed = false;
	      GameManager.Event.addHistory('你打开了门。');
	    }
	  }, {
	    key: 'closeDoor',
	    value: function closeDoor() {
	      this.closed = true;
	      GameManager.Event.addHistory('你关上了门。');
	    }
	  }, {
	    key: 'getDisplay',
	    value: function getDisplay() {
	      if (this.closed) {
	        return { type: this.doorType + '-closed' };
	      } else {
	        return { type: this.doorType + '-open' };
	      }
	    }
	  }, {
	    key: 'runEvent',
	    value: function runEvent(eventTrigger) {
	      if (this.closed && eventTrigger === 'ActionButton') {
	        this.openDoor();
	      }
	    }
	  }]);

	  return Door;
	}(_gameobject2.default);

	var data = {
	  map: '\n .......................TTTTT\n........................TTTT\n...........=======.....TTTTT\n....."=============.......TT\n...."T=..\'...========..""...\n....TT=.####.T"=====..\'\'\'\'..\n....===.#..#.N..===....."...\n....===.#+g#.4..=T..^...r...\n....===.2...@...+...........\n....===="..."...=....r......\n.....====.\'"""..=...........\n.....===^..."T^.==.....r....\n......=3.....tt.=====.......\n......=================\'====\n...........========TT.......\n....."""......===TTTTTT.....\n....""""""..........TTT.T...\n...""""""""""...........T...\n....."""....................\n',
	  id: 'test-map',
	  name: '实验地图',
	  sight: +6,
	  tiles: {
	    '.': { type: 'mud-ground' },
	    '#': { type: 'mud-wall' },
	    'g': { type: 'glass-window', below: [{ type: 'mud-ground' }] },
	    '^': { class: 'torch', below: [{ type: 'mud-ground' }] },
	    '=': { type: 'water' },
	    'T': { type: 'tree', below: [{ type: 'mud-ground' }] },
	    't': { type: 'small-tree', below: [{ type: 'mud-ground' }] },
	    '\'': { type: 'grass', below: [{ type: 'mud-ground' }] },
	    '"': { type: 'bush', below: [{ type: 'mud-ground' }] },
	    '2': { type: 'torch', power: 0.2, range: 4, light: '#f2582f', below: [{ type: 'mud-ground' }] },
	    '3': {
	      id: 'portal1',
	      below: [{ type: 'mud-ground' }]
	    },
	    '4': {
	      id: 'portal2',
	      below: [{ type: 'mud-ground' }]
	    },
	    '@': {
	      id: 'spawn-point',
	      below: [{ type: 'mud-ground' }]
	    },
	    'N': {
	      id: 'npc',
	      below: [{ type: 'mud-ground' }]
	    },
	    '+': {
	      class: 'door',
	      below: [{ type: 'mud-ground' }]
	    },
	    'r': {
	      class: 'rat',
	      below: [{ type: 'mud-ground' }]
	    }
	  },
	  events: {
	    '#npc': function npc() {
	      return new _gameobject2.default({
	        name: '希尔薇',
	        init: function init() {
	          var _this2 = this;

	          this.talkTime = 0;
	          this.on('touch-head', function (a) {
	            GameManager.Event.addHistory('\n' + a.name + ' 温柔的爱抚了 ' + _this2.name + ' 的头。\n' + _this2.name + ' 的脸红润了。\n              ');
	          });
	        },
	        getDisplay: function getDisplay() {
	          return { type: 'npc' };
	        },
	        runEvent: function runEvent(eventTrigger) {
	          if (eventTrigger === 'ActionButton') {
	            if (this.talkTime === 0) {
	              GameManager.Event.showText('呵呵，要不要来爽一爽啊？');
	              this.talkTime += 1;
	            } else {
	              GameManager.Event.showText('啊啊啊啊好爽 ' + this.talkTime);
	              this.talkTime += 1;
	            }
	          }
	        },
	        act: function act() {
	          // console.log(this.name + ' 行动了。')
	        },
	        getSpeed: function getSpeed() {
	          return 10;
	        }
	      });
	    },
	    '.torch': function torch() {
	      return new _gameobject2.default({
	        getDisplay: function getDisplay() {
	          return { type: 'torch' };
	        },
	        runEvent: function runEvent(eventTrigger) {
	          if (eventTrigger === 'ActionButton') {
	            GameManager.Event.showText((0, _text.text)({ cn: '这是一个燃烧的火炬' }), (0, _text.text)({ cn: '它闪耀着炙热的光芒' }));
	          }
	        }
	      });
	    },
	    '#portal1': function portal1() {
	      return new _gameobject2.default({
	        getDisplay: function getDisplay() {
	          return { type: 'portal' };
	        },
	        runEvent: function runEvent(eventTrigger) {
	          if (eventTrigger === 'PlayerAbove') {
	            GameManager.Event.showOptions((0, _text.text)({ cn: '这是传送门 1' }), ['使用传送门', '不使用传送门']).then(function (option) {
	              if (option === 0) {
	                GameManager.Event.teleportPlayer('test-map', 'portal2');
	                GameManager.Event.addHistory('你被传送到了 Portal 2');
	              }
	            });
	          }
	        }
	      });
	    },
	    '#portal2': function portal2() {
	      return new _gameobject2.default({
	        getDisplay: function getDisplay() {
	          return { type: 'portal' };
	        },
	        runEvent: function runEvent(eventTrigger) {
	          if (eventTrigger === 'PlayerAbove') {
	            GameManager.Event.showOptions((0, _text.text)({ cn: '这是传送门 2' }), ['使用传送门', '不使用传送门']).then(function (option) {
	              if (option === 0) {
	                GameManager.Event.teleportPlayer('test-map', 'portal1');
	                GameManager.Event.addHistory('你被传送到了 Portal 1');
	              }
	            });
	          }
	        }
	      });
	    },
	    '.door': function door() {
	      return new Door({ closed: true });
	    },
	    '.rat': function rat() {
	      return new _npc2.default(GameManager.Database.getNPC('furious-rat'));
	    }
	  }
	};

	exports.default = data;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _gameobject = __webpack_require__(9);

	var _gameobject2 = _interopRequireDefault(_gameobject);

	var _npc = __webpack_require__(8);

	var _npc2 = _interopRequireDefault(_npc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var data = {
	  map: '\n#######################################\n#..........1#..........#..............#\n#.......r...#......c...g..............#\n#...........#..........#..............#\n#.....@.....34.........#..............#\n#...........#......5...#..............#\n#...........#..........g..............#\n#2..........#..........#..............#\n##################+#####..............#\n.......................#..............#\n',
	  id: 'tutorial',
	  tiles: {
	    '.': { type: 'marbel-floor' },
	    '#': { type: 'white-wall' },
	    'g': { type: 'glass-window', below: [{ type: 'marbel-floor' }] },
	    '@': {
	      id: 'spawn-point',
	      below: [{ type: 'marbel-floor' }]
	    },
	    '+': {
	      class: 'iron-door',
	      below: [{ type: 'marbel-floor' }]
	    },
	    '1': {
	      id: 'checkpoint-1',
	      below: [{ type: 'marbel-floor' }]
	    },
	    '2': {
	      id: 'checkpoint-2',
	      below: [{ type: 'marbel-floor' }]
	    },
	    '3': {
	      id: 'door1',
	      below: [{ type: 'marbel-floor' }]
	    },
	    '4': {
	      id: 'checkpoint-4',
	      below: [{ type: 'marbel-floor' }]
	    },
	    '5': {
	      id: 'checkpoint-5',
	      below: [{ type: 'marbel-floor' }]
	    },
	    'D': {
	      id: 'dropped-items-1',
	      below: [{ type: 'marbel-floor' }]
	    },
	    'c': {
	      id: 'corpse1',
	      below: [{ type: 'marbel-floor' }]
	    },
	    'r': {
	      class: 'furious-rat',
	      below: [{ type: 'marbel-floor' }]
	    }
	  },
	  events: {
	    '#spawn-point': function spawnPoint() {
	      return new _gameobject2.default({
	        runEvent: function runEvent() {
	          if (GameManager.Event.hasMissionStarted('tutorial')) {
	            return;
	          } else {
	            GameManager.Event.startMission('tutorial');
	            GameManager.Event.showText('\n【Game Master】\n看这里～～\n欢迎进入使用 AWA引擎 创建的世界。\n点击鼠标左键，或者 [enter] 键来继续。', '\n【Game Master】\n请使用 w, s, a, d 来上下左右移动。\n并移动你的鼠标来探索周围的环境。\n').then(function () {
	              GameManager.Event.setMissionVariable('tutorial', 'show-checkpoint-1', true);
	            });
	          }
	        }
	      });
	    },
	    '.iron-door': function ironDoor() {
	      return new _gameobject2.default({
	        init: function init() {
	          this.closed = true;
	        },
	        getDisplay: function getDisplay() {
	          if (this.closed) return { type: 'iron-door-closed' };else return { type: 'iron-door-open' };
	        }
	      });
	    },

	    '#checkpoint-1': function checkpoint1() {
	      return new _gameobject2.default({
	        getDisplay: function getDisplay() {
	          if (GameManager.Event.getMissionVariable('tutorial', 'show-checkpoint-1')) {
	            return { type: 'checkpoint' };
	          } else {
	            return null;
	          }
	        },
	        runEvent: function runEvent(eventTrigger) {
	          if (GameManager.Event.getMissionVariable('tutorial', 'show-checkpoint-1') && eventTrigger === 'PlayerAbove') {
	            GameManager.Event.addHistory('你发现了一个检查点');
	            GameManager.Event.showText('\n【Game Master】\n现在请尝试走到下一个 检查点。\n').then(function () {
	              GameManager.Event.setMissionVariable('tutorial', { 'show-checkpoint-1': false, 'show-checkpoint-2': true });
	            });
	          }
	        }
	      });
	    },

	    '#checkpoint-2': function checkpoint2() {
	      return new _gameobject2.default({
	        getDisplay: function getDisplay() {
	          if (GameManager.Event.getMissionVariable('tutorial', 'show-checkpoint-2')) {
	            return { type: 'checkpoint' };
	          } else {
	            return null;
	          }
	        },
	        runEvent: function runEvent(eventTrigger) {
	          if (GameManager.Event.getMissionVariable('tutorial', 'show-checkpoint-2') && eventTrigger === 'PlayerAbove') {
	            GameManager.Event.addHistory('你发现了另一个检查点');
	            GameManager.Event.showText('\n    【Game Master】\n    很好，你已经知道以该怎么移动了。\n    ', '\n    【Game Master】\n    门已经为你打开了，你现在可以前往下一个房间了。\n    ').then(function () {
	              GameManager.Event.setMissionVariable('tutorial', { 'show-checkpoint-2': false, 'open-door1': true });
	            });
	          }
	        }
	      });
	    },
	    '#door1': function door1() {
	      return new _gameobject2.default({
	        name: '一扇厚实的铁门',
	        getDisplay: function getDisplay() {
	          if (!GameManager.Event.getMissionVariable('tutorial', 'open-door1')) return { type: 'iron-door-closed' };else return { type: 'iron-door-open' };
	        },
	        runEvent: function runEvent(eventTrigger) {
	          if (eventTrigger === 'ActionButton' && !GameManager.Event.getMissionVariable('tutorial', 'open-door1')) {
	            GameManager.Event.addHistory('你尝试打开这扇铁门，但是失败了。');
	          }
	        },

	        subscriptions: {
	          'close': function close(a) {
	            GameManager.Event.addHistory(a.name + '无法关上这扇铁门');
	          }
	        }
	      });
	    },
	    '#checkpoint-4': function checkpoint4() {
	      return new _gameobject2.default({
	        runEvent: function runEvent(eventTrigger) {
	          if (GameManager.Event.getMissionVariable('tutorial', 'open-door1') && eventTrigger === 'PlayerAbove') {
	            GameManager.Event.addHistory('你身后的铁门被关上了');
	            GameManager.Event.setMissionVariable('tutorial', 'open-door1', false);
	          }
	        }
	      });
	    },
	    '#dropped-items-1': function droppedItems1() {
	      return new _gameobject2.default({
	        name: '可疑的掉落物',
	        getDisplay: function getDisplay() {
	          return { type: 'dropped-items' };
	        },

	        subscriptions: {
	          'pick': function pick(a) {
	            console.log('pick', this);
	          }
	        }
	      });
	    },
	    '#corpse1': function corpse1() {
	      return new _gameobject2.default({
	        name: '死亡僵尸的尸体',
	        init: function init() {
	          this.num = 2;
	        },
	        getDisplay: function getDisplay() {
	          return { type: 'corpse', color: '#8e0000' };
	        },
	        runEvent: function runEvent(eventTrigger) {
	          if (eventTrigger === 'PlayerAbove') {
	            GameManager.Event.addHistory('你站在了尸体上，但是什么也没有发生。请尝试离开尸体，然后 鼠标右键 尸体');
	          }
	        },

	        subscriptions: {
	          'gather': function gather(a) {
	            if (this.num > 0) {
	              a.addItem('rotten-meat', 1);
	              this.num -= 1;
	              GameManager.Event.addHistory('你剥下了僵尸的肉。获得了 腐肉 x 1');
	            } else {
	              GameManager.Event.addHistory('你已经把僵尸的尸体扒了个精光，僵尸只剩下雪白的骨头了。你真是个变态。');
	              GameManager.Event.setMissionVariable('tutorial', { 'show-checkpoint-5': true });
	            }
	          }
	        }
	      });
	    },
	    '#checkpoint-5': function checkpoint5() {
	      return new _gameobject2.default({
	        getDisplay: function getDisplay() {
	          if (GameManager.Event.getMissionVariable('tutorial', 'show-checkpoint-5')) return { type: 'checkpoint' };
	        },
	        runEvent: function runEvent(eventTrigger) {
	          if (GameManager.Event.getMissionVariable('tutorial', 'show-checkpoint-5') && eventTrigger === 'PlayerAbove') {
	            GameManager.Event.addHistory('按键盘 [e] 键打开菜单，选中 道具。选中 腐肉 然后按 [1] 键。', '接着 鼠标右键 你自己，看看会得到什么？');
	          }
	        }
	      });
	    },
	    '.furious-rat': function furiousRat() {
	      return new _npc2.default(GameManager.Database.getNPC('furious-rat'));
	    }
	  }
	};

	// For Debug
	GameManager.Event.startMission('tutorial');
	GameManager.Event.setMissionVariable('tutorial', {
	  'open-door1': true
	});

	exports.default = data;

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	function Boot() {}

	Boot.prototype = {
	  preload: function preload() {
	    this.load.image('preloader', '/assets/preloader.gif');
	  },
	  create: function create() {
	    // If this is not a desktop (so it's a mobile device)
	    if (this.game.device.desktop == false) {
	      // Set the scaling mode to SHOW_ALL to show all the game
	      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

	      // Set a minimum and maximum size for the game
	      // Here the minimum is half the game size
	      // And the maximum is the original game size
	      this.game.scale.setMinMax(this.game.width / 2, this.game.height / 2, this.game.width, this.game.height);
	    }

	    // Center the game horizontally and vertically
	    this.game.scale.pageAlignHorizontally = true;
	    this.game.scale.pageAlignVertically = true;

	    this.game.scale.minWidth = 640;
	    this.game.scale.minHeight = 480;
	    this.game.scale.maxWidth = 1280;
	    this.game.scale.maxHeight = 960;
	    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    this.game.stage.smoothed = false;

	    this.game.input.maxPointers = 1;
	    this.game.state.start('preload');
	  }
	};

	module.exports = Boot;

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	function Preload() {
	  this.asset = null;
	  this.ready = true; // TODO: set to false
	}

	Preload.prototype = {
	  preload: function preload() {
	    this.asset = this.game.add.sprite(this.width / 2, this.height / 2, 'preloader');
	    this.asset.anchor.setTo(0.5, 0.5);

	    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
	    this.load.setPreloadSprite(this.asset);

	    // TODO: load images and audios
	    // this.load.image(...)
	    this.load.image('transparent_texture_for_text', '/assets/transparent_texture_for_text.png');
	    this.load.spritesheet('player', '/assets/beings/player.png', 48, 48, 32);

	    // items
	    this.load.image('iron_pickaxe', '/assets/items/iron_pickaxe.png');

	    // items weapon
	    this.load.image('crystalys', '/assets/items/crystalys.png');
	    this.load.image('ak47', '/assets/items/ak47.png');

	    // gui
	    this.load.image('mine_mode', '/assets/gui/mine_mode.png');
	    this.load.spritesheet('gui', '/assets/gui/gui.png', 48, 48, 32);

	    // terrain
	    this.load.spritesheet('terrain', '/assets/terrains/terrain.png', 24, 24, 16);
	    this.load.spritesheet('terrain_block', '/assets/terrains/terrain_block.png', 24, 24, 16);
	  },
	  create: function create() {
	    this.asset.cropEnabled = false;
	  },
	  update: function update() {
	    if (!!this.ready) {
	      this.game.state.start('play');
	    }
	  },
	  onLoadComplete: function onLoadComplete() {
	    console.log('finish preload');
	    this.ready = true;
	  }
	};

	module.exports = Preload;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Player = __webpack_require__(52),
	    ItemSlotsBar = __webpack_require__(53);

	function Play() {
	  this.player = null;
	}

	Play.prototype = {
	  create: function create() {
	    console.log('play');
	    this.game.world.setBounds(0, 0, 128 * 96, 128 * 96);
	    this.game.physics.startSystem(Phaser.Physics.P2JS);

	    for (var i = 0; i < 30; i++) {
	      for (var j = 0; j < 30; j++) {
	        var _t = this.game.add.sprite(i * 64, j * 64, 'terrain', 1);
	        _t.width = 64;
	        _t.height = 64;
	      }
	    }

	    var t = this.game.add.sprite(64, 64, 'terrain_block', 0);
	    t.width = 64;
	    t.height = 64;

	    t = this.game.add.sprite(64, 64 * 2, 'terrain_block', 8);
	    t.width = 64;
	    t.height = 64;

	    this.player = new Player(this.game, 480, 480);
	    this.game.add.existing(this.player);

	    this.itemSlotsBar = new ItemSlotsBar(this.game);

	    window.player = this.player;
	    this.game.camera.follow(this.player);
	  },
	  update: function update() {},
	  render: function render() {
	    game.debug.cameraInfo(this.game.camera, 32, 32);
	    game.debug.spriteCoords(this.player, 32, 500);
	  }
	};

	module.exports = Play;

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	var Player = function Player(game, x, y) {
	  var key = arguments.length <= 3 || arguments[3] === undefined ? 'transparent_texture_for_text' : arguments[3];
	  var frame = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];

	  Phaser.Sprite.call(this, game, x, y, 'player', frame);
	  //this.anchor.setTo(0.5, 0.5)
	  this.width = 96;
	  this.height = 96;
	  this.scale.setTo(2.0);

	  this.game.physics.p2.enable(this);
	  this.inputEnabled = true; // for hover
	  this.body.collideWorldBounds = true;

	  /*
	  let text = game.add.text(0, 0, '@', {font: '48px monospace', fill: '#fff', backgroundColor: '#3682a7'})
	  text.width = 48
	  text.height = 48
	  text.anchor.setTo(0.5, 0.5)
	  this.addChild(text) // TODO: delete this if has key.
	  // window.text = text
	  */

	  /*
	  this.arrow = game.add.text(0, 0, '^', {font: '48px monospace', fill: '#e87171'})
	  this.arrow.width = 48
	  this.arrow.height = 48
	  this.arrow.pivot.y = 24
	  this.arrow.anchor.setTo(0.5, 0.5)
	  this.addChild(this.arrow)
	  window.arrow = this.arrow
	  */
	  this.animations.add('idle', [0, 1, 2, 3], 4, true);
	  this.animations.add('walk', [8, 9, 10, 11, 12], 8, true);
	  this.animations.add('run', [8, 9, 10, 11, 12], 12, true);
	  this.animations.play('run');

	  this.rightHandItem = game.add.sprite(4, 12, 'ak47');
	  this.rightHandItem.width = 24;
	  this.rightHandItem.height = 24;
	  this.rightHandItem.pivot.x = 0;
	  this.rightHandItem.pivot.y = 0;
	  this.rightHandItem.anchor.setTo(0, 1);
	  this.addChild(this.rightHandItem);
	  window.rightHandItem = this.rightHandItem;
	  //this.game.add.tween(this.rightHandItem).to({y:8}, 200, Phaser.Easing.Linear.NONE, true, 0, 1000, true)
	  // player.scale.x *= -1 // flap

	  this.speed = 200;
	  this.keyW = game.input.keyboard.addKey(Phaser.KeyCode.W);
	  this.keyS = game.input.keyboard.addKey(Phaser.KeyCode.S);
	  this.keyA = game.input.keyboard.addKey(Phaser.KeyCode.A);
	  this.keyD = game.input.keyboard.addKey(Phaser.KeyCode.D);
	  this.keySHIFT = game.input.keyboard.addKey(Phaser.KeyCode.SHIFT);

	  // this.cursors = game.input.keyboard.createCursorKeys()
	  // this.game.input.keyboard.onDownCallback = this.onKeyDown.bind(this)
	  this.events.onInputOver.add(this.hover, this);

	  this.faceLeft = false;
	};

	Player.prototype = Object.create(Phaser.Sprite.prototype);
	Player.prototype.constructor = Player;

	Player.prototype.update = function () {
	  var moved = false;
	  var running = false;
	  var left = false;

	  this.body.setZeroVelocity();

	  if (this.keySHIFT.isDown) {
	    running = true;
	  }

	  if (this.keyW.isDown) {
	    this.body.moveUp(running ? this.speed * 1.5 : this.speed);
	    moved = true;
	  } else if (this.keyS.isDown) {
	    this.body.moveDown(running ? this.speed * 1.5 : this.speed);
	    moved = true;
	  }

	  if (this.keyA.isDown) {
	    this.body.moveLeft(running ? this.speed * 1.5 : this.speed);
	    moved = true;
	  } else if (this.keyD.isDown) {
	    this.body.moveRight(running ? this.speed * 1.5 : this.speed);
	    moved = true;
	  }

	  // Face direction follows mouse pointer
	  var mouseX = this.game.input.mousePointer.worldX;
	  if (mouseX < this.x) {
	    this.faceLeft = true;
	    this.scale.x = -Math.abs(this.scale.x);
	  } else {
	    this.faceLeft = false;
	    this.scale.x = Math.abs(this.scale.x);
	  }

	  if (moved == true) {
	    if (!running) {
	      this.animations.play('walk');
	    } else {
	      this.animations.play('run');
	    }
	  } else {
	    this.animations.play('idle');
	  }

	  if (game.input.activePointer.leftButton.isDown) {
	    if (!this.tween) {
	      this.tween = this.game.add.tween(this.rightHandItem).to({ rotation: this.rightHandItem.rotation + Math.PI / 4 }, 250, Phaser.Easing.Linear.NONE, true, 0, 600, true);
	    }
	  } else {
	    if (this.tween) {
	      this.tween.stop();
	      this.tween = null;
	    }
	  }

	  // face
	  var targetAngle = this.game.math.angleBetween(this.x, this.y, this.game.input.activePointer.worldX, this.game.input.activePointer.worldY);
	  if (this.faceLeft) {
	    this.rightHandItem.rotation = -targetAngle + Math.PI / 2 / 2 + Math.PI;
	  } else {
	    this.rightHandItem.rotation = targetAngle + Math.PI / 2 / 2;
	  }
	};

	Player.prototype.hover = function () {
	  console.log('hover');
	};

	module.exports = Player;

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	var ItemSlotsBar = function ItemSlotsBar(game) {
	  Phaser.Group.call(this, game);

	  this.mode = this.create(48, game.height - 60 * 2, 'mine_mode');
	  this.mode.anchor.setTo(0.5, 0.5);
	  this.mode.width = 48;
	  this.mode.height = 48;
	  this.mode.fixedToCamera = true;

	  this.selectedSlotOffset = 0;

	  this.slots = [];
	  for (var i = 0; i < 8; i++) {
	    var slot = this.create(60 + 60 * (i + 1), game.height - 48, 'gui', 0);
	    slot.anchor.setTo(0.5, 0.5);
	    slot.width = 48;
	    slot.height = 48;
	    slot.inputEnabled = true;
	    slot.fixedToCamera = true;

	    slot.slotOffset = i;

	    if (i === this.selectedSlotOffset) {
	      slot.loadTexture('gui', 1);
	    }

	    slot.events.onInputDown.add(this.clickSlot, this);

	    this.slots.push(slot);
	  }

	  this.keyNum1 = game.input.keyboard.addKey(Phaser.KeyCode.ONE);
	  this.keyNum2 = game.input.keyboard.addKey(Phaser.KeyCode.TWO);
	  this.keyNum3 = game.input.keyboard.addKey(Phaser.KeyCode.THREE);
	  this.keyNum4 = game.input.keyboard.addKey(Phaser.KeyCode.FOUR);
	  this.keyNum5 = game.input.keyboard.addKey(Phaser.KeyCode.FIVE);
	  this.keyNum6 = game.input.keyboard.addKey(Phaser.KeyCode.SIX);
	  this.keyNum7 = game.input.keyboard.addKey(Phaser.KeyCode.SEVEN);
	  this.keyNum8 = game.input.keyboard.addKey(Phaser.KeyCode.EIGHT);
	};

	ItemSlotsBar.prototype = Object.create(Phaser.Group.prototype);
	ItemSlotsBar.prototype.constructor = ItemSlotsBar;

	ItemSlotsBar.prototype.update = function () {
	  if (this.keyNum1.isDown) {
	    this.setSelectedSlot(0);
	  } else if (this.keyNum2.isDown) {
	    this.setSelectedSlot(1);
	  } else if (this.keyNum3.isDown) {
	    this.setSelectedSlot(2);
	  } else if (this.keyNum4.isDown) {
	    this.setSelectedSlot(3);
	  } else if (this.keyNum5.isDown) {
	    this.setSelectedSlot(4);
	  } else if (this.keyNum6.isDown) {
	    this.setSelectedSlot(5);
	  } else if (this.keyNum7.isDown) {
	    this.setSelectedSlot(6);
	  } else if (this.keyNum8.isDown) {
	    this.setSelectedSlot(7);
	  }
	};

	ItemSlotsBar.prototype.setSelectedSlot = function (offset) {
	  if (this.selectedSlotOffset === offset) return;
	  this.slots[this.selectedSlotOffset].loadTexture('gui', 0);

	  this.selectedSlotOffset = offset;
	  this.slots[this.selectedSlotOffset].loadTexture('gui', 1);
	};

	ItemSlotsBar.prototype.clickSlot = function (slot) {
	  this.setSelectedSlot(slot.slotOffset);
	};

	module.exports = ItemSlotsBar;

/***/ }
/******/ ])
});
;