var recipes = {};



function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, key)
  delete newObj.key
  return newObj
}

destructivelyDeleteFromObjectByKey(object,key)
