//HAS ATTRIBUTE

let l = document.getElementById("welcome");
if (l.hasAttribute("hidden")) {
    console.log("The element has the attribute.");
}
else (console.log("The element does not have the attribute."));

//GET ATTRIBUTE

let attr = l.getAttribute("id");
console.log(attr);

let align = l.getAttribute("class");
console.log(align);

//element.ATTRIBUTE

let t = l.attributes;
console.log(t);

