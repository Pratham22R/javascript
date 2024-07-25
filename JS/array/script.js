const user = ["Pratham", "Shatakshi", "Rahul", "Khushi", "Charit"];

const user2 = ["Pratham", "Neha", "Rahul", "Khushi", "Charit"];

//lenght of the array
console.log(user.length);

//indexing of the array
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);

//in order to add an item to the last of an array
user[user.length] = "Shachin";
console.log(user);

user.push("Rama Kant Pandit");
console.log(user);

//in order to delete an item from the last of an array

delete user[user.length - 1];//This method leaves an empty space in the array
console.log(user);

user.pop();
console.log(user);

//BASIC METHODS

//push
user2.push("Rama Kant Pandit");
console.log(user2);

//pop
user2.pop();
console.log(user2);

//shift
user2.shift();
console.log(user2);

//unshift
user2.unshift("Rama Kant Pandit");
console.log(user2);

//concat
console.log(user.concat(user2));

//indexOf
console.log(user2.indexOf("Rama Kant Pandit"));//if the element is not present it will return -1

//includes
console.log(user2.includes("Rama Kant Pandit"));

//reverse
user2.reverse();
console.log(user2);

//sort
user2.sort();
//it will change the original array and arrange the items according to the code of the item in the array
console.log(user2);

//slice
console.log(user2.slice(1, 3));
//it will print the items from index 1 to index 2 will not add item at index 3 
//it does not make any change in the original array.

//splice
user2.splice(1, 2);
//it will delete the items from index 1 and 2 items will be deleted from the array.
//it also chages the original array.
console.log(user2);
