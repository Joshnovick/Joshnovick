// Declaring global variables
let detailRadius;
let detailTubeRadius;
let detailX;
let detailY;
let color_picker;

// Functions to setup and draw the canvas and 3D primitive
function setup() {
  // Setup Canvas
    canvas_ = createCanvas(700, 700, WEBGL);
    canvas_.position(750,230);

  // Setup Color Picker
    color_picker = createColorPicker("#FF591C");
    color_picker.position(350, height - 100);

  // Setup Torus
    describe(
      "a rotating white torus with limited radius, tube radius, X detail, and y detail, with a 4 sliders that adjusts each parameter"
    );

  // Creates radius slider
    detailRadius = createSlider(10, 150, 50); // First number is the lowest number, second number is the highest number, and third number determines where the slider starts
    detailRadius.position(150, height - 400); // Determines where the slider is positioned on the page
    detailRadius.style("width", "150px"); // Determines the width of the slider

  // Creates tube radius slider
    detailTubeRadius = createSlider(10, 150, 50);
    detailTubeRadius.position(450, height - 400);
    detailTubeRadius.style("width", "150px");

  // Creates detailX slider
    detailX = createSlider(3, 24, 3);
    detailX.position(150, height - 250);
    detailX.style("width", "150px");

  // Creates detailY slider
    detailY = createSlider(3, 16, 3);
    detailY.position(450, height - 250);
    detailY.style('width', '150px'); 
}

