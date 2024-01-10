//your JS code here. If required.

// Creating the student object
const student = {
  name: 'John'
};

// Adding getKeys() method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Testing the getKeys() method on the student object
console.log(student.getKeys()); // Output: ['name']

