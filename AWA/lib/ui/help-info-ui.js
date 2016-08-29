import Simple from '../Simple/Simple'

let HelpInfoUI = Simple.Component({
  render: function() {
    return (
    this.div({class: 'help-info-ui'},
      this.div({class: 'title'}, '快捷键'),
      this.div({class: 'shortcut'}, '[w,s,a,d] 移动'),
      this.div({class: 'shortcut'}, '[1]~[8] 选中道具 / 技能'),
      this.div({class: 'shortcut'}, '[s] 道具 / 技能 切换'), // 8 items / quick skills
      this.div({class: 'shortcut'}, '[z] 使用选中的道具'),
      this.div({class: 'shortcut'}, '[x] 技能菜单'),
      this.div({class: 'shortcut'}, '[c] 角色菜单'),
      this.div({class: 'shortcut'}, '[w] 装备菜单'),
      this.div({class: 'shortcut'}, '[X] 检查道具'),
      this.div({class: 'shortcut'}, '[e] 吃'),
      this.div({class: 'shortcut'}, '[r] 阅读'),
      this.div({class: 'shortcut'}, '[t] 使用道具'),
      this.div({class: 'shortcut'}, '[T] 投掷'),
      this.div({class: 'shortcut'}, '[m] 合成'),
      this.div({class: 'shortcut'}, '[l] 搜索周围'),
      this.div({class: 'shortcut'}, '[i] (与npc)交谈'),
      this.div({class: 'shortcut'}, '[g] 捡东西'),
      this.div({class: 'shortcut'}, '[o] 打开／关闭' ),
      this.div({class: 'shortcut'}, '[@] 运行上一个命令' ),
      this.div({class: 'shortcut'}, '[space] 原地休息'),
      this.div({class: 'shortcut'}, '[/] 查看历史'),
      this.div({class: 'shortcut'}, '[esc] 取消')
    )
    )
  }
})

export default HelpInfoUI