function draw() {
  // Draw Background
  // Draw Color Picker
    background(color_picker.color());

  // Torus Animation
    rotateX(frameCount * 0.01); // Rotation along x axis
    rotateY(frameCount * 0.015); // Rotation along y axis
    rotateZ(frameCount * 0.025); // Rotation along z axis

  // Draw Torus
    torus(detailRadius.value(), detailTubeRadius.value(), detailX.value(), detailY.value()); // Creates torus
}
/**
// Cone

  // Function that setups the cone canvas and the sliders
  function setupCone() {

    // Creates Canvas
    //createCanvas(800, 700, WEBGL);
      
    // Creates radius slider
    detailRadius = createSlider(10, 300, 50); // First number is the lowest number, second number is the highest number, and third number determines where the slider starts
    detailRadius.position(250, height + 5); // Determines where the slider is positioned on the page
    detailRadius.style("width", "150px"); // Determines the wdth of the slider

    // Creates height slider
    detailHeight = createSlider(10, 500, 50);
    detailHeight.position(400, height + 5);
    detailHeight.style("width", "150px");

    // Creates detailX slider
    detailX = createSlider(1, 24, 1);
    detailX.position(550, height + 5);
    detailX.style("width", "150px");

    // Creates detailY slider
    detailY = createSlider(1, 16, 1);
    detailY.position(700, height + 5);
    detailY.style('width', '150px');
  }

  // Function that draws the cone and determines how fast it rotates
  function drawCone() {

    //background(205, 102, 94); // Background color

    rotateX(frameCount * 0.01); // Rotation along x axis
    rotateY(frameCount * 0.015); // Rotation along y axis
    rotateZ(frameCount * 0.01); // Rotation along z axis
    
    cone(detailRadius.value(),detailHeight.value(),detailX.value(),detailY.value(),true); // Creates cone
  }


// Cylinder

  // Function that setups the cylinder canvas and the sliders
  function setupCylinder() {

    // Creates Canvas
    createCanvas(800, 700, WEBGL);
      
    // Creates radius slider
    detailRadius = createSlider(10, 300, 50); // First number is the lowest number, second number is the highest number, and third number determines where the slider starts
    detailRadius.position(200, height + 5); // Determines where the slider is positioned on the page
    detailRadius.style("width", "150px"); // Determines the wdth of the slider

    // Creates tube radius slider
    detailHeight = createSlider(10, 500, 50);
    detailHeight.position(350, height + 5);
    detailHeight.style("width", "150px");

    // Creates detailX slider
    detailX = createSlider(1, 24, 1);
    detailX.position(500, height + 5);
    detailX.style("width", "150px");

    // Creates detailY slider
    detailY = createSlider(1, 16, 1);
    detailY.position(650, height + 5);
    detailY.style('width', '150px');

    // Creates bottom cap slider
    detailBottomCap = createSlider(true, false, true);
    detailBottomCap.position(800, height + 5);
    detailBottomCap.style('width', '150px');

    // Creates top cap slider
    detailTopCap = createSlider(true, false, true);
    detailTopCap.position(950, height + 5);
    detailTopCap.style('width', '150px');

    describe(
      "a rotating white cylinder with limited radius, height, x detail, y detail, bottom cap, and top cap, with sliders that adjusts each parameter"
    );
  }

  // Function that draws the cylinder and determines how fast it rotates
  function drawCylinder() {

    background(205, 102, 94); // Background color

    rotateX(frameCount * 0.01); // Rotation along x axis
    rotateY(frameCount * 0.015); // Rotation along y axis
    rotateZ(frameCount * 0.01); // Rotation along z axis
    
    cylinder(detailRadius.value(),detailHeight.value(),detailX.value(),detailY.value(),detailBottomCap.value(),detailTopCap.value()); // Creates cylinder
  }

// Ellipsoid

  // Function that setups the ellipsoid canvas and the sliders
  function setupEllipsoid() {

    // Creates Canvas
    createCanvas(800, 700, WEBGL);
      
    // Creates radius x slider
    detailRadiusX = createSlider(10, 300, 50); // First number is the lowest number, second number is the highest number, and third number determines where the slider starts
    detailRadiusX.position(250, height + 5); // Determines where the slider is positioned on the page
    detailRadiusX.style("width", "150px"); // Determines the wdth of the slider

    // Creates radius y slider
    detailRadiusY = createSlider(10, 300, 50); 
    detailRadiusY.position(400, height + 5); 
    detailRadiusY.style("width", "150px"); 

    // Creates radius z slider
    detailRadiusZ = createSlider(10, 300, 50); 
    detailRadiusZ.position(550, height + 5); 
    detailRadiusZ.style("width", "150px"); 

    // Creates detailX slider
    detailX = createSlider(3, 24, 3);
    detailX.position(700, height + 5);
    detailX.style("width", "150px");

    // Creates detailY slider
    detailY = createSlider(3, 24, 3);
    detailY.position(850, height + 5);
    detailY.style('width', '150px');

    describe(
      "a rotating white ellipsoid with limited radiusx, radiusy, radiusz, x detail, and y detail, with sliders that adjusts each parameter"
    );
  }

  // Function that draws the ellipsoid and determines how fast it rotates
  function drawEllipsoid() {

    background(205, 102, 94); // Background color

    rotateX(frameCount * 0.01); // Rotation along x axis
    rotateY(frameCount * 0.015); // Rotation along y axis
    rotateZ(frameCount * 0.01); // Rotation along z axis
    
    ellipsoid(detailRadiusX.value(),detailRadiusY.value(),detailRadiusZ.value(),detailX.value(),detailY.value()); // Creates Ellipsoid
  }

// Sphere

  // Function that setups the sphere canvas and the sliders
  function setupSphere() {

    // Creates Canvas
    createCanvas(800, 700, WEBGL);
      
    // Creates radius slider
    detailRadius = createSlider(10, 300, 50); // First number is the lowest number, second number is the highest number, and third number determines where the slider starts
    detailRadius.position(250, height + 5); // Determines where the slider is positioned on the page
    detailRadius.style("width", "150px"); // Determines the wdth of the slider

    // Creates detailX slider
    detailX = createSlider(3, 24, 3);
    detailX.position(400, height + 5);
    detailX.style("width", "150px");

    // Creates detailY slider
    detailY = createSlider(3,24, 3);
    detailY.position(550, height + 5);
    detailY.style('width', '150px');

    describe(
      "a rotating white sphere with limited radius, X detail, and y detail, with sliders that adjusts each parameter"
    );
  }

  // Function that draws the sphere and determines how fast it rotates
  function drawSphere() {

    background(205, 102, 94); // Background color

    rotateX(frameCount * 0.01); // Rotation along x axis
    rotateY(frameCount * 0.015); // Rotation along y axis
    rotateZ(frameCount * 0.01); // Rotation along z axis
    
    sphere(detailRadius.value(), detailX.value(), detailY.value()); // Creates sphere
  }

// Torus

  // Function that setups the torus canvas and the sliders
  function setupTorus() {

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
  function drawTorus() {

    background(205, 102, 94); // Background color

    rotateX(frameCount * 0.01); // Rotation along x axis
    rotateY(frameCount * 0.015); // Rotation along y axis
    rotateZ(frameCount * 0.025); // Rotation along z axis
    //rotateY(millis() / 750);
    
    torus(detailRadius.value(), detailTubeRadius.value(), detailX.value(), detailY.value()); // Creates torus
  }


//Display functions
  function displayCone() {
    setupCone();
    drawCone();
  }
**/