// Creating a button variable, adding an event listener, and adding an API endpoint

const button = document.querySelector(".new-quote");
window.addEventListener("load",getQuote);
button.addEventListener("click", getQuote);

const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";


// Function that calls a quote from an API


async function getQuote() {

    // console.log("test click worked");

    let text = await fetch(endpoint);
    let response = await text.text();
        //.then(text => text.text());
    
    let json_response = JSON.parse(response);
    console.log(json_response);
    console.log(json_response["message"]);

    displayQuote(json_response["message"])
}

// FUnction that displays the quote

function displayQuote(x){
   // const quoteBox = document.querySelector("js-quote-text");
    // console.log("display quote working");
   // const textMessage = document.createTextNode(x);

    //quoteBox.appendChild(textMessage);

    document.getElementById("js-quote-text").textContent = x;
}

//getQuote();