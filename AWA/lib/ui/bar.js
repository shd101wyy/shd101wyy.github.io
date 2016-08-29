import Simple from '../Simple/Simple'

// http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;
    G = (G<255)?G:255;
    B = (B<255)?B:255;

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}

let Bar = Simple.Component({
  getDefaultProps() {
    return {
      value: 10,
      maxValue: 16,
      darkenPercent: 50,
      info: 'HP: 10/16',
      backgroundColor: '#d23b30'
    }
  },
  render() {
    return this.div({class: 'bar', style: {backgroundColor: shadeColor(this.props.backgroundColor, -this.props.darkenPercent)}},
      this.div({class: 'data', style: {width: `${this.props.value/this.props.maxValue*100}%`, backgroundColor: this.props.backgroundColor}}),
      this.div({class: 'info'}, this.props.info))
  }
})

export default Bar
