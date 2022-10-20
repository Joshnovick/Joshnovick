// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = new Array("John Snow",
                        "Avatar Aang",
                        "The Grinch");

const insertY = new Array("Winterfell",
                        "the Easter Air Temple",
                        "the North Pole");

const insertZ = new Array("fought off White Walkers and an army of the dead",
                        "meditated and entered the spirit world",
                        "got real angry and stole christmas");

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener("click", result);

function result() {
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    
    let newStory = storyText;
        newStory = newStory.replaceAll(":insertx:",xItem);
        newStory = newStory.replace(":inserty:",yItem);
        newStory = newStory.replace(":insertz:",zItem);

    if(customName.value !== "Bob") {
    const name = customName.value;
    newStory = newStory.replace("Bob",name);
    }

    if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((5/9)*(94-32)) + " centigrade";
    newStory = newStory.replace("300 pounds",weight);
    newStory = newStory.replace("94 fahrenheit",temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

