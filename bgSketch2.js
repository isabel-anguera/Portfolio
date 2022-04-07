let fallingBars = [];

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style("z-index", "-1");
  cnv.style("opacity", ".1");
  noStroke();
  colorMode(HSL);
}

function draw() {
  background(255);
  let t = frameCount / 60;

  for (let i = 0; i < 1; i++) {
    fallingBars.push(new fallingBar());
  }

  for (let bar of fallingBars) {
    bar.update(t);
    bar.display();
  }
}

function fallingBar() {
  this.posY = random(0, width);
  this.posX = -50;
  this.h = random(5, 25);
  this.w = random(5, 10);
  this.fillColor = color(200, 50, random(50, 80), random(1));

  this.update = function (time) {
    this.posX += pow(this.h, 0.25) / 2;

    if (this.posY > height + 50) {
      let index = fallingBars.indexOf(this);
      fallingBars.splice(index, 1);
    }
  };

  this.display = function () {
    fill(this.fillColor);
    ellipse(this.posX, this.posY, this.h, this.h);
  };
}
