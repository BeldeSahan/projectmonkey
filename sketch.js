var PLAY = 1;
var END = 0;
var gameState=PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var SCORE=0;
function preload(){
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");  
     bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  
createCanvas(550,450);  
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);  
ground.velociityX=-4;
ground.x=ground.width/2;
  
obstaclesGroup = new Group();
FoodGroup = new Group();

  
  
console.log(ground.x);   
}


function draw() {
background("cyan");  
bananas(); 
obstacles();    
  
monkey.velocityY=monkey.velocityY+0.8;
monkey.collide(ground); 
if(keyDown("space") && monkey.y >= 161) {
monkey.velocityY = -12;
}
if(monkey.isTouching(FoodGroup)){
monkey.scale=0.125;
FoodGroup.destroyEach(1);  
SCORE=SCORE+1;    
}
if (ground.x < 0){
ground.x = ground.width/2;
}
if(monkey.isTouching(obstaclesGroup)){
monkey.scale=0.07;  
}
if(obstaclesGroup.isTouching(monkey)){
  gameState=END;
  } 
if(gameState===END){
FoodGroup.setVelocityXEach(0);
obstaclesGroup.setVelocityXEach(0);
}  
drawSprites();
text("SCORE"+SCORE,400,50);  
function bananas(){
if(frameCount % 100 === 0) {
var banana = createSprite(600,165,10,40);
banana.y= Math.round(random(80,120));    
banana.velocityX = -6;
banana.addImage(bananaImage);
banana.scale=0.1;
  FoodGroup.add(banana);
}
}
function obstacles(){
if(frameCount % 60 === 0) {
  
var obstacle=createSprite(700,327,10,10);
obstacle.velocityX=-6;    
obstacle.addImage(obstacleImage) ;
obstacle.scale=0.1; 
obstaclesGroup.add(obstacle);  
}  
}  
} 