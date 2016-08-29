function Preload() {
  this.asset = null
  this.ready = true // TODO: set to false
}

Preload.prototype = {
  preload() {
    this.asset = this.game.add.sprite(this.width/2,this.height/2, 'preloader')
    this.asset.anchor.setTo(0.5, 0.5)

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this)
    this.load.setPreloadSprite(this.asset)

    // TODO: load images and audios
    // this.load.image(...)
    this.load.image('transparent_texture_for_text', '/assets/transparent_texture_for_text.png')
    this.load.spritesheet('player', '/assets/beings/player.png', 48, 48, 32)

    // items
    this.load.image('iron_pickaxe', '/assets/items/iron_pickaxe.png')

    // items weapon
    this.load.image('crystalys', '/assets/items/crystalys.png')
    this.load.image('ak47', '/assets/items/ak47.png')

    // gui
    this.load.image('mine_mode', '/assets/gui/mine_mode.png')
    this.load.spritesheet('gui', '/assets/gui/gui.png', 48, 48, 32)

    // terrain
    this.load.spritesheet('terrain', '/assets/terrains/terrain.png', 24, 24, 16)
    this.load.spritesheet('terrain_block', '/assets/terrains/terrain_block.png', 24, 24, 16)
  },
  create() {
    this.asset.cropEnabled = false
  },
  update() {
    if(!!this.ready) {
      this.game.state.start('play')
    }
  },
  onLoadComplete() {
    console.log('finish preload')
    this.ready = true
  }
}

module.exports = Preload
