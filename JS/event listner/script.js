let button = document.getElementById("btn")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!</b>"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = '<P>Maa Chudaaa </p>'
})

