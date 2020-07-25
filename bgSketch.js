var cnv;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight * 3);
  cnv.position(0, 0);
  cnv.style("z-index", "-1");
  cnv.style("opacity", ".2");
  noStroke();
  colorMode(HSB);

  let randomColor = random(5, 360);

  for (let i = 0; i < windowWidth; i++) {
    for (let j = 0; j < windowHeight * 2; j++) {
      size = random(0, windowWidth / 4);
      fill(randomColor, map(size, 0, windowWidth / 4, 5, 95), 100);
      ellipse(i * size, j * size, size, size);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}
