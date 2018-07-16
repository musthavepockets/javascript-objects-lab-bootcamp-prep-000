var recipes = {};

updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
};

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, key)
  delete newObj.key
  return newObj
}
