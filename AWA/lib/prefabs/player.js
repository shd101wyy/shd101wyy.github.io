let Player = function(game, x, y, key='transparent_texture_for_text', frame=0) {
  Phaser.Sprite.call(this, game, x, y, 'player', frame)
  //this.anchor.setTo(0.5, 0.5)
  this.width = 96
  this.height = 96
  this.scale.setTo(2.0)

  this.game.physics.p2.enable(this)
  this.inputEnabled = true  // for hover
  this.body.collideWorldBounds = true

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
  this.animations.add('idle', [0, 1, 2, 3], 4, true)
  this.animations.add('walk', [8, 9, 10, 11, 12], 8, true)
  this.animations.add('run', [8, 9, 10, 11, 12], 12, true)
  this.animations.play('run')

  this.rightHandItem = game.add.sprite(4, 12, 'ak47')
  this.rightHandItem.width = 24
  this.rightHandItem.height = 24
  this.rightHandItem.pivot.x = 0
  this.rightHandItem.pivot.y = 0
  this.rightHandItem.anchor.setTo(0, 1)
  this.addChild(this.rightHandItem)
  window.rightHandItem = this.rightHandItem
  //this.game.add.tween(this.rightHandItem).to({y:8}, 200, Phaser.Easing.Linear.NONE, true, 0, 1000, true)
  // player.scale.x *= -1 // flap

  this.speed = 200
  this.keyW = game.input.keyboard.addKey(Phaser.KeyCode.W)
  this.keyS = game.input.keyboard.addKey(Phaser.KeyCode.S)
  this.keyA = game.input.keyboard.addKey(Phaser.KeyCode.A)
  this.keyD = game.input.keyboard.addKey(Phaser.KeyCode.D)
  this.keySHIFT = game.input.keyboard.addKey(Phaser.KeyCode.SHIFT)

  // this.cursors = game.input.keyboard.createCursorKeys()
  // this.game.input.keyboard.onDownCallback = this.onKeyDown.bind(this)
  this.events.onInputOver.add(this.hover, this)

  this.faceLeft = false
}

Player.prototype = Object.create(Phaser.Sprite.prototype)
Player.prototype.constructor = Player

Player.prototype.update = function() {
  let moved = false
  let running = false
  let left = false

  this.body.setZeroVelocity()

  if (this.keySHIFT.isDown) {
    running = true
  }

  if (this.keyW.isDown) {
    this.body.moveUp(running ? this.speed * 1.5 : this.speed)
    moved = true
  } else if (this.keyS.isDown) {
    this.body.moveDown(running ? this.speed * 1.5 : this.speed)
    moved = true
  }

  if (this.keyA.isDown) {
    this.body.moveLeft(running ? this.speed * 1.5 : this.speed)
    moved = true
  } else if (this.keyD.isDown) {
    this.body.moveRight(running ? this.speed * 1.5 : this.speed)
    moved = true
  }

  // Face direction follows mouse pointer
  let mouseX = this.game.input.mousePointer.worldX
  if (mouseX < this.x) {
    this.faceLeft = true
    this.scale.x = -Math.abs(this.scale.x)
  } else {
    this.faceLeft = false
    this.scale.x = Math.abs(this.scale.x)
  }


  if (moved == true) {
    if (!running) {
      this.animations.play('walk')
    } else {
      this.animations.play('run')
    }
  } else {
    this.animations.play('idle')
  }

  if (game.input.activePointer.leftButton.isDown) {
    if (!this.tween) {
      this.tween = this.game.add.tween(this.rightHandItem).to({rotation:this.rightHandItem.rotation+Math.PI/4}, 250, Phaser.Easing.Linear.NONE, true, 0,  600, true)
    }
  } else {
    if (this.tween) {
      this.tween.stop()
      this.tween = null
    }
  }

  // face
  let targetAngle = this.game.math.angleBetween(this.x, this.y, this.game.input.activePointer.worldX, this.game.input.activePointer.worldY)
  if (this.faceLeft) {
    this.rightHandItem.rotation = -targetAngle + Math.PI/2/2 + Math.PI
  } else {
    this.rightHandItem.rotation = targetAngle + Math.PI/2/2
  }
}

Player.prototype.hover = function() {
  console.log('hover')
}

module.exports = Player
