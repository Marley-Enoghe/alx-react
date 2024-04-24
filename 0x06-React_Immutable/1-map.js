// modify the function getImmutableObject using Map from Immutable.js
const {Map} = require ('immutable');
const  getImmutableObject = (obj) => {
const immutableMap = Map(obj);
return immutableMap;
}

const object = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableObject = getImmutableObject(object);
console.log(immutableObject);