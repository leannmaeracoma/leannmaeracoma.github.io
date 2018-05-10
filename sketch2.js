function setup(){
  createCanvas(800,600);
  smooth();
}
function draw(){
  background(102);
  if(mouseIsPressed){
   fill(255,255,0); //yellow
   stroke(0);
  } else{
   fill(255); 
   stroke(0);
  }
  push();
  star(mouseX, mouseY, pmouseX, pmouseY, 5); 
  pop();
}
function star( x,  y,  radius1,  radius2,  npovars) {
    var angle = TWO_PI / npovars;
  var halfAngle = angle/2;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = mouseX + cos(a+halfAngle) * radius1;
    sy = mouseY + sin(a+halfAngle) * radius1; //this makes the star move a lot, watch out for that
    vertex(sx, sy);
  }
  endShape(CLOSE);
}