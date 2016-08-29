/*
 * Keyboard
 */
let Keyboard = {
  event: null,

  keyboardEvent: function(e) {
    // console.log(e)
    if (this.event) {
      this.event(e)
    }
  },
  setEvent: function(event) {
    this.event = event
  },
  keyCode: {
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    ESC: 27,
    ENTER: 13,
    QUESTION_MARK: 191,
    SLASH: 191,
    NUM_1: 49,
    NUM_2: 50,
    NUM_3: 51,
    NUM_4: 52,
    NUM_5: 53,
    NUM_6: 54,
    NUM_7: 55,
    NUM_8: 56,
    NUM_9: 57,
    NUM_0: 48
  }
}

window.addEventListener('keydown', Keyboard.keyboardEvent.bind(Keyboard))


export default Keyboard
