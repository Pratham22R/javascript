console.log("Hello world");

let v = document.body.firstElementChild;
console.log(v);

let r = document.body.firstElementChild.childNodes;//here we have all the elements of the particular child
console.log(r);

let p = document.body.firstElementChild.children;// here we have only the object of the child such as div
console.log(p);

// this is for the has child node function execution

let container = document.getElementById('container');

if (container.hasChildNodes()) {
    console.log("The container has child nodes.");
} else {
    console.log("The container is empty.");
}
console.log(container.children.length);
console.log(container.children);

// this is for the doctype

console.log(document.doctype);
console.log(window.DocumentType);


