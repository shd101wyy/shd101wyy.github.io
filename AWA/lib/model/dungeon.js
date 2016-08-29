import Player from './player'
class Dungeon {
  constructor({ dungeonWidth = 40,
                dungeonHeight = 25,
                boxNum = 10,
                options = {}
                /**
                roomWidth=null,  // [min, max]
                roomHeight = null, // [min, max]
                dugPercentage = null, // algorithm stops after this fraction of map area has been dug out; default = 0.2
                timeLimit = null // algorithm stops after this amount of milliseconds has passed
                **/
              }, gm) {
    this.gm = gm
    this.player = null

    this.map = new ROT.Map.Digger(dungeonWidth, dungeonHeight, options/*, {roomWidth, roomHeight, dugPercentage, timeLimit}*/)

    this.mapData = {}
    this.freeCells = []

    this.map.create(this.digCallback.bind(this))
    this.generateBoxes(boxNum)

    // console.log(this.map.getRooms())
  }

  digCallback(x, y, value) {
    let key = `${x},${y}`

    if (value) { // wall
      this.mapData[key] = {
        text: '#',
        description: '这是一面墙',
        canPass: false,
        color: '#636363',
        type: 'wall'
      }
    } else {
      this.mapData[key] = {
        text: '.',
        description: '迷宫的地面',
        canPass: true,
        color: '#078a62',
        type: 'floor'
      }

      this.freeCells.push(key)
    }
  }

  generateBoxes(boxNum) {
    let _freeCells = []
    for (let i = 0; i < boxNum; i++) {
      let index = Math.floor(ROT.RNG.getUniform() * this.freeCells.length)
      let key = this.freeCells.splice(index, 1)[0]
      _freeCells.push(key)
    }

    this.freeCells = _freeCells
  }

  draw() {
    if (!this.player) {
      throw 'Dungeon Error: Player has to be set first'
    }
    for (let key in this.mapData) {
      let parts = key.split(','),
          x = parseInt(parts[0]),
          y = parseInt(parts[1]),
          data = this.mapData[key]

      let realPos = this.gm.relativeToPlayerPos(x, y)
      let realX = realPos.x,
          realY = realPos.y

      if (realX < 0 || realX > this.gm.DISPLAY_WIDTH || realY < 0 || realY > this.gm.DISPLAY_HEIGHT) {
        continue // outside screen
      }

      if (data.type === 'wall' && this.needToBeHidden(x, y)) { // check nearby as floor
        continue
      }

      this.gm.display.draw(realX, realY, data.text, data.color, data.backgroundColor)
    }
  }

  needToBeHidden(x, y) {
    let dirs = [
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
      [-1, 0]
    ]

    for (let i = 0; i < dirs.length; i++) {
      let dir = dirs[i],
          key = `${x + dir[0]},${y + dir[1]}`,
          data = this.mapData[key]

      if (data && data.type === 'floor') {
        return false
      }
    }

    return true
  }

  setPlayer() {
    let index = Math.floor(ROT.RNG.getUniform() * this.freeCells.length),
        key = this.freeCells.splice(index, 1)[0],
        parts = key.split(","),
        x = parseInt(parts[0]),
        y = parseInt(parts[1])

    let player = new Player(x, y, this.gm)
    this.player = player
    return player
  }

  getDataAtPos(x, y) {
    return this.mapData[x+','+y]
  }
}

export default Dungeon
