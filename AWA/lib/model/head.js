/**
 * Head
 */
import Types from './type'

import Equipment from './equipment'

class Head extends Equipment {
  constructor(options) {
    options.equipType = Types.EquipmentTypes.Head
    super(options)
  }
}

export default Head
