const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const minusButton = document.querySelector(".minusButton").addEventListener("click", minus);
const plusButton = document.querySelector(".plusButton").addEventListener("click", plus);
const randomButton = document.querySelector(".randomButton").addEventListener("click", random);
const resetButton = document.querySelector(".resetButton").addEventListener("click", reset);
const submitButton = document.querySelector(".submitButton").addEventListener("click", submit);

function minus() {
    if (outputInt > 0) {
        outputInt -= 1;
        output.textContent = outputInt;
    }
}

function plus() {
    if (outputInt < 9999999999) {
        outputInt += 1
        output.textContent = outputInt;
    }
}

function random() {
    outputInt = randomNumber(0, 9999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function submit() {
    alert(output.textContent);
}

/*const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/

var slider = document.getElementById("myRange");
var sliderOutput = document.querySelector(".sliderOutput");
var sliderSubmit = document.querySelector(".sliderButton").addEventListener("click", update);

function update() {
    sliderOutput.textContent = slider.value;
}