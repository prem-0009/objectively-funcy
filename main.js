// Your code here.


const getFirstName = function(obj){
  return obj.firstName;
}

const getLastName = function(obj){
  return obj.lastName;
}

const getFullName = function(obj){
  return obj.firstName +' '+ obj.lastName;
}

const setFirstName = function(obj, newName){
  obj.firstName = newName;
}

const setAge = function(obj, newAge){
  obj.age = newAge;
}

const giveBirthday = function(obj){
  //the first line
  if ( obj.age){
    obj.age++
  }else {
    obj.age = 1;
  }
}

const marry = function(obj1, obj2){
  obj1.married = obj2.married = true;

  obj1.spouseName = getFullName(obj2);
  obj2.spouseName = getFullName(obj1);

}

const divorce = function(obj1, obj2){
  obj1.married = obj2.married = false;

  delete obj1.spouseName;
  delete obj2.spouseName;
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
