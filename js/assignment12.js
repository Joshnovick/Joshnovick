const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const noButton = document.querySelector(".noButton").addEventListener("click", random);
const yesButton = document.querySelector(".yesButton").addEventListener("click", submit);

function random() {
    outputInt = randomNumber(0, 9999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function submit() {
    alert(output.textContent);
}