/*
 *write a  drawTarget() function makes it easy to draw many distinct 
 *targets. Each call to drawTarget() should specify the position, size, and number of
 *rings for each target.
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  frameRate(10);
}

function draw() {
 s=random(400);
  if (s<100){
  	s = s +100;
  }else{
  	s=random(400);
  }
  target(random(width),random(height),s,10);
}

function target(x,y,size,rings){
  let steps = size/rings;
  let grayvalues = 40/rings;
  r=random(255);
  g=random(255);
  b=random(255);

  //let position = 
  //let size =
	for (i = 0; i < 8; i++) {
    fill(r, g, b, i*grayvalues);
    ellipse(x, y, size - i*steps, size - i*steps);
  }
}