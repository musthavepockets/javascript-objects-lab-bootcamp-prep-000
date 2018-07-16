var recipes = {};

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, key)
  delete newObj.key
  return newObj
}
