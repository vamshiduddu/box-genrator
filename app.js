let button = document.getElementById("butBox")

button.addEventListener("click", myFunction)
var oldValue = 0;
var i = 1;

function myFunction() {
    var num = document.getElementById("number").value;
    var clr = document.getElementById("clrpal").value;

    num = parseInt(oldValue) + parseInt(num);
    for (; i <= num; i++) {
        var box = document.createElement("div");
        box.classList.add("myDiv");

        document.getElementById("box2").appendChild(box);

        box.innerHTML = i;
        oldValue = document.getElementById("box2").lastElementChild.innerHTML;
        box.style.backgroundColor = clr;
    }
}