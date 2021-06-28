const flatten = function(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    
    if (Array.isArray(inputArray[i])) {
      let temporaryStorage = inputArray[i];
      inputArray.splice(i,1);
      for (let j = 0; j < temporaryStorage.length; j++) {
        inputArray.splice(i + j,0,temporaryStorage[j]);
      }
    }
  }
  return inputArray;
};

module.exports = flatten;