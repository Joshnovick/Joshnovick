const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];
  
const aliceReappear = [
    { transform: 'rotate(0) scale(0)' },
    { transform: 'rotate(360deg) scale(1)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}
  
const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

async function disappear() {
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    alice3.animate(aliceTumbling, aliceTiming).finished;
}

async function reappear() {
    await alice1.animate(aliceReappear, aliceTiming).finished;
    await alice2.animate(aliceReappear, aliceTiming).finished;
    alice3.animate(aliceReappear, aliceTiming).finished;
}

const animateButton = document.querySelector(".disappearButton").addEventListener("click",disappear);
const reappearButton = document.querySelector(".reappearButton").addEventListener("click",reappear);