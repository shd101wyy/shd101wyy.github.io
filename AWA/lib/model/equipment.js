/**
 * Equipment
 */
import Types from './type'

class Equipment {
  constructor({
    name='',
    description=null,
    equipType=Types.EquipmentTypes.Accessory,
    price=0,  // -1 means not for sell
    parametersChanges={
      // attack: +5
      // ,,,
    },
    traits=[]
  }) {
    this.name = name

    if (!description) {
      this.description = `$没有有关 {this.name} 的说明`
    }

    this.equipType = equipType
    this.price = price
    this.parametersChanges = {}
    this.traits = traits
  }
}

export default Equipment
