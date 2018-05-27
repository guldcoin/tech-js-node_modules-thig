const global = require('window-or-global')

function thig (prop, modulename) {
  if (this.hasOwnProperty(prop)) return this[prop]
  else if (global.hasOwnProperty(prop)) return global[prop]
  else if (typeof require === 'function' && modulename) {
    try {
      var mod = require(modulename)
      return mod[prop]
    } catch (e) {} // eslint-disable-line no-empty
  }
}

function thisg (prop, modulename) {
  if (this.hasOwnProperty(prop)) return this[prop]
  this[prop] = thig(prop, modulename)
  return this[prop]
}

module.exports = {
  thig: thig,
  thisg: thisg
}
