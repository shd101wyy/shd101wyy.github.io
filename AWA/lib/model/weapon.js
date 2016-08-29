/**
 * Weapons
 */
import Types from './type'

import Equipment from './equipment'

class Weapon extends Equipment {
  constructor(options) {
    options.equipType = Types.EquipmentTypes.Weapon
    super(options)

    this.weaponType = options.weaponType || Types.WeaponTypes.Sword
  }
}

export default Weapon
