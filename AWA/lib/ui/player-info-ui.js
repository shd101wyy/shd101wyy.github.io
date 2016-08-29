import Simple from '../Simple/Simple'

let PlayerInfoUI = Simple.Component({
  render: function() {
    return  this.div({class: 'player-info-ui'},
              this.div({class: 'basic-info'},
                this.div({class: 'title'}, '人物信息'),
                this.div({class: 'info name'},
                  this.span({class: 'label'}, '名字: '),
                  this.span({class: 'value'}, '王一祎')),

                this.div({class: 'info race'},
                  this.span({class: 'label'}, '种族: '),
                  this.span({class: 'value'}, '人类')),

                this.div({class: 'info gender'},
                  this.span({class: 'label'}, '性别: '),
                  this.span({class: 'value'}, '男')),

                this.div({class: 'info class'},
                  this.span({class: 'label'}, '职业: '),
                  this.span({class: 'value'}, '骑士'))
              ),
              this.div({class: 'attribute-info'},
                this.div({class: 'title'}, '属性信息'),
                this.div({class: 'info strength'},
                  this.span({class: 'label'}, '力量 STR: '),
                  this.span({class: 'value'}, '12')),

                this.div({class: 'info agility'},
                  this.span({class: 'label'}, '敏捷 AGI: '),
                  this.span({class: 'value'}, '12')),

                this.div({class: 'info intelligence'},
                  this.span({class: 'label'}, '智力 INT: '),
                  this.span({class: 'value'}, '12')),

                this.div({class: 'info constitution'},
                  this.span({class: 'label'}, '体力 CON: '),
                  this.span({class: 'value'}, '12')),

                this.div({class: 'info perception'},
                  this.span({class: 'label'}, '感知 PER: '),
                  this.span({class: 'value'}, '12')),

                this.div({class: 'info charisma'},
                  this.span({class: 'label'}, '魅力 CHR: '),
                  this.span({class: 'value'}, '12'))
              ),

              this.div({class: 'level-info'},
                this.div({class: 'title'}, '基本信息'),
                this.div({class: 'info level'},
                  this.span({class: 'label'}, 'Lvl: '),
                  this.span({class: 'value'}, '1')),

                this.div({class: 'info experience'},
                  this.span({class: 'label'}, 'EXP: '),
                  this.span({class: 'value'}, '12/64')),

                this.div({class: 'info HP'},
                  this.span({class: 'label'}, 'HP : '),
                  this.span({class: 'value'}, '12/60')),

                this.div({class: 'info MP'},
                  this.span({class: 'label'}, 'MP : '),
                  this.span({class: 'value'}, '12/48')),

                this.div({class: 'info EP'},
                  this.span({class: 'label'}, 'EP : '),
                  this.span({class: 'value'}, '96/100')),

                this.div({class: 'info attack-damage'},
                  this.span({class: 'label'}, '物理攻击力: '),
                  this.span({class: 'value'}, '45')),

                this.div({class: 'info magic-attack-damage'},
                  this.span({class: 'label'}, '魔法攻击力: '),
                  this.span({class: 'value'}, '13'))
              ),

              this.div({class: 'other-info'},
                this.div({class: 'title'}, '其他属性'),
                this.div({class: 'info'},
                  this.span({class: 'label'}, '威胁: '),
                  this.span({class: 'value'}, '12')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '速度: '),
                  this.span({class: 'value'}, '8')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '护甲: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '魔抗: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '暴击: '),
                  this.span({class: 'value'}, '60%')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '闪避: '),
                  this.span({class: 'value'}, '20%')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '命中率: '),
                  this.span({class: 'value'}, '20%')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '法伤: '),
                  this.span({class: 'value'}, '20%')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '回血: '),
                  this.span({class: 'value'}, '5 hp/回合')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '回魔: '),
                  this.span({class: 'value'}, '4 mp/回合'))
              ),

              this.div({class: 'resistance-info'},
                this.div({class: 'title'}, '抗性'),
                this.div({class: 'info'},
                  this.span({class: 'label'}, '中毒抗性: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '灼烧抗性: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '冻伤抗性: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '伤口抗性: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '麻痹抗性: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '眩晕抗性: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '愤怒抗性: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '混乱抗性: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '致盲抗性: '),
                  this.span({class: 'value'}, '12 D20'))
              ),

              this.div({class: 'common-skill-info'},
                this.div({class: 'title'}, '通用属性'),
                this.div({class: 'info'},
                  this.span({class: 'label'}, '开锁: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '探索: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '偷窃: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '交涉: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '挖掘: '),
                  this.span({class: 'value'}, '12 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '学习: '),
                  this.span({class: 'value'}, '6 D20')),

                this.div({class: 'info'},
                  this.span({class: 'label'}, '鉴定: '),
                  this.span({class: 'value'}, '6 D20'))
              )
            )
  }
})

export default PlayerInfoUI
