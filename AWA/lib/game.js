import Player from './model/player'
import Dungeon from './model/dungeon'

import Simple from './Simple/Simple'
import GameUI from './ui/game-ui'

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

  init: function() {
    ROT.DEFAULT_WIDTH = this.DISPLAY_WIDTH
    ROT.DEFAULT_HEIGHT = this.DISPLAY_HEIGHT

    this.player = new Player(GameManager.Database.NPCs.player)

    this.display = new ROT.Display({
      fontFamily:"droid sans mono, monospace",
      fontSize: 48,
      spacing: 1,
      forceSquareRatio:true,
      bg: '#030201'
    })
    document.getElementById('game-container').appendChild(this.display.getContainer())
    this.canvas = document.getElementById('game-container').querySelector('canvas')

    this.gameUI = new GameUI()
    Simple.render(this.gameUI, document.getElementById('game-ui'))
    /*
    this.dungeon = new Dungeon({dungeonWidth: 60, dungeonHeight: 30}, this)
    this.currentMap = this.dungeon
    this.player = this.dungeon.setPlayer()

    this.dungeon.draw()
    this.player.draw()
    */
  },
  /*
  relativeToPlayerPos(x, y) {
    return {x: this.player.relativeX + x, y: this.player.relativeY + y}
  },
  */
}

/*
 * Keyboard
 */
import Keyboard from './engine/keyboard'
GameManager.Keyboard = Keyboard

/*
 * Event
 */
import Event from './engine/event'
Event.$ = GameManager
GameManager.Event = Event

/*
 * Database
 */
import Database from './engine/database'
Database.$ = GameManager
GameManager.Database = Database
Database.loadActionData(require('./database/action').default)
Database.loadItemData(require('./database/item').default)
Database.loadStateData(require('./database/state').default)
Database.loadSkillData(require('./database/skill').default)
Database.loadNPCData(require('./database/npc').default)

/*
 * Map
 */
import _Map from './engine/map'
_Map.$ = GameManager
GameManager.Map = _Map

_Map.loadMapData(require('./map/arena').default)
_Map.loadMapData(require('./map/test').default)
_Map.loadMapData(require('./map/tutorial').default)

export default GameManager
