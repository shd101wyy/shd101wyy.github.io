import GameObject from '../model/gameobject'
import NPC from '../model/npc'
import Player from '../model/player'
import Types from '../database/type'

let Map = {
  // $: GameManager
  maps: {},

  currentMapId: null,
  currentEvents: {},
  eventList: [],

  mapObjects: [], // 2d array. value = [1, 2, 3]. 3 在最高层
  objectToBeRendered: {}, // key='x,y'
  renderedTiles: {}, // key = 'x,y'
  tilesSeen: {},     // key = 'x,y'
  npcsInView: {},    // key = 'x,y'

  lightData: null,
  fovData: null,   // save visible coord 'x,y'
}

Map.loadMapData = function(mapData) {
  let id = mapData.id

  if (id in this.maps) {
    throw `Error Map.loadMapData: ID ${id} already exists`
  }

  let data = {}
  this.maps[id] = data

  data.name = mapData.name
  data.sight = mapData.sight || 0 // 视野修正值
  data.light = mapData.light || [50, 50, 50]
  data.tiles = mapData.tiles
  data.events = mapData.events || []
  data.map = mapData.map
}

Map.getMapDataById = function(mapId) {
  return this.maps[mapId]
}

Map.initEvents = function(events) {
  this.currentEvents = {}
  this.eventList = []

  for (let key in events) {
    let evs = events[key]
    let selectors = key.split(',')

    selectors.forEach((selector)=> {
      selector = selector.trim()

      if (selector in this.currentEvents) {
        throw `Error Map.initEvents: ${selector} already exists`
      }
      this.currentEvents[selector] = evs
    })
  }
}

// 左上角是 (0, 0)
// below: [1, 2, 3]  3 是最高的。
Map.initMapObjects = function(mapData) {
  this.mapObjects = []

  let setMapObject = (x, y, tile)=> {
    if (tile.below) {
      tile.below.forEach(tile => setMapObject(x, y, tile))
    }
    let obj = null
    if (tile.id || tile.class) {
      let selector = tile.id ? '#'+tile.id : '.' + tile.class
      obj = this.currentEvents[selector]
      if (!obj) {
        obj = new GameObject({})
      } else {
        obj = obj()
      }
      obj.setPosition(x, y)

      let event = {gameObject: obj}
      if (tile.id) { event.id = tile.id }
      else { event.class = tile.class }

      this.eventList.push(event) // save event to eventList
    } else if (tile.type) {
      obj = Object.assign({}, GameManager.Database.Tilesets[tile.type], tile)

      if (!this.mapObjects[y][x]) {
        this.mapObjects[y][x] = [obj]
      } else { // below
        this.mapObjects[y][x].push(obj)
      }
    } else {
      throw 'Error Map.initMapObjects: invalid tile: ', tile
    }
  }

  let map = mapData.map.split('\n').filter(x=>x.length>0)
  for (let y = 0; y < map.length; y++) {
    this.mapObjects.push([])
    for (let x = 0; x < map[y].length; x++) {
      let data = map[y][x]
      if (data === ' ') continue // escape ' '
      let tile = mapData.tiles[data]
      if (!tile) {
        throw 'Error Map.initMapObjects: undefined tile ' + data
      }
      setMapObject(x, y, tile)
    }
  }
}

Map.initPlayer = function(spawnPosId) {
  for (let i = 0; i < this.eventList.length; i++) {
    let obj = this.eventList[i]
    if (obj.id === spawnPosId) {
      let gameObject = obj.gameObject
      GameManager.player.setPosition(gameObject.x, gameObject.y)
    }
  }
}

Map.initScheduler = function() {
  let scheduler = new ROT.Scheduler.Speed()
  let player = GameManager.player

  scheduler.add(player, true)

  // add gameObjects
  this.eventList.forEach(obj => {
    let gameObject = obj.gameObject
    scheduler.add(gameObject, true)
  })

  GameManager.engine = new ROT.Engine(scheduler)
  GameManager.engine.start()
}

/**
 * [function description]
 * @param  {[Number]} x     [description]
 * @param  {[Number]} y     [description]
 * @param  {[Array]} tiles [description]
 */
