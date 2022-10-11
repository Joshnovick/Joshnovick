let para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Hello, ${name}`;
}

window.onload = choosePic;

const myPix = new Array("../../img/josh.jpg", 
                      "../../img/berlin.png", 
                      "../../img/copenhagen.png", 
                      "../../img/finland.png", 
                      "../../img/hikingPic.jpg", 
                      "../../img/riga.png",
                      "../../img/switzerland.png");

function choosePic() {
     const randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("pictureOfMe").src = myPix[randomNum];
     console.log(myPix[randomNum]);
     console.log("testing");
}