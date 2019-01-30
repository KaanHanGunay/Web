var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLenght() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.append(li);
    input.value = "";
    addDeleteButton(li);
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

function addDeleteButton(parent) {
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Sil"));
    deleteButton.addEventListener("click", function () {
        ul.removeChild(parent);
    })
    parent.appendChild(deleteButton);
}

function addChangeClassEvent (element) {
    element.addEventListener("click", function () {
        element.classList.toggle('done');
    });
}

for (let i = 0; i < li.length; i++) {
    addDeleteButton(li[i]);
    addChangeClassEvent(li[i]);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);