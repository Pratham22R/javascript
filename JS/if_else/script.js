const username = prompt("Enter the name: ")
const userage = prompt("Enter the age: ")

console.log(`Name: ${username}`)
console.log(`Age: ${userage}`)

//if else-if else condition
if (userage>=25 && userage<=45){
    console.log(`${username} is a working proffesional`)
}
else if(userage<25){
    console.log(`${username} is a student`)
}
else{
    console.log(`${username} is a person`)
}

//nested if-else
if(userage>=25){
    if(username.length<=7){
        if(username.includes("P")){
            console.log("You need to go to the counter no: 4")
        }
        else{
            console.log("You need to go to the counter no: 3")
        }
    }
    else{
        console.log("Your name is longer than any standard name.")
    }
}
else{
    console.log("You are not permitted for the screening.")
}
