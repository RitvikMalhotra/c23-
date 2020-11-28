var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = -4;
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = 5;
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  bounceOff(fixedRect, movingRect);
 
  drawSprites();
}

function bounceOff(fixedRect, movingRect){
 if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      ) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    fixedRect.velocityX = fixedRect.velocityX*(-1);
    movingRect.velocityX = movingRect.velocityX*(-1);
    
}
  if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect.velocityY = fixedRect.velocityY*(-1);
    movingRect.velocityY = movingRect.velocityY*(-1);

}

}