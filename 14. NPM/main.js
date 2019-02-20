var _ = require('lodash');
console.log(_);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function onLoad() {
    body.style.background = "linear-gradient(to right, red, yellow)";
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function addRestartButton() {
    btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Restart"));
    btn.addEventListener("click", function () {
        body.style.background = "linear-gradient(to right, red, yellow)";
    });
    body.appendChild(btn);
}

function displayCSS() {
    css.textContent = body.style.background + ";";
}

function generateRandomColor() {
    colors = []
    for (let index = 0; index < 6; index++) {
        randomNumber = Math.floor(Math.random() * 256);
        colors.push(randomNumber)
    }
    console.log(colors)
}

onLoad();
addRestartButton();
displayCSS();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);