
var trex ,trex_running;
var edges;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png " ,"trex4.png");

}

function setup(){
  createCanvas(600,200)
  
 trex=createSprite(50,120,50,100);
 trex.addAnimation("xyz",trex_running);
trex.scale=.5

edges = createEdgeSprites()

ground=createSprite(300,200,600,20)
ground.velocityX=-3
  //create a trex sprite


}

function draw(){
  
  background("lightgray")
  if(keyDown("Right_Arrow")) {
    trex.velocityY=-5
  }
trex.velocityY = trex.velocityY + 0.5

trex.collide(ground);
if(ground.x < 100){
  ground.x = ground.width/2;
   }
  drawSprites()
  
  

}
