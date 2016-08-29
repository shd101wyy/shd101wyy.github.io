/**
 * Items
 */
import GameObject from './gameobject'

class Item extends GameObject {
  constructor({
    name='',
    description=null,
    price=0,
    weight=0, // unit kg
    subscriptions={},
    consumable=false,
    hidden=false // display in inventory panel?
  }) {
    super({name, subscriptions, types: ['item']})

    if (!description) {
      this.description = `$没有有关 {this.name} 的说明`
    } else {
      this.description = description
    }

    this.price = price
    this.consumable = consumable
    this.hidden = hidden
    this.weight = weight
  }
}

export default Item
