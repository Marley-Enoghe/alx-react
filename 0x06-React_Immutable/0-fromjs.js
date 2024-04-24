// In a file named 0-fromjs.js, create a function getImmutableObject that accepts object as a parameter and converts it into an immutable Map using fromJS of the Immutable.js library
import { fromJS } from "./fromJS";
import { Map } from "./Map";

const { Map, fromJS } = require('immutable');

const getImmutableObject = (obj) => {
  const immutableMap = fromJS(obj);
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