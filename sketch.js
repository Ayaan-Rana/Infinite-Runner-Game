
var END=0;
var gameState=1;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var food, obstacles, ground;
var obstacle;
var score=0;

function preload(){
  
  
  
}



function setup() {
  createCanvas(600, 600);

  
  monkey=createSprite(80, 315, 20, 20);
  monkey.scale=0.1;
  
  
  ground=createSprite(400, 350, 900, 10);
  ground.velocityX=-4;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}



function draw() {
background("white");
  
  
  ground.x=ground.width/2;
  

  
  if (gameState === PLAY){
  
  
  stroke("white");
  textSize(20);
  fill("black");
  text("score: "+ score, 450, 50);
  
  if (FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score=score+1;
  }
  
  if (obstacleGroup.isTouching(monkey)){
    
    gameState=END;


  }
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime: "+ survivalTime, 100, 50);
  
  
  monkey.collide(ground);
  monkey.velocityY=monkey.velocityY+0.7;
  
  if(keyDown("space")&& monkey.y >= 300){
    monkey.velocityY=-10;
    
  }
  }
  
  
  if (gameState === END){
    monkey.destroy();
    FoodGroup.destroyEach();
    obstacleGroup.destroyEach();
    FoodGroup.velocityX=0;
    obstacleGroup.velocityX=0;
    
    textSize(20);
    fill("black");
    text("Game Over", 245, 250);
    
  }
  
  obstacles();
  food();
  drawSprites();
}


function food(){
  if (frameCount % 80 === 0 ){
    banana=createSprite(600, 200, 10, 10);

    banana.y=Math.round(random(250,300));
    
    banana.velocityX=-4;
    banana.setLifeTime=100;
    
    banana.scale=0.05;
    
    FoodGroup.add(banana);
  }
}


function obstacles(){
if (frameCount % 300 === 0){
  obstacle=createSprite(500, 340, 10, 10);
  
  obstacle.velocityX=-4;
  obstacle.setLifeTime=100;
  
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  
  obstacleGroup.add(obstacle);
}


}