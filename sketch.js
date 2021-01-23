var bgImg;
var tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;
var invisible;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/tomOne.png");
    tomImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3 = loadAnimation("images/tomFour.png");
    jerryImg1 = loadImage("images/jerryOne.png");
    jerryImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3 = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,600);
    tom.addAnimation("tomSitting",tomImg1);
    tom.scale = 0.3;

    jerry = createSprite(200,600);
    jerry.addImage(jerryImg1);
    jerry.scale = 0.3;

    invisible = createSprite(500,610,1000,10)
    invisible.visible = false;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < jerry.width/2 + tom.width/2
        && jerry.x - tom.x < tom.width/2 + jerry.width/2){
        tom.velocityX = 0;
        tom.addAnimation("tomStopped",tomImg3);
        tom.changeAnimation("tomStopped");
        jerry.addAnimation("jerryStopped",jerryImg3);
        jerry.changeAnimation("jerryStopped");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode =LEFT_ARROW){
      tom.velocityX = -2;
     tom.addAnimation("tomMoving",tomImg2);
     tom.changeAnimation("tomMoving");
     jerry.addAnimation("jerryMoving",jerryImg2);
     jerry.changeAnimation("jerryMoving");
  }

}
