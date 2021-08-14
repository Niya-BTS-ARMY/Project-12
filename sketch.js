var bg,sleep,brush,gym,eat,drink,move,bath;
var astronaut;
var back;
var edges;

function preload(){
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png" , "gym2.png" , "gym11.png" , "gym12.png");
  eat=loadAnimation("eat1.png" , "eat2.png");
  drink=loadAnimation("drink1.png" , "drink2.png");
  move=loadAnimation("move.png" , "move1.png");
  bath=loadAnimation("bath1.png" , "bath2.png");
}
function setup() {
  createCanvas(800,400);
  back=createSprite(400, 200, 50, 50);
  back.addImage(bg);
  back.scale=0.17;

  astronaut=createSprite(400,230);
astronaut.addAnimation("sleeping" , sleep);
astronaut.scale=0.1;

edges=createEdgeSprites();
}

function draw() {
  background(255,255,255); 
  
  astronaut.bounceOff(edges);
 
if(keyDown(UP_ARROW)){
  astronaut.addAnimation("brushing" , brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown(DOWN_ARROW)){
  astronaut.addAnimation("gymming" , gym);
  astronaut.changeAnimation("gymming");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown(RIGHT_ARROW)){
  astronaut.addAnimation("bathing" , bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown(LEFT_ARROW)){
  astronaut.addAnimation("eating" , eat);
  astronaut.changeAnimation("eating");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown("d")){
  
  astronaut.addAnimation("drinking" , drink);
  astronaut.changeAnimation("drinking");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  
}

if(keyDown("s")){
  astronaut.addAnimation("sleeping" , sleep);
  astronaut.changeAnimation("sleeping");
  astronaut.x=400;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}

if(keyDown("m")){
  astronaut.addAnimation("moving" , move);
  astronaut.changeAnimation("moving");
  astronaut.y=100;
  astronaut.x=100;
  astronaut.velocityX=2;
  astronaut.velocityY=2;
}


  drawSprites();
  fill("dark white");
  textSize(18);
  text("Instructions: " , 20,20);

  fill("dark white");
  textSize(15);
  text("Up Arrow = Brushing    m key = Moving" , 10,40);

  fill("dark white");
  textSize(15);
  text("Down Arrow = Gymming" , 10,60);

  fill("dark white");
  textSize(15);
  text("Right Arrow = Bathing" , 10,80);

  fill("dark white");
  textSize(15);
  text("Left Arrow = Eating" , 10,100);

  fill("dark white");
  textSize(15);
  text("s key = sleeping" , 10,120);

  fill("dark white");
  textSize(15);
  text("d key = drinking" , 140,20);
}




