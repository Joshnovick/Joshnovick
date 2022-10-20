let para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Hello, ${name}`;
}

window.onload = choosePic;

const myPix = new Array("../../img/index/josh.jpg", 
                      "../../img/index/berlin.png", 
                      "../../img/index/copenhagen.png", 
                      "../../img/index/finland.png", 
                      "../../img/index/hikingPic.jpg", 
                      "../../img/index/riga.png",
                      "../../img/index/switzerland.png");

function choosePic() {
     const randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("pictureOfMe").src = myPix[randomNum];
     console.log(myPix[randomNum]);
     console.log("testing");
}