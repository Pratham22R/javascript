//Without seal and freeze

let user = {
    Firstname: "Pratham",
    Lastname: "Raghuvanshi",
    age: 23,
    gender: "male",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    pincode: 201301,
}

console.log(user)

user.country = "India"

console.log(user)

delete user.pincode

console.log(user)

//With seal and freeze

//With Seal
let user2 = {
    Firstname: "Pratham",
    Lastname: "Raghuvanshi",
    age: 23,
    gender: "male",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: 201301,
}

Object.seal(user2)

user2.country = "India"
delete user2.pincode

console.log(user2)

user2.Firstname = "Ayush" //We can change the value of the property while an object is sealed.

console.log(user2)

//With Freeze
let user3 = {
    Firstname: "Pratham",
    Lastname: "Raghuvanshi",
    age: 23,
    gender: "male",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: 201301,
}

Object.freeze(user3)

user3.Firstname = "Ayush" //We cannot change the value of the property while an object is freezed.
user3.country = "India"
delete user3.pincode

console.log(user3)