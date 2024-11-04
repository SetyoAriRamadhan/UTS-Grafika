function setup() {
  createCanvas(750, 550);
}

function draw() {
  background(135, 206, 250);

  fill(255, 255, 0);
  circle(320, 150, 100);
  
  fill(34, 139, 34);
  triangle(0, 400, 500, 400, 200, 200);
  triangle(780, 400, 600, 170, 350, 400);

  fill(105, 105, 105);
  beginShape();
  vertex(280, 400);
  vertex(400, 400);
  vertex(280, height);
  vertex(210, height);
  endShape(CLOSE);
  
  drawBird(100, 100);
  drawBird(150, 150);
  drawBird(200, 120);
  drawBird(400, 120);
  drawBird(450, 100);
  drawBird(500, 150);
  
  function drawBird(x, y) {
  fill(0);
  noStroke();
  arc(x, y, 20, 20, PI, TWO_PI);
  arc(x + 20, y, 20, 20, PI, TWO_PI);
}
}