
var monkey , monkey_running
var bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score,ground;
var back,backimage,monkeycollided;
var gamestate=PLAY;
var PLAY=1;
var END=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   backimage=loadImage("OIP (12).jpg");
  monkeycollided=loadAnimation("sprite_0.png");
  backimage=loadImage("OIP (12).jpg");
}



function setup() {
   monkey=createSprite(50,320,20,20);
  monkey.addAnimation("moving",monkey_running);
  
  monkey.scale=0.2;
   
 
  
  ground=createSprite(300,390,600,10)  
   foodGroup=createGroup();
   obstacleGroup=createGroup();
  score=0;
}


function draw() {
createCanvas(600, 400);
 background("pink");
  stroke("white");
  textSize(20);
  fill("red");
  text("SURVIVALTIME:"+score,250,40)
  
  
  score = score + Math.round(getFrameRate()/60);
  ground.velocityX = -(4 + 1.1* score/100);
  monkey.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  createbanana();
   createobstacle();
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -15;
        
    }
   monkey.velocityY=monkey.velocityY+2; 
  
   if(monkey.isTouching(foodGroup)){
       foodGroup.destroyEach();
     }
  if(monkey.isTouching(obstacleGroup)){
       foodGroup.setVelocityXEach(0);
       obstacleGroup.setVelocityXEach(0);
       obstacleGroup.setLifetimeEach(-1);
       foodGroup.setLifetimeEach(-1);
       score=0;
       ground.velocityX=0;
       if(keyDown("space")){
         monkey.velocityY=0;
         
     }
  text("MONKEY DIED",300,200);
  }
  
  
  
  


  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
  
  }

function createbanana(){
 if(frameCount%100===0){
   var banana=createSprite(600,120,10,10);
   banana.y=Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.velocityX=-2
   banana.lifetime=300;
   
   foodGroup.add(banana);
   
 }
}
function createobstacle(){
 if(frameCount%200===0){
   var obstacle=createSprite(600,360,10,10);
   obstacle.collide(ground);
   obstacle.X=Math.round(random(120,200));
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.15;
   obstacle.velocityX=-2
   obstacle.lifetime=300;
   
   obstacleGroup.add(obstacle);
   
 }
}