Map.drawTilesAtPos = function(x, y, tiles) {
  let ambientLight = [100, 100, 100] //[100, 100, 100]
  // TODO: 这个函数中，设定光线影响。
  let player = GameManager.player,
      realX = x + player.relativeX,
      realY = y + player.relativeY,
      coordKey = x+','+y

  let backgroundColor = null
  for (let i = tiles.length - 1; i >= 0; i--) {
    if (tiles[i].background) {
      backgroundColor = tiles[i].background
      break
    }
  }

  if (!backgroundColor) {
    throw 'Error Map.drawTilesAtPos: backgroundColor not found'
  }

  let light = ambientLight
  if (this.lightData[coordKey]) { // light
    light = ROT.Color.add(light, this.lightData[x+','+y])
  }

  for (let i = 0; i < tiles.length; i++) {
    let tile = tiles[i]
    let finalBackgroundColor = ROT.Color.multiply(ROT.Color.fromString(backgroundColor), light)
    let finalColor = ROT.Color.multiply(ROT.Color.fromString(tile.color), light)

    if (!this.fovData[coordKey]) { // not visible
      if (!this.tilesSeen[coordKey]) continue // not discovered yet
      finalBackgroundColor = ROT.Color.multiply(finalBackgroundColor, ROT.Color.fromString('#1b1b1b'))
      finalColor = ROT.Color.multiply(finalColor, ROT.Color.fromString('#1b1b1b'))
    } else {
      this.tilesSeen[coordKey] = true
      this.renderedTiles[coordKey] = tiles
      if (tile.gameObject && tile.gameObject instanceof NPC) {
        this.npcsInView[coordKey] = tile.gameObject
      }
    }

    this.$.display.draw(realX, realY, tile.text, ROT.Color.toRGB(finalColor), ROT.Color.toRGB(finalBackgroundColor))
  }
}

Map.setLight = function(x, y, lightColor='#f2fa57', power=0.1, range=5) {
  let player = GameManager.player,
      playerX = player.x,
      playerY = player.y
  let inBush = this.objectToBeRendered[playerX + ',' + playerY].filter(tile=>tile.type==='bush').length // if in bush, then bush not blocklight(ignor bush)

  let lightPasses = (x, y)=> {
    let tiles = this.objectToBeRendered[x+','+y]
    if (!tiles) return false
    if (inBush) {
      return !tiles.filter(tile => tile.blockLight && tile.type !== 'bush').length
    }
    return !tiles.filter(tile => tile.blockLight).length
  }
  let fov = new ROT.FOV.PreciseShadowcasting(lightPasses, {topology:8})

  // prepare a lighting algorithm
  let reflectivity = (x, y)=> {
    let tiles = this.objectToBeRendered[x+','+y]
    if (!tiles) return 0
    let flag = !tiles.filter(tile => tile.blockLight).length
    return flag ? power : 0
  }
  let lighting = new ROT.Lighting(reflectivity, {range:range, passes:2})
  lighting.setFOV(fov)
  lighting.setLight(x, y, ROT.Color.fromString(lightColor))

  let lightingCallback = (x, y, color)=> {
    let key = x+','+y
    if (this.lightData[key]) {
      this.lightData[key] = ROT.Color.add(color, this.lightData[key]) //ROT.Color.interpolate(color, this.lightData[key], 0.5)
    } else {
      this.lightData[key] = color
    }
  }
  lighting.compute(lightingCallback)
}

Map.manageLights = function() {
  this.lightData = {}

  for (let key in this.objectToBeRendered) {
    let pos = key.split(','),
        x = parseInt(pos[0]),
        y = parseInt(pos[1]),
        tiles = this.objectToBeRendered[key]
    for (let i = tiles.length - 1; i>=0; i--) {
      let tile = tiles[i]
      if (tile.light) { // find light
        this.setLight(x, y, tile.light, tile.power, tile.range)
      }
    }
  }

  // player light
  let player = GameManager.player
  let daytime = true
  if (!daytime) {
    this.setLight(player.x, player.y, '#545353', 0.1, 4) // night
  } else {
    this.setLight(player.x, player.y, '#b1b1b1', 0.2, GameManager.DISPLAY_HEIGHT/2) // daytime
  }
}

Map.manageFOV = function() {
  let player = GameManager.player,
      playerX = player.x,
      playerY = player.y
  let inBush = this.objectToBeRendered[playerX + ',' + playerY].filter(tile=>tile.type==='bush').length // if in bush, then bush not blocklight(ignor bush)

  let lightPasses = (x, y)=> {
    let tiles = this.objectToBeRendered[x+','+y]
    if (!tiles) return false
    if (inBush) {
      return !tiles.filter(tile => tile.blockLight && tile.type !== 'bush').length
    }
    return !tiles.filter(tile => tile.blockLight).length
  }

  let fov = new ROT.FOV.PreciseShadowcasting(lightPasses)
  this.fovData = {}

  let callback = (x, y, r, visibility)=> {
    if (visibility !== 0) {
      this.fovData[x+','+y] = true
    }
  }

  // TODO: during the daytime, fovRadius should be the DISPLAY_WIDTH/2
  let daytimeFovRadius = GameManager.DISPLAY_WIDTH/2
  let daytime = true
  if (!daytime)
    fov.compute(player.x, player.y, player.getStat('fov'), callback)
  else
    fov.compute(player.x, player.y, daytimeFovRadius, callback)
}

