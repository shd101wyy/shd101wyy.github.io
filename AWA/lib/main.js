import GameManager from './game'

function test() {
  let FONT_SIZE = 48,
      ROWS = 24,
      COLS = 18

  window.game = new Phaser.Game(1024, 768, Phaser.AUTO, null, false, false)

  // Game States
  game.state.add('boot', require('./states/boot'))
  game.state.add('preload', require('./states/preload'))
  game.state.add('play', require('./states/play'))

  game.state.start('boot')
}

document.body.onload = function() {
  // GameManager.init() // TODO: old game built upon rot.js
  console.log('game start')
  test()
}
