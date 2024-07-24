const currentday = parseInt(prompt("Enter day number"))

//Without Break
switch(currentday){
    case 0:
        console.log("Sunday");
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
    default:
        console.log("Invalid day number");
}

//With Break
switch(currentday){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
 }

// Switch is type sensitive it does not convert any data type accoring to the requirements and matches only those cases that has strictly equal value and datatype.

switch(currentday){
    case '1':
        console.log("1");
    case '2':
        console.log("2");
    case '3':
        console.log("3");
    default:
        console.log("no match is found");
}