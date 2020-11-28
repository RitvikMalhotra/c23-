var fixedRectangle;
var movingRectangle;
function setup() {
  createCanvas(800,400);
 fixedRectangle =  createSprite(400, 200, 50, 50);
 movingRectangle = createSprite(300,100,70,70);
 movingRectangle.shapeColor = "green";
 fixedRectangle.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  
  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;
  if (movingRectangle.x - fixedRectangle.x == 0){
    movingRectangle.shapeColor = "yellow";
    fixedRectangle.shapeColor = "black";
  }
  else {
    fixedRectangle.shapeColor = "blue";
    movingRectangle.shapeColor = "green";

  }
  
    drawSprites();
}