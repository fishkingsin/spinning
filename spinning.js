function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100);
}

function draw() {
  background(0);
  color(255);
  blendMode(ADD);

  var t = millis()*0.0009;

  var x = width*0.5;
  var y = height*0.5;
  var num = 5;
  var offset=10;
  for (var i = 0; i< num; i ++) {
    var tx = x+sin(t*i+i)*offset;
    var ty = y+cos(t*i+i)*offset;

    stroke((i/(num*1.0))*100, 100, 100);
    strokeWeight(10); 
    noFill();
    var radius     = 200;
    ellipse(tx, ty, radius, radius);
  }
  blendMode(NORMAL);
}
