let s = 40;
let speed;

let posX = s / 2 + 10;
let posY = s / 2 + 10;

let colorValue;
let shadow;

let sizeSlider;
let speedSlider;

let saveButton;

let colorOne;
let colorTwo;
let colorThree;
let colorFour;

function setup() {
  createCanvas(500, 500);
  noStroke();

  colorOne = createColorPicker("#ffffff");
  colorTwo = createColorPicker("#ffe438");
  colorThree = createColorPicker("#3f38ff");
  colorFour = createColorPicker("#000000");

  colorOne.position(0, height + 90);
  colorTwo.position(60, height + 90);
  colorThree.position(120, height + 90);
  colorFour.position(180, height + 90);

  background(colorOne.value());

  // QUADRANT 1

  fill(colorOne.value());
  rect(0, 0, width / 2, height / 2);

  // QUADRANT 2

  fill(colorTwo.value());
  rect(width / 2, 0, width / 2, height / 2);

  // QUADRANT 3

  fill(colorThree.value());
  rect(0, height / 2, width / 2, height / 2);

  // QUADRANT 4

  fill(colorFour.value());
  rect(width / 2, height / 2, width / 2, height / 2);

  sizeSlider = createSlider(20, 100, 40);
  sizeSlider.position(80, height + 15);

  speedSlider = createSlider(1, 10, 4);
  speedSlider.position(150, height + 50);

  let p1 = createP("Circle Size");
  let p2 = createP("Circle Speed/Spacing");
}

function draw() {
  s = sizeSlider.value();
  speed = speedSlider.value();

  // QUADRANT 1

  if (posX < width / 2 + s / 4 && posY < height / 2 + s / 4) {
    shadow = color(25);
    colorValue = colorTwo.value();

    // QUADRANT 2
  } else if (posX > width / 2 - s / 4 && posY < height / 2 + s / 4) {
    shadow = color(25);
    colorValue = colorOne.value();

    // QUADRANT 3
  } else if (posX < width / 2 + s / 4 && posY > height / 2 + s / 4) {
    shadow = color(255);
    colorValue = colorFour.value();

    //QUADRANT 4
  } else if (posX > width / 2 + s / 4 && posY > height / 2 + s / 4) {
    shadow = color(255);
    colorValue = colorThree.value();
  }

  fill(shadow);
  ellipse(posX - 5, posY + 5, s, s);

  fill(colorValue);
  ellipse(posX, posY, s, s);

  if (posX > width) {
    posX = 0;
  }

  if (posX < 0) {
    posX = width;
  }

  if (posY < 0) {
    posY = height;
  }

  if (posY > height) {
    posY = 0;
  }

  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      posY -= speed;
    } else if (keyCode === RIGHT_ARROW) {
      posX += speed;
    } else if (keyCode === DOWN_ARROW) {
      posY += speed;
    } else if (keyCode === LEFT_ARROW) {
      posX -= speed;
    }
  }
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("your-art", "png");
  }
  if (key === "r") {
    clear();

    // QUADRANT 1
    fill(colorOne.value());
    rect(0, 0, width / 2, height / 2);

    // QUADRANT 2
    fill(colorTwo.value());
    rect(width / 2, 0, width / 2, height / 2);

    // QUADRANT 3
    fill(colorThree.value());
    rect(0, height / 2, width / 2, height / 2);

    // QUADRANT 4
    fill(colorFour.value());
    rect(width / 2, height / 2, width / 2, height / 2);
  }
}
