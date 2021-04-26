var tom1, tom1Img;
var jerry1, jerry1Img;
var garden, gardenImg;
var tom2, tom2Img;
var jerry2, jerry2Img;
var tom3, tom3Img;
var jerry3, jerry3Img;

function preload() {
    //load the images here
    jerry1Img=loadImage("images/mouse1.png");
    tom1Img=loadImage("images/cat1.png");
    gardenImg=loadImage("images/garden.png");
    tom2Img=loadImage("images/cat2.png", "images/cat3.png");
    jerry2Img=loadImage( "images/mouse2.png", "images/mouse3.png");
    tom3Img=loadImage("images/cat4.png");
    jerry3Img=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
     //create garden sprite
     garden=createSprite(200, 200, 1000, 800);
     garden.addImage("garden", gardenImg);
 
    //create tom and jerry sprites here
    tom1=createSprite(600, 450, 50, 50);
    tom1.addImage("tom", tom1Img);
    tom1.scale=0.13;

    jerry1=createSprite(100, 450, 50, 50);
    jerry1.addImage("jerry", jerry1Img);
    jerry1.scale=0.13;

   
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom1.x-jerry1.x<(tom1.width-jerry1.width)/2){
        tom1.velocityX=0;
        tom1.x=200;
        tom1.addImage("catcollided", tom3Img);
        tom1.changeImage("catcollided", tom3Img);
        jerry1.addImage("mousecollided", jerry3Img);
        jerry1.changeImage("mousecollided", jerry3Img);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        jerry1.addAnimation("mouseTeasing", jerry2Img);
        jerry1.changeAnimation("mouseTeasing");
        
        tom1.addAnimation("catWalking", tom2Img);
        tom1.changeAnimation("catWalking");

        tom1.velocityX=-2;
        tom1.scale=0.2;
    }

}
