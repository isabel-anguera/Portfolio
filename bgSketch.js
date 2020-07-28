let posX = 20;
let posY = 20;

let randomColor;

var cnv;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style("z-index", "-1");
  cnv.style("opacity", ".2");
  noStroke();
  colorMode(HSB);
  rectMode(CENTER);
  frameRate(3);

  randomColor = random(190, 230);
}

function draw() {
  background(0, 0);
  let s = random(20, 35);

  fill(randomColor, map(posX, 0, windowWidth, 20, 90), 85);
  rect(posX, posY, s, s);

  posX += 40;

  if (posX > windowWidth + s) {
    posX = 20;
    posY += 40;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
