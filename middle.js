const middle = function(array) {
  let outputArray = [];
  
  if (array.length > 2) {
    array.length % 2 !== 0 ? outputArray.push(array[Math.floor(array.length / 2)]) : outputArray.push(array[array.length / 2 - 1],array[array.length / 2]);
  }

  return outputArray;
};

module.exports = middle;