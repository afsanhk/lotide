const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe(`#eqObjects()`, () => {

  describe(`Primitive Tests`, () => {
    it(`Should return true if comparing: 
        ab = { a: "1", b: "2" }
        ba = { b: "2", a: "1" }`, () => {

          const ab = { a: "1", b: "2" };
          const ba = { b: "2", a: "1" };
          assert.isTrue(eqObjects(ab,ba));  
        })

    it(`Should return false if comparing:
        ab = { a: "1", b: "2" }
        abc = { a: "1", b: "2", c: "3" }`, () => {
          const ab = { a: "1", b: "2" };
          const abc = { a: "1", b: "2", c: "3" };
          assert.isFalse(eqObjects(ab,abc));
        })
  });

  describe(`Array Tests`, () => {

    it(`Should return true if comparing:
        cd = { c: "1", d: ["2", 3] }
        dc = { d: ["2", 3], c: "1" }`, () => {
          const cd = { c: "1", d: ["2", 3] }
          const dc = { d: ["2", 3], c: "1" }
          assert.isTrue(eqObjects(cd,dc))
        });

    it(`Should return false if comparing:
        cd = { c: "1", d: ["2", 3] }
        dc = { c: "1", d: ["2", 3, 4] }`, () => {
          const cd = { c: "1", d: ["2", 3] };
          const dc = { c: "1", d: ["2", 3, 4] };
          assert.isFalse(eqObjects(cd,dc));
        })    
      
  });

  describe(`Nested Objects`, () => {

    it(`Should return true if comparing:
        a = { a: { z: 1 }, b: 2 }
        b = { a: { z: 1 }, b: 2 }`, () => {

          const a = { a: { z: 1 }, b: 2 };
          const b = { a: { z: 1 }, b: 2 };
          assert.isTrue(eqObjects(a,b));

        });

    it(`Should return false if comparing:
        a = { a: { y: 0, z: 1 }, b: 2 }
        b = { a: { z: 1 }, b: 2 }`, () => {
          a = { a: { y: 0, z: 1 }, b: 2 };
          b = { a: { z: 1 }, b: 2 };
          assert.isFalse(eqObjects(a,b));
        });

    it(`Should return false if comparing:
        a = { a: { y: 0, z: 1 }, b: 2 }
        b = { a: 1, b: 2 }`, () => {
          a = { a: { y: 0, z: 1 }, b: 2 };
          b = { a: 1, b: 2 };
          assert.isFalse(eqObjects(a,b));
        });     
        
    it(`Should return true if comparing:
        x = {
          'number': 2,
          'name': 'Tragedy',
          'array': [1,3,5,7],
          'obj': {a:{b:{c:{d:{e:{f:{condition: 'poor'}}}}}}}
        }
        y = {
          'obj': {a:{b:{c:{d:{e:{f:{condition: 'poor'}}}}}}} ,
          'number': 2,
          'name': 'Tragedy',
          'array': [1,3,5,7]
        }`, () => {

          const x = {
            'number': 2,
            'name': 'Tragedy',
            'array': [1,3,5,7],
            'obj': {a:{b:{c:{d:{e:{f:{condition: 'poor'}}}}}}}
          };
          const y = {
            'obj': {a:{b:{c:{d:{e:{f:{condition: 'poor'}}}}}}} ,
            'number': 2,
            'name': 'Tragedy',
            'array': [1,3,5,7]
          };
          assert.isTrue(eqObjects(x,y));

    });


    it(`Should return false if comparing:
        x = {
          'number': 2,
          'name': 'Tragedy',
          'array': [1,3,5,7],
          'obj': {a:{b:{c:{d:{e:{f:{condition: 'poor'}}}}}}}
        }

        const z = {
          'obj': {f:{e:{d:{c:{b:{a:{condition: 'poor'}}}}}}} ,
          'number': 2,
          'name': 'Tragedy',
          'array': [1,3,5,7]
        }
        `, () => {
          
          const x = {
            'number': 2,
            'name': 'Tragedy',
            'array': [1,3,5,7],
            'obj': {a:{b:{c:{d:{e:{f:{condition: 'poor'}}}}}}}
          };

          const z = {
            'obj': {f:{e:{d:{c:{b:{a:{condition: 'poor'}}}}}}} ,
            'number': 2,
            'name': 'Tragedy',
            'array': [1,3,5,7]
          };

          assert.isFalse(eqObjects(x,z));
    }); 
  });

})

// // STRETCH -- MORE TESTS:

const x = {
  'number': 2,
  'name': 'Tragedy',
  'array': [1,3,5,7],
  'obj': {a:{b:{c:{d:{e:{f:{condition: 'poor'}}}}}}}
};

const y = {
  'obj': {a:{b:{c:{d:{e:{f:{condition: 'poor'}}}}}}} ,
  'number': 2,
  'name': 'Tragedy',
  'array': [1,3,5,7]
};

const z = {
  'obj': {f:{e:{d:{c:{b:{a:{condition: 'poor'}}}}}}} ,
  'number': 2,
  'name': 'Tragedy',
  'array': [1,3,5,7]
};


// OTHER TESTS
// console.log(assertEqual(eqObjects({ a: { x:0, y: 35, z: 1 }, b: 2 }, { a: { z: 1, x:0,y:35 }, b: 2 }),true)); // => true
// console.log(assertEqual(eqObjects({ a: { x:0, y: 'chicken nuggets', z: 1 }, b: 2 }, { a: { z: 1, x:0,y:35 }, b: 2 }),false)); // => false
