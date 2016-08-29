let ItemSlotsBar = function(game) {
  Phaser.Group.call(this, game)

  this.mode = this.create(48, game.height - 60*2, 'mine_mode')
  this.mode.anchor.setTo(0.5, 0.5)
  this.mode.width = 48
  this.mode.height = 48
  this.mode.fixedToCamera = true

  this.selectedSlotOffset = 0

  this.slots = []
  for (let i = 0; i < 8; i++) {
    let slot = this.create(60 + 60*(i+1), game.height - 48, 'gui', 0)
    slot.anchor.setTo(0.5, 0.5)
    slot.width = 48
    slot.height = 48
    slot.inputEnabled = true
    slot.fixedToCamera = true

    slot.slotOffset = i


    if (i === this.selectedSlotOffset) {
      slot.loadTexture('gui', 1)
    }

    slot.events.onInputDown.add(this.clickSlot, this)

    this.slots.push(slot)
  }


  this.keyNum1 = game.input.keyboard.addKey(Phaser.KeyCode.ONE)
  this.keyNum2 = game.input.keyboard.addKey(Phaser.KeyCode.TWO)
  this.keyNum3 = game.input.keyboard.addKey(Phaser.KeyCode.THREE)
  this.keyNum4 = game.input.keyboard.addKey(Phaser.KeyCode.FOUR)
  this.keyNum5 = game.input.keyboard.addKey(Phaser.KeyCode.FIVE)
  this.keyNum6 = game.input.keyboard.addKey(Phaser.KeyCode.SIX)
  this.keyNum7 = game.input.keyboard.addKey(Phaser.KeyCode.SEVEN)
  this.keyNum8 = game.input.keyboard.addKey(Phaser.KeyCode.EIGHT)
}

ItemSlotsBar.prototype = Object.create(Phaser.Group.prototype)
ItemSlotsBar.prototype.constructor = ItemSlotsBar

ItemSlotsBar.prototype.update = function() {
  if (this.keyNum1.isDown) {
    this.setSelectedSlot(0)
  } else if (this.keyNum2.isDown) {
    this.setSelectedSlot(1)
  } else if (this.keyNum3.isDown) {
    this.setSelectedSlot(2)
  } else if (this.keyNum4.isDown) {
    this.setSelectedSlot(3)
  } else if (this.keyNum5.isDown) {
    this.setSelectedSlot(4)
  } else if (this.keyNum6.isDown) {
    this.setSelectedSlot(5)
  } else if (this.keyNum7.isDown) {
    this.setSelectedSlot(6)
  } else if (this.keyNum8.isDown) {
    this.setSelectedSlot(7)
  }
}

ItemSlotsBar.prototype.setSelectedSlot = function(offset) {
  if (this.selectedSlotOffset === offset) return
  this.slots[this.selectedSlotOffset].loadTexture('gui', 0)

  this.selectedSlotOffset = offset
  this.slots[this.selectedSlotOffset].loadTexture('gui', 1)
}

ItemSlotsBar.prototype.clickSlot = function(slot) {
  this.setSelectedSlot(slot.slotOffset)
}

module.exports = ItemSlotsBar
