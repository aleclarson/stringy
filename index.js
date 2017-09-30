
module.exports = stringy

function stringy(value, depth) {
  if (value && value.constructor === Object) {
    return formatObject(value, depth || 0)
  } else if (Array.isArray(value)) {
    return formatArray(value, depth || 0)
  } else if (value !== undefined) {
    return JSON.stringify(value)
  } else {
    return 'undefined'
  }
}

function formatObject(obj, depth) {
  var entries = []
  if (depth > 0) {
    entries.push('')
  }
  for (var key in obj) {
    var value = obj[key]
    entries.push(indent(depth, key + ' = ' + stringy(value, depth + 1)))
  }
  return entries.join('\n')
}

function formatArray(arr, depth) {
  var entries = []
  if (depth > 0) {
    entries.push('')
  }
  for (var i = 0; i < arr.length; i++) {
    var value = arr[i]
    entries.push(indent(depth, '- ' + stringy(value, depth + 1)))
  }
  return entries.join('\n')
}

function indent(depth, string) {
  var arr = new Array(depth)
  arr.push(string)
  return arr.join('  ')
}
