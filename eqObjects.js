// const inspect = require('util').inspect;
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length === object2Keys.length) {
    for (let key of object1Keys) {
    // RECURISVE CASE -- If object[key] is another object
      if (typeof(object1[key]) === 'object' && typeof(object2[key]) === 'object' && Array.isArray(object1[key]) === false && Array.isArray(object2[key]) === false) {
        return eqObjects(object1[key],object2[key]);
      }
  
      // BASE CASE -- If Object[key] is not another object (not incl. arrays)
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!(eqArrays(object1[key],object2[key]))) { // Why '!'? If this is true, follow the else if statement.
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }

};

module.exports = eqObjects;