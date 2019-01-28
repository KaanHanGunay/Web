var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenght() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.append(li);
        input.value = "";
}

function addListAfterClick() {
    if (inputLenght() > 0) {
        createListElement();
    } 
}

function addListAfterKeyPress(event) {
    if (inputLenght() > 0 && event.keyCode === 13) {
        createListElement();
    } 
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);