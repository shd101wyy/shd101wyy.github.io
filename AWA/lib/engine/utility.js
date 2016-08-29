/*
 * settings
 */
let settings = {
  language: 'CN'
}

/*
 * text
 */
let text = function(t) {
  if (typeof(t) === 'string')
    return t
  return t[settings.language.toLowerCase()]
}

/*
 * D20
 * return [1...20]
 */
let D20 = function() {
  return Math.floor(Math.random() * 20+1)
}
/**
 * [function description]
 * @param  {[Number]} a [description]
 * @param  {[Number]} b [description]
 * @return {[Number]} return random number between [a, b)
 */
let randomInt = function(a, b) {
  if (!b) {
    b = a
    a = 0
  }

  return Math.floor(Math.random() * (b - a) + a)
}

let randomArr = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

let Utility = {
  text, D20, randomInt, randomArr
}

export default Utility
export {text, D20, randomInt, randomArr}
