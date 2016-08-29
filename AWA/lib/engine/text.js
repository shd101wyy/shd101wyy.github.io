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

export {text}
