import Simple from '../Simple/Simple'
import emitter from './emitter'

emitter.on('history-panel-connect', function(data, component) {
  this.setState({historyPanelComponent: component})
})

emitter.on('history-panel-add-logs', function({logs=[]}) {
  let historyPanelComponent = this.state.historyPanelComponent
  if (!historyPanelComponent) return
  let oldLogs = historyPanelComponent.props.logs
  let newLogs = oldLogs.concat(logs)
  historyPanelComponent.setProps({logs: newLogs})
  this.state.mapUIComponent.props.historyLogs = newLogs
})

let HistoryPanel = Simple.Component({
  emitter: emitter,
  getDefaultProps() {
    return {
      logs: []
    }
  },
  init() {
    this.emit('history-panel-connect')
    this.state = {showAll: false}
  },
  toggleAllHistory() {
    let showAll = this.state.showAll
    this.setState({showAll: !showAll})
  },
  /**
   * Replace duplicate logs with 'x [num]'
   * @param  {[String]} logs [an array of string]
   * @return {[String]}      [an array of string]
   */
  getLogs(logs) {
    let output = []
    let num = 4
    let i = logs.length - 1
    let occurence = 1
    while (i >= 0 && num !== 0) {
      let log = logs[i]

      occurence = 1
      let j = i - 1
      while (j >= 0 && logs[j] === log) {
        occurence += 1
        j -= 1
      }
      if (occurence > 1) {
        output.push(log + ` x${occurence}`)
        i = j+1
      } else {
        output.push(log)
      }

      i -= 1
      num -= 1
    }


    return output.reverse()
  },
  render() {
    let logsDiv = [],
        logs = this.props.logs

    if (this.state.showAll) {
      logsDiv = logs.map(log=> this.div({class: 'log'}, log))
      return this.div({class: 'history-panel show-all', click: this.toggleAllHistory.bind(this)},
        this.div({class: 'logs'}, logsDiv))
    } else {
      logs = this.getLogs(logs)
      for (let i = 0; i < logs.length; i++) {
        logsDiv.push(
          this.div({class: {'log': true, 'last': i===logs.length-1}}, logs[i])
        )
      }
      return this.div({class: 'history-panel', click: this.toggleAllHistory.bind(this)},
        this.div({class: 'logs'},
          logsDiv)
      )
    }
  }
})

export default HistoryPanel
