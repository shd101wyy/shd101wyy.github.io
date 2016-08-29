/**
 * Accessory
 */
import Types from './type'

import Equipment from './equipment'

class Accessory extends Equipment {
  constructor(options) {
    options.equipType = Types.EquipmentTypes.Accessory
    super(options)
  }
}

export default Accessory
