// Creating a button variable, adding an event listener, and adding an API endpoint

const jokeButton = document.querySelector(".new-joke");
window.addEventListener("load",getJoke);
jokeButton.addEventListener("click", getJoke);

const punchlineButton = document.querySelector(".punchline");
punchlineButton.addEventListener("click", displayPunchline);
//window.addEventListener("load",displayPunchline);


const endpoint = "https://official-joke-api.appspot.com/random_joke";
var punchline = "";

// Function that calls a joke from an API

async function getJoke() {

    let text = await fetch(endpoint);
    let response = await text.text();
    
    let json_response = JSON.parse(response);
    console.log(json_response);
    console.log(json_response["setup"]);
    console.log(json_response["punchline"]);

    let setup = json_response["setup"];
    punchline = json_response["punchline"];
    
    displayJoke(setup);
}

// FUnction that displays the joke

function displayJoke(x){
    document.getElementById("js-joke-text").textContent = x;
    document.getElementById("js-punchline-text").textContent = "";
}

// Function that displays the punchline

function displayPunchline(){
    document.getElementById("js-punchline-text").textContent = punchline;
    console.log("test punchline");
}