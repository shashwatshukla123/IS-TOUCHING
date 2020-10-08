var rect1,rect2

function setup() {
  createCanvas(800,400);
  rect1=createSprite(300,250,50,10);
  rect1.shapeColor="red";
  rect2=createSprite(100,200,50,10);
  rect2.shapeColor="red";

}

function draw() {
  background(255,255,255);  

  rect1.y=mouseY;
  rect1.x=mouseX;
 
  if(rect2.x-rect1.x<rect1.width/2+rect2.width/2 && rect1.x-rect2.x<rect2.width/2+rect1.width/2 && rect2.y-rect1.y<rect1.height/2+rect2.height/2 && rect1.y-rect2.y<rect2.height/2+rect1.height/2 ){
         rect1.shapeColor="blue";
      rect2.shapeColor="blue";
      }
else {
  rect1.shapeColor="red";
  rect2.shapeColor="red";
}
  

  drawSprites();
}