let movingCircles = [];
// let colorValues = [];
let changingValue = 360;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(10);
  colorMode(HSL);
  cnv.position(0, 0);
  cnv.style("z-index", "-1");
  cnv.style("opacity", ".4");

  movingCircles.push(new movingCircle());
}

function draw() {
  // background(255);
  let t = frameCount / 60;

  for (let circle of movingCircles) {
    circle.update(t);
    circle.display();
  }
}

function movingCircle() {
  this.posX = 0;
  this.posY = 0;
  this.s = 100;

  this.update = function (time) {
    let r = int(random(3));

    if (r == 0) {
      this.posX += this.s;
    } else if (r == 1) {
      this.posX -= this.s;
    } else if (r == 2) {
      this.posY += this.s;
    } else {
      this.posY -= this.s;
    }

    if (this.posY > height) {
      this.posY = 0;
    }

    if (this.posY < 0) {
      this.posY = height - this.s;
    }

    if (this.posX > width) {
      this.posX = 0;
    }

    if (this.posX < 0) {
      this.posX = width - this.s;
    }

    changingValue -= 1;
    this.fillColor = color(changingValue, 100, 90);

    if (changingValue < 1) {
      changingValue = 360;
    }
  };

  this.display = function () {
    fill(this.fillColor);
    drawingContext.filter = "blur(40px)";
    rect(this.posX, this.posY, this.s, this.s);
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
