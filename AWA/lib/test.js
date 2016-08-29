'use strict'

class Player {
  constructor(x, y) {
    this._x = x
    this._y = y
    this._draw()
  }

  _draw() {
    Game.display.draw(this._x, this._y, /*'＠'*/ '@', '#ff0')
  }

  act() {
    Game.engine.lock()

    /* wait for user input; do stuff when user hits a key */
    window.addEventListener("keydown", this);
  }

  getX() {
    return this._x
  }

  getY() {
    return this._y
  }

  handleEvent(e) {
    /* process user input */
    console.log (e.which)

    let code = e.which

    if (code === 13 || code === 32) {
      this._checkBox()
      return
    }

    let keyMap = {}
    /**
    keyMap[38] = 0
    keyMap[33] = 1
    keyMap[39] = 2
    keyMap[34] = 3
    keyMap[40] = 4
    keyMap[35] = 5
    keyMap[37] = 6
    keyMap[36] = 7
    */

    /**
     *  q   w   e
     *  a       d
     *  z   x   c
     *
     */
    keyMap[87] = 0 // w
    keyMap[69] = 1 // e
    keyMap[68] = 2 // d
    keyMap[67] = 3 // c
    keyMap[88] = 4 // x
    keyMap[90] = 5 // z
    keyMap[65] = 6 // a
    keyMap[81] = 7 // q

    if (!(code in keyMap)) { return; }

    let diff = ROT.DIRS[8][keyMap[code]]
    let newX = this._x + diff[0]
    let newY = this._y + diff[1]

    let newKey = newX + "," + newY
    if (!(newKey in Game.map)) { return; } /* cannot move in this direction */



    Game.display.draw(this._x, this._y, Game.map[this._x+","+this._y])
    this._x = newX
    this._y = newY
    this._draw()
    window.removeEventListener("keydown", this)
    Game.engine.unlock()
  }

  _checkBox() {
    let key = this._x + "," + this._y
    if (Game.map[key] !== "*") {
        alert("There is no box here!")
    } else if (key === Game.ananas) {
        alert("Hooray! You found an ananas and won this game.")
        Game.engine.unlock()
        window.removeEventListener("keydown", this)
    } else {
        alert("This box is empty :-(")
    }
  }
}

class Rat {
  constructor(x, y) {
    this._x = x
    this._y = y
    this._draw()
  }

  _draw() {
    Game.display.draw(this._x, this._y, "R", "red");
  }

  act() {
    // do nothing
  }
}

let Game = {
  display: null,
  map: {},
  player: null,
  rat: null,
  engine: null,
  ananas: null,

  init: function() {
    ROT.DEFAULT_WIDTH = 45
    ROT.DEFAULT_HEIGHT = 30
    let fontSize = Math.floor(document.body.offsetHeight * 0.8 / 30)
    this.display = new ROT.Display({fontFamily:"droid sans mono, monospace", fontSize, spacing: 1})
    window.display = this.display
    document.getElementById('game-container').appendChild(this.display.getContainer())

    this._generateMap()

    let scheduler = new ROT.Scheduler.Simple()
    scheduler.add(this.player, true)
    scheduler.add(this.rat, true)
    this.engine = new ROT.Engine(scheduler)
    this.engine.start()
  },

  _generateMap: function() {
    let digger = new ROT.Map.Digger(40, 40)
    let freeCells = []

    let digCallback = function(x, y, value) {
        let key = x+","+y;
        this.map[key] = ".";

        // if (value) { return } /* do not store walls *
        if (value) {
          this.map[key] = '#'
        }

        freeCells.push(key)
    }
    digger.create(digCallback.bind(this))

    this._generateBoxes(freeCells)

    this._drawWholeMap()

    this.player = this._createBeing(Player, freeCells)
    this.rat = this._createBeing(Rat, freeCells)

    this._drawFOV()
  },

  _generateBoxes: function(freeCells) {
    for (let i = 0; i < 10; i++) {
        let index = Math.floor(ROT.RNG.getUniform() * freeCells.length)
        let key = freeCells.splice(index, 1)[0]
        this.map[key] = "*"

        if (!i) {
          this.ananas = key /* first box contains an ananas */
        }
    }
  },

  _drawWholeMap: function() {
    for (let key in this.map) {
      let parts = key.split(","),
          x = parseInt(parts[0]),
          y = parseInt(parts[1])
      if (this.map[key] === '.') {
        this.display.draw(x, y, this.map[key], '#31c77a')
      } else {
        this.display.draw(x, y, this.map[key], '#414141')
      }
    }
  },

  _createBeing: function(what, freeCells) {
    let index = Math.floor(ROT.RNG.getUniform() * freeCells.length),
        key = freeCells.splice(index, 1)[0],
        parts = key.split(","),
        x = parseInt(parts[0]),
        y = parseInt(parts[1])
    return new what(x, y)
  },

  _drawFOV: function() {
    let lightPasses = function(x, y) {
      let key = x + ',' + y
      if (key in this.map) {
        return this.map[key] === '.'
      }
      return false
    }

    let fov = new ROT.FOV.PreciseShadowcasting(lightPasses.bind(this))

    /* output callback */
    fov.compute(this.player.getX(), this.player.getY(), 20, (x, y, r, visibility)=> {
      console.log('enter here')
      var ch = (r ? this.map[x+','+y] : "@");
      var color = (this.map[x+","+y] ? "#aa0": "#660")
      this.display.draw(x, y, ch, "#fff", color)
    })
  }
}

window.addEventListener('resize', function() {
  console.log('resize')
  let fontSize = Math.floor(document.body.offsetHeight * 0.8 / 30)
  Game.display.setOptions({fontSize})
})
