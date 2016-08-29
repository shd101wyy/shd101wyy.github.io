/**
 * This Inventory is not used yet
 */
/**
 * Inventory class
 * itemsData = [
 * 	{ id: String required
 * 		num: [1~+] optional, default: 1
 * 	}
 * ]
 */
class Inventory {
  constructor(itemsData=[]) {
    this.itemStacks = {}

    itemsData.forEach( itemData => this.addItem(itemData))
  }

  addItem(itemData) {
    let item = GameManager.Database.getItem(itemData.id)
    if (this.itemStacks[itemData.id]) {
      this.itemStacks[itemData.id].num = this.itemStacks[itemData.id].num + (itemData.num || 1)
    } else {
      this.itemStacks[itemData.id] = {
        id: itemData.id,
        num: itemData.num || 1,
        item: item
      }
    }
  }

  removeItem(itemStack, num) {
    let id = itemStack.id
    if (this.itemStacks[id]) {
      this.itemStacks[id].num = this.itemStacks[id].num - num

      if (this.itemStacks[id].num <= 0) {
        delete(this.itemStacks[id])
      }
    }
  }
}

export default Inventory
