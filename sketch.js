var ISSImage;
var backgroundImage;
var spaceAni, SpaceCR;
var x = 0;
var hasDocked = false;

var flame1;

function preload(){
 ISSImage = loadImage("iss.png");
 backgroundImage = loadImage("spacebg.jpg");
//spaceAnimation = loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png");
spaceImageCR = loadImage("spacecraft1.png");
craftR = loadImage("spacecraft4.png");
craftL = loadImage("spacecraft3.png");
craftS = loadImage("spacecraft2.png");

                                                                                                   

}

function setup() {
  createCanvas(800,400);
  
   ISS = createSprite(400, 150, 50, 50);
   ISS.addImage(ISSImage);
   ISS.scale = 0.5;
   
   
   spaceCR = createSprite(100,350,50,50);
   spaceCR.addImage(spaceImageCR);
   spaceCR.scale = 0.25;



}

function draw() {
  background(backgroundImage);  
 spaceCR.addImage(spaceImageCR);
if(!hasDocked){
 // SpaceCR.x = spaceCR.x + random(-1,1);
  if(keyDown("UP_ARROW")){
    spaceCR.y = spaceCR.y-2;
    spaceCR.addImage(craftS);

  }
  if(keyDown("DOWN_ARROW")){
    spaceCR.addImage(spaceImageCR);
  }
  if(keyDown("LEFT_ARROW")){
    spaceCR.x = spaceCR.x-2;
    spaceCR.addImage(craftL);
  }
  if(keyDown("RIGHT_ARROW")){
    spaceCR.x = spaceCR.x+2;    
    spaceCR.addImage(craftR);


  }

}
if(spaceCR.y <=(ISS.y+70) && spaceCR.x <=(ISS.x-20)){
  hasDocked = true;
  fill("yellow")
   text("docking done",200,200)  
}
   

  
  
  drawSprites();
}
