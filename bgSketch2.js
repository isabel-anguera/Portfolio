let fallingBars = [];

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style("z-index", "-1");
  cnv.style("opacity", ".2");
  noStroke();
  speed = 2;
  fill(150, random(10, 90));
}

function draw() {
  background(255);
  let t = frameCount / 240;

  for (let i = 0; i < 5; i++) {
    fallingBars.push(new fallingBar());
  }

  for (let bar of fallingBars) {
    bar.update(t);
    bar.display();
  }
}

function fallingBar() {
  this.posX = random(0, width);
  this.posY = -50;
  this.h = random(5, 45);
  this.w = random(5, 10);

  this.update = function (time) {
    // this.posY += speed;
    this.posY += pow(this.h, 0.25);

    if (this.posY > height + 50) {
      let index = fallingBars.indexOf(this);
      fallingBars.splice(index, 1);
    }
  };

  this.display = function () {
    rect(this.posX, this.posY, this.w, this.h);
  };
}
