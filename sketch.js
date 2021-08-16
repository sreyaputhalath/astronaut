
var astronaut;
var gameState = 1;


function preload(){
  bg = loadImage("images/iss.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  move = loadAnimation("images/move.png","images/move1.png");
  sleep = loadImage("images/sleep.png");
  brush =loadImage("images/brush.png");

}


function setup() {
  createCanvas(600,500);
  astronaut = createSprite(300,300,50,50);
  astronaut.addImage("sleeping",sleep);
  astronaut.scale=0.09;
}

function draw() {
  background(bg);
   drawSprites(); 

   if(gameState===1){
    fill(255); 
    text("Press up arrow for the astronaut to brush",200,190);
  }
  
  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.scale = 0.1;
    astronaut.y = 310;
    astronaut.x = 330;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    gameState=2;
  }
  if(gameState===2){
    fill(255);
    text("press down arrow for the astronaut to bath",200,190)
  }
  
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.scale = 0.1;
    astronaut.y = 330;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    gameState=3;
  }
  if(gameState===3){
    fill(255);
    text("press left arrow for the astronaut to drink",200,190)
  }
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.scale = 0.1;
    astronaut.y = 340;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    gameState=4;
  }
  if(gameState===4){
    fill(255)
    text("press right arrow for the astronaut to eat",200,190)
  }
  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.scale = 0.1;
    astronaut.y = 315;
    astronaut.x = 185;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    gameState=5;
  }
  if(gameState===5){
    fill(255)
    text("press space for the astronaut to do gym",200,190)
  }
  
  if(keyDown("space")){
    astronaut.addAnimation("doing gym",gym);
    astronaut.changeAnimation("doing gym");
    astronaut.scale = 0.1;
    astronaut.x = 285;
    astronaut.y = 310;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}
