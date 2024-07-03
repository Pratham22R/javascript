let div3 = document.createElement("div");
div3.innerHTML = "I have been inserted <b>by pratham</b>"
div3.className = "created";


let div2 = document.createElement("div");

document.body.append(div3);//appends the element at the end of the body
document.body.prepend(div3);//appends the element at the start of the body
document.body.before(div3);//inserts the element before the body
document.body.after(div3);//inserts the element after the body
document.body.replaceWith(div3);//replaces the body with the element