Map.draw = function({isActionButton=false, targetPos={}, needToRunEvents=true}) {
  GameManager.display.clear()
  this.objectToBeRendered = {}
  this.renderedTiles = {}
  this.npcsInView = {}

  // get objects to be rendered
  let player = GameManager.player
  for (let dy = -GameManager.DISPLAY_HEIGHT/2; dy < GameManager.DISPLAY_HEIGHT/2; dy++) {
    let y = dy + player.y
    if (y < 0 || y >= this.mapObjects.length) continue

    for (let dx = -GameManager.DISPLAY_WIDTH/2; dx < GameManager.DISPLAY_WIDTH/2; dx++) {
      let x = dx + player.x

      let tiles = this.mapObjects[y][x]
      if (!tiles) continue

      let key = x+','+y
      this.objectToBeRendered[key] = tiles
    }
  }

  // run events
  this.runEvents(isActionButton, targetPos, needToRunEvents)

  // check fov to delete object that is invisible from this.objectToBeRendered
  this.manageFOV()

  // compute light
  this.manageLights()

  // draw tiles
  for (let key in this.objectToBeRendered) {
    let pos = key.split(','),
        x = parseInt(pos[0]),
        y = parseInt(pos[1]),
        tiles = this.objectToBeRendered[key]
    this.drawTilesAtPos(x, y, tiles)
  }

  // draw player
  this.drawPlayer()
}

Map.runEvents = function(isActionButton, targetPos, needToRunEvents) {
  let player = GameManager.player
  for (let i = 0; i < this.eventList.length; i++) {
    let obj = this.eventList[i] // {x, y, event}
    let gameObject = obj.gameObject,
        x = gameObject.x,
        y = gameObject.y,
        eventTrigger = null

    if (!gameObject.active)
      continue

    let realX = x + player.relativeX,
        realY = y + player.relativeY

    if (isActionButton && x === targetPos.x && y === targetPos.y) {
      eventTrigger = 'ActionButton'
    } else if (!isActionButton && x === targetPos.x && y === targetPos.y) {
      eventTrigger = 'PlayerAbove'
    }

    if (needToRunEvents) {
      gameObject.runEvent(eventTrigger)
    }

    let display = gameObject.getDisplay()
    if (display &&
        realX >= 0 && realX < GameManager.DISPLAY_WIDTH &&
        realY >= 0 && realY < GameManager.DISPLAY_HEIGHT) {
      let obj = {gameObject}
      if (display.type) {
        obj = Object.assign(obj, GameManager.Database.Tilesets[display.type], display)
      } else {
        obj = Object.assign(obj, display)
      }
      this.objectToBeRendered[x+','+y] = this.objectToBeRendered[x+','+y].concat(obj)
    }
  }
}

Map.drawPlayer = function() {
  let player = GameManager.player,
      x = player.x,
      y = player.y

  let display = player.getDisplay()

  this.drawTilesAtPos(x, y, this.objectToBeRendered[`${x},${y}`].concat([Object.assign({}, GameManager.Database.Tilesets[display.type], display)]))
}

/**
 * [function description]
 * eg Map.drawMapById('arena', 'spawn-point')
 * @param  {[string]} mapID                  the ID of map. eg 'arena' without #
 * @param  {[string]} playerSpawnPosId where to put player? eg 'spawn-point'
 * @return {[type]}                          [description]
 */
Map.drawMapById = function(mapId, playerSpawnPosId) {
  if (mapId === this.currentMapId) { // same map
    // this.player = new Player()
    this.initPlayer(playerSpawnPosId)
    this.draw({needToRunEvents: false})
  } else {
    this.currentMapId = mapId
    let mapData = this.getMapDataById(mapId)

    this.tilesSeen = {} // init/reset tilesSeen

    this.initEvents(mapData.events)
    this.initMapObjects(mapData)
    this.initPlayer(playerSpawnPosId)
    this.initScheduler()
    this.draw({needToRunEvents: true})
  }
}

Map.getTopRenderedObject = function(x, y) {
  let tiles = this.renderedTiles[`${x},${y}`]
  if (tiles && tiles.length) {
    return tiles[tiles.length - 1]
  } else {
    return null
  }
}

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

export default Map
