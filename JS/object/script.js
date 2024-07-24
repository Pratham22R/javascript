//Empty objects

let obj = {};
let obj2 = {};
//location of both of these objects are different in memory
console.log(obj, obj2);

//Objects with values
let obj3 = {
  name: "Pratham",
  age: 23,
};
console.log(obj3);

//if want to add a new property
obj3.gender = "male";
console.log(obj3);

//if we want to print a a certain property
console.log(obj3.gender);
console.log(obj3["gender"]); //This method is widely used and is more suitable as it can perfom more task than the upper one .

//to delete a property
delete obj3.gender;
console.log(obj3);

//some more cases for the [] operator are:-
let obj4 = {
  "First-Name": "Pratham",
  "Last Name": "Raghuvanshi",
};

console.log(obj4["First-Name"]);
console.log(obj4["Last Name"]);

// Nested Objects
let obj5 = {
  Firstname: "Pratham",
  Lastname: "Raghuvanshi",
  age: 21,
  address: {
    city: "Greater Noida",
    state: "UP",
    pincode: 201308,
    locality: {
      sector: "Gamma-2",
      plot: 56,
      block: "I ",
    },
  },
};
console.log(obj5);
