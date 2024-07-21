const mssg = "     Hello World!!    ";

//Length is the only property of the string in js it gives the length of the string
const len = mssg.length

//METHODS
//without Argument

//1. toUpperCase
const uppercase = mssg.toUpperCase()
const uppercase2 = mssg.toLocaleUpperCase()//used for converting text to specific regional language.

//2. toLowerCase
const LowerCase = mssg.toLowerCase()
const LowerCase2 = mssg.toLocaleLowerCase()//used for converting text to specific regional language.

//3. trim
const trim =mssg.trim()//Remove the spaces from the start and end of the string

//4. trimStart
const trimStart =mssg.trimStart()//Remove the spaces from the start of the string

//5. trimEnd
const trimEnd =mssg.trimEnd()//Remove the spaces from the end of the string

//with Argument

//1. includes
const a = mssg.includes("World")

//2. indexOf
const b = mssg.indexOf("H")
const b1 = mssg.indexOf("Hello")// In this case also it will give the index of the first occurence of the string

//3. replace
const c = mssg.replace("World","django")

//4. replaceAll
const d = mssg.replace("l","L")// Here only the first l encountered would be changed into capital L 
const d1 = mssg.replaceAll("l","L")// Here tall the l would get changed into capital L

//5. concat
const mssg2 = "I'm Pratham"
const e = mssg.concat(". ",mssg2)

//6. padStart
const code = '2546'
const f = code.padStart(16, "*")// Output => '************2546'

//7. padEnd
const g = code.padEnd(16, "*")// Output => '2546************'

//8. charAt
const h = mssg.charAt(5) // Output => "H"
const h1 = mssg[5]// it can also be used in place of char at

//9. charCodeAt
const i = mssg.charCodeAt(5)// this method gives the code of the character that is bieng asked as H has a code of 72 in the standard notations.

//10. split
const j = mssg.split(" ")// it splits the string based on the space and gives an array in result 
const j1 = e.split(" ")

//String Template Litrals
const k = `My Account number is ${f}`// It is used to add a var in a string.