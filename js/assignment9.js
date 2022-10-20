const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");



/* Declaring the array of image filenames */
const pix = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alt = {"pic1.jpg":"Closeup of a blue human eye",
            "pic2.jpg":"A painted wave",
            "pic3.jpg":"Purple and white flowers",
            "pic4.jpg":"Egyptian Art",
            "pic5.jpg":"Closeup of a brown butterly"};

/* Looping through images */
let path = "xxx"
for (const image of pix) {
    console.log(image);
    const newImage = document.createElement('img');
    path = "./img/ica9/assignment9/" + image;
    console.log(path);
    newImage.setAttribute('src', path);
    newImage.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newImage);
    };





/* Wiring up the Darken/Lighten button */
