import types from '../database/type'
import states from '../database/state'
import tilesets from '../database/tileset'

import Action from '../model/action'
import Item from '../model/item'
import Skill from '../model/skill'
import NPC from '../model/npc'
import State from '../model/state'

let Database = {
  Types: types,
  States: {},
  Skills: {},
  Items: {},
  Tilesets: tilesets,
  Actions: {},
  NPCs: {}
}

Database.getTileset = function(name) {
  return this.Tilesets[name]
}

// add actions
Database.loadActionData = function(actions) {
  for (let actID in actions) {
    Database.Actions[actID] = new Action(actions[actID])
  }
}

// add items
Database.loadItemData = function(items) {
  for (let itemID in items) {
    Database.Items[itemID] = new Item(items[itemID])
  }
}

Database.getItem = function(itemID) {
  if (this.Items[itemID]) {
    return this.Items[itemID]
  } else {
    throw 'Error: getItem id:' + itemID + ' not found'
  }
}

// add skills
Database.loadSkillData = function(skills) {
  for (let skillID in skills) {
    Database.Skills[skillID] = new Skill(skills[skillID])
  }
}

Database.getSkill = function(skillID) {
  if (this.Skills[skillID]) {
    return this.Skills[skillID]
  } else {
    throw 'Error: getSkill id:' + skillID + ' not found'
  }
}

// add npcs
Database.loadNPCData = function(npcs) {
  for (let npcID in npcs) {
    // Database.NPCs[npcID] = new NPC(npcs[npcID])
    Database.NPCs[npcID] = npcs[npcID]
    window.npc = new NPC(npcs[npcID])
  }
}

Database.getNPC = function(npcID) {
  if (this.NPCs[npcID]) {
    return this.NPCs[npcID]
  } else {
    throw 'Error: getNPC id:' + npcID + ' not found'
  }
}

// add states
Database.loadStateData = function(states) {
  for (let stateID in states) {
    Database.States[stateID] = new State(states[stateID])
  }
}

Database.getState = function(stateID) {
  return this.States[stateID]
}

export default Database
