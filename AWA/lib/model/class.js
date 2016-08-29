/**
 * Classes
 */

class Class {
  constructor({
    name='',
    description=null,
    attributesCorrection={
      strength: 0,
      agility: 0,
      intelligence: 0,
      constitution: 0,
      perception: 0,
      charisma: 0
    },
    skillsToLearn=[],
    traits=[]
  }) {
    this.name = name

    if (!description) {
      this.description = `$没有有关 {this.name} 的说明`
    }

    this.attributesCorrection = attributesCorrection
    this.skillsToLearn=[]
    this.traits=traits
  }
}

export default Class
