
module.exports = stringy

var objectRE = /^(object|function)$/
var toString = Object.prototype.toString

function stringy(value, depth) {
  if (value) {
    if (value.constructor === Object) {
      return formatObject(value, depth || 0)
    } else if (Array.isArray(value)) {
      return formatArray(value, depth || 0)
    } else if (objectRE.test(typeof value)) {
      return toString.call(value)
    }
  }
  if (value !== undefined) {
    return JSON.stringify(value)
  }
  return 'undefined'
}

function formatObject(obj, depth) {
  var result = []
  for (var key in obj) {
    var value = obj[key]
    result.push(indent(depth, key + ' = ' + stringy(value, depth + 1)))
  }
  if (!result.length) {
    return '{}'
  }
  if (depth > 0) {
    result.unshift('')
  }
  return result.join('\n')
}

function formatArray(arr, depth) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    var value = arr[i]
    result.push(indent(depth, '- ' + stringy(value, depth + 1)))
  }
  if (!result.length) {
    return '[]'
  }
  if (depth > 0) {
    result.unshift('')
  }
  return result.join('\n')
}

function indent(depth, string) {
  var arr = new Array(depth)
  arr.push(string)
  return arr.join('  ')
}
