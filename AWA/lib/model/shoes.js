/**
 * Weapons
 */
import Types from './type'

import Equipment from './equipment'

class Shoes extends Equipment {
  constructor(options) {
    options.equipType = Types.EquipmentTypes.Shoes
    super(options)
  }
}

export default Shoes
