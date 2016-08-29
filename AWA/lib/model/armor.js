/**
 * Weapons
 */
import Types from './type'

import Equipment from './equipment'

class Armor extends Equipment {
  constructor(options) {
    options.equipType = Types.EquipmentTypes.Armor
    super(options)

    this.armorType = options.armorType || Types.ArmorTypes.General Armor
  }
}

export default Armor
