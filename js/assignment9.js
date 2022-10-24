const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */

const pix = ["berlin.png", "copenhagen.png", "finland.png", "hikingPic.jpg", "josh.jpg"];

/* Declaring the alternative text for each image file */

const alt = {"berlin.png":"A picture of me in Berlin",
            "copenhagen.png":"A picture of me in Copenhagen",
            "finland.png":"A picture of me in Finland",
            "hikingPic.jpg":"A picture of me hiking",
            "josh.jpg":"My LinkedIn profile pic"};

/* Looping through images */

let path = "xxx"
for (const image of pix) {
    console.log(image);
    const newImage = document.createElement('img');
    path = "../../img/index/" + image;
    console.log(path);
    newImage.setAttribute('src', path);
    newImage.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
};

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } 
    
    else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });