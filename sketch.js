var fixedRect,movingRect;

function setup(){
  createCanvas(800,800);

  fixedRect = createSprite(100,300,80,30);
  movingRect = createSprite(100,100,30,80);
  ob1 = createSprite(50,50,20,10);
  ob2 = createSprite(100,200,20,10);
}

function draw(){
  background("black");

  if(touch(movingRect,ob1)){
    movingRect.shapeColor = "red";
    ob1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "grey";
    ob1.shapeColor = "grey";
  }

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  drawSprites();
}