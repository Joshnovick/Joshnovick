// Declaring global variables used for the sliders
let detailRadius;
let detailTubeRadius;
let detailX;
let detailY;

// Function that setups the canvas and the sliders
function setup() {

    // Creates Canvas
    createCanvas(800, 700, WEBGL);
    
    // Creates radius slider
    detailRadius = createSlider(10, 150, 50); // First number is the lowest number, second number is the highest number, and third number determines where the slider starts
    detailRadius.position(400, height + 5); // Determines where the slider is positioned on the page
    detailRadius.style("width", "150px"); // Determines the wdth of the slider

    // Creates tube radius slider
    detailTubeRadius = createSlider(10, 150, 50);
    detailTubeRadius.position(600, height + 5);
    detailTubeRadius.style("width", "150px");

    // Creates detailX slider
    detailX = createSlider(3, 24, 3);
    detailX.position(10, height + 5);
    detailX.style("width", "150px");

    // Creates detailY slider
    detailY = createSlider(3, 16, 3);
    detailY.position(200, height + 5);
    detailY.style('width', '150px');

    describe(
        "a rotating white torus with limited radius, tube radius, X detail, and y detail, with a 4 sliders that adjusts each parameter"
    );
}

// Function that draws the torus and determines how fast it rotates
function draw() {

  background(205, 102, 94); // Background color

  rotateX(frameCount * 0.01); // Rotation along x axis
  rotateY(frameCount * 0.015); // Rotation along y axis
  rotateZ(frameCount * 0.025); // Rotation along z axis
  //rotateY(millis() / 750);
  
  torus(detailRadius.value(), detailTubeRadius.value(), detailX.value(), detailY.value()); // Creates torus
}

