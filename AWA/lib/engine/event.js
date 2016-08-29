import emitter from '../ui/emitter'

let Event = {
  globalVariables: {},
  missionVariables: {},
  eventVariables: {},    // local event. 仅在此地图储存，出了地图就不储存了。
  commonEventVariables: {},

  onGoingEvents: {}, // local event
  onGoingMission: {},
  onGoingCommonEvents: {}, // 这个是全局的，会一直检查。

  setGlobalVariable: function(name, value) {
    this.globalVariables[name] = value
  },

  getGlobalVariable: function(name) {
    return this.globalVariables[name]
  },


  hasMissionStarted: function(missionName) {
    return this.onGoingMission[missionName]
  },

  startMission: function(missionName) {
    if (missionName in this.missionVariables) {
      throw 'Event Error: startMission: ${missionName} already started'
    } else {
      this.missionVariables[missionName] = {} // initiate mission variables
      this.onGoingMission[missionName] = true
    }
  },

  finishMission: function(missionName) {
    if (missionName in this.missionVariables) {
      delete(this.missionVariables[missionName])
      delete(this.onGoingMission[missionName])
    } else {
      throw `Event Error: finishMission: ${missionName} hasn't started.`
    }
  },

  setMissionVariable: function(missionName, name, value) {
    if (missionName in this.missionVariables) {
      if (typeof(name) === 'object') {
        let obj = name
        for (let name in obj) {
          this.setMissionVariable(missionName, name, obj[name])
        }
      } else {
        this.missionVariables[missionName][name] = value
      }
    } else {
      throw `
Event Error: setMissionVariable:
             mission ${missionName} is not registered.
             please register mission first by calling
             GameManager.Event.registerMission("mission name")`
    }
  },

  getMissionVariable: function(missionName, name) {
    if (missionName in this.missionVariables) {
      return this.missionVariables[missionName][name]
    } else {
      return null

      throw `
Event Error: getMissionVariable:
             mission ${missionName} is not registered.
             please register mission first by calling
             GameManager.Event.registerMission("mission name")`
    }
  },

  /**
   * 全局发生的事件。一般来说 Common Event 的变量储存在 globalVariables 中。
   * @param  {[type]} eventName [description]
   * @param  {[type]} args      [description]
   * @return {[type]}           [description]
   */
  createCommonEvent: function(eventName, args) {
    if (eventName in this.commonEventVariables) {
      throw 'Event Error: createCommonEvent: ${eventName} is already registered'
    } else {
      this.onGoingCommonEvents[eventName] = args
    }
  },

  // ##################################
  // ########### Events ###############
  // ##################################
  teleportPlayer: function(mapId, positionId) {
    GameManager.Map.drawMapById(mapId, positionId)
  },

  showText: function() {
    let args = arguments
    return new Promise(function(resolve, reject) {
      emitter.emit('text-panel-show', {texts: args})
      emitter.on('text-panel-done', function() {
        emitter.off('text-panel-done')
        emitter.emit('map-ui-bind-keyboard')
        resolve()
      })
    })
  },

  showOptions: function(text, options=[]) {
    return new Promise(function(resolve, reject) {
      emitter.emit('text-panel-show', {texts: [text], options})
      emitter.on('text-panel-done', function(option) {
        emitter.off('text-panel-done')
        emitter.emit('map-ui-bind-keyboard')
        resolve(option)
      })
    })
  },

  addHistory: function() {
    let args = Array.prototype.slice.apply(arguments)
    emitter.emit('history-panel-add-logs', {logs: args})
  },

  debug: function(text) {
    console.log(text)
  },

  /**
   * run custom script
   * eg: GameManager.event.runScript(function(){ console.log('Hi there') })
   * @param  {[function]} func [description]
   */
  runScript: function(func) {
    return function() {
      func()
    }
  }
}

export default Event
