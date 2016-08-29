const Player = require('../prefabs/player'),
      ItemSlotsBar = require('../ui/item-slots-bar')

function Play() {
  this.player = null
}

Play.prototype = {
  create() {
    console.log('play')
    this.game.world.setBounds(0, 0, 128*96, 128*96)
    this.game.physics.startSystem(Phaser.Physics.P2JS)

    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 30; j++) {
        let t = this.game.add.sprite(i*64, j*64, 'terrain', 1)
        t.width = 64
        t.height = 64
      }
    }

    let t = this.game.add.sprite(64, 64, 'terrain_block', 0)
    t.width = 64
    t.height = 64

    t = this.game.add.sprite(64, 64*2, 'terrain_block', 8)
    t.width = 64
    t.height = 64


    this.player = new Player(this.game, 480, 480)
    this.game.add.existing(this.player)

    this.itemSlotsBar = new ItemSlotsBar(this.game)

    window.player = this.player
    this.game.camera.follow(this.player)
  },

  update() {

  },

  render() {
    game.debug.cameraInfo(this.game.camera, 32, 32);
    game.debug.spriteCoords(this.player, 32, 500);
  }

}

module.exports = Play
