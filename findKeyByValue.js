const findKeyByValue = function(inputObject, refValue) {
  for (let key in inputObject) {
    if (inputObject[key] === refValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;