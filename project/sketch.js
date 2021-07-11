var DisplayInstructions,DisplayInstructionsImg;
var Display , displayImg, DrinkGroup , waterGroup;
var player,playerImg;
var StartButton , start ;
var crossIcon , crossImg;
var invisibleGround,c;
var gameState=0;
var EnergyDrink1 , EnergyDrinkImg , water, waterImg,tortoise1,tortoise2,tortoiseImg1,tortoiseImg2,TortoiseGroup, gameOverImg,gameOverObj, playerOverSadImg;
var playerOverSad,dangerT,dangerTimg,replayBtn,replayBtnImg,playerStill, playeStillImg,playNow,playNowImage,tortoiseUp;
var TortoiseUpGroup,afterClick,afterClickOBJ;
var GameOver,ClickButton,PlayerDrink,tada;


//game State 5;
var door, doorImg, 
thingOnDoor,thingOnDoorImg,
Arrow,ArrowImg;
var plrStand,plrStandImg;
var Box;
var Display2 , display2Img;
var yBox;
var DoorOpenSound
var DoorOpen,DoorOpenImg;
function preload()
{
 playerImg=loadAnimation("images/boy1.png","images/boy 2.png","images/boy 3.png","images/boy 4.png");
 crossImg=loadImage("images/play now.png")
 displayImg=loadImage("images/bg.jpg");
 start=loadImage("images/button.png");
 DisplayInstructionsImg=loadImage("images/Background - Copy.jpg")
 EnergyDrinkImg=loadImage("images/energy drink can.png")
 waterImg=loadImage("images/water bottle.png")
 tortoiseImg1=loadImage("images/closed tortoise.png");
 tortoiseImg2=loadImage("images/open tortoise.png");
 slowdownImage=loadImage("images/Slow down.png");
 gameOverImg=loadImage("images/you loose.jpg");
 playerOverSadImg=loadImage("images/sad boy.png")
 dangerTimg=loadImage("images/open tortoise.png");
 replayBtnImg=loadImage("images/replay.png");
 playeStillImg=loadImage("images/boy 2.png");
 playNowImage=loadImage("images/play now.png");
 afterClick=loadImage("images/after click.png");
 DoorOpenImg=loadAnimation("images/door1.png","images/door2.png" ,"images/door3.png","images/door4.png" , "images/door5.png")
 //sounds
 GameOver=loadSound("audio/zapsplat_vehicles_car_suv_nissan_patrol_2020_v8_door_close_garage_door_wobble_inside_small_garage_ext_002_67405.mp3");
 ClickButton=loadSound("audio/sound_ex_machina_Button_Click.mp3");
 PlayerDrink=loadSound("audio/water_submerge_glass_002.mp3");
 DoorOpenSound=loadSound("audio/mixkit-creaking-door-open-and-close-199.wav");
 tada=loadSound("audio/Tada-sound.mp3");

 doorImg=loadImage("images/last finish door.png");
 thingOnDoorImg=loadImage("images/THing to be on top of door.png");
 ArrowImg=loadImage("images/arrow.png");
plrStandImg=loadImage("images/boy1.png");
display2Img=loadImage("images/background 3.jpg");


}
function setup() 
{
  createCanvas(windowWidth,windowHeight);
  

  DisplayInstructions= createSprite(width/2,height/2+50,width/2,height-10);
  DisplayInstructions.addImage("background2",DisplayInstructionsImg);
  DisplayInstructions.visible=false;
  DisplayInstructions.scale=2 ;
  
  Display=createSprite(width/2,height/2,width,height);
  Display.x=Display.width/2;
  Display.addImage("background1",displayImg);
  Display.scale=2 ;

  Display2=createSprite(width/2,height/2,width,height-10);
  Display2.x=Display2.width/2;
  Display2.addImage("background2",display2Img);
  Display2.scale=2.5 ;
  Display2.visible=false;
  
  player=createSprite(150,height-150,width+10,height+10);
  player.addAnimation("running",playerImg);
  player.setCollider("rectangle",0,0,120,450);
  player.debug=false;
  player.scale=0.65;

  playerStill = createSprite(width,height/2+130,width+10,height+50)
  player.addAnimation("still",playeStillImg);
  player.scale=0.65;
  playerStill.visible=false;

  dangerT=createSprite(width,height-30,20,20);
  dangerT.addImage("danger", dangerTimg);
  dangerT.visible=false;

  playerOverSad=createSprite(width,height-100,20,20);
  playerOverSad.addImage("over",playerOverSadImg);
  playerOverSad.visible=false;
  playerOverSad.scale=0.5;

  invisibleGround=createSprite(width/2,height-40,width,20);
  invisibleGround.visible=false;

  StartButton=createSprite(width/2,height-100,40,20);
  StartButton.addImage("button" , start);
  StartButton.scale=0.35;
  StartButton.visible=false;
  

  CrossIcon=createSprite(width-650,height-200,20,20);
  CrossIcon.addImage("cross",crossImg);
  CrossIcon.scale=0.3;

  gameOverObj=createSprite(width,height/2,20,20);
  gameOverObj.addImage("you loose", gameOverImg);
  gameOverObj.scale=0.25;
  gameOverObj.visible=false;
  

  afterClickOBJ=createSprite(width/2,height-50,20,20);
  afterClickOBJ.addImage("play now when click", afterClick);
  afterClickOBJ.scale=0.2;
  afterClickOBJ.visible=false;
  
  replayBtn=createSprite(width/2,height/2,20,20);
  replayBtn.addImage("replay", replayBtnImg);
  replayBtn.visible=false;


  DrinkGroup=createGroup();
  waterGroup=createGroup();
  TortoiseGroup=createGroup();
  TortoiseUpGroup=createGroup();
  Display.velocityX=-2;
  

  //gameState -4;
  Arrow=createSprite(130,height/2+30,20,20);
  Arrow.addImage("arrow",ArrowImg);
  Arrow.scale=0.2;
  Arrow.visible=false;
  

  //door
  door=createSprite(width/2+160,height/2+30,20,20);
  door.addImage("door",doorImg);
  door.scale=1;
  door.visible=false;
  
  //thing on the door
  thingOnDoor=createSprite(random(width/2+60,width/2+160),random(height/2+30,height/2+130),20,20);
  thingOnDoor.addImage("thingOnDoor",thingOnDoorImg);
  thingOnDoor.scale=0.3;
  thingOnDoor.visible=false;
  thingOnDoor.debug=false;
  thingOnDoor.setCollider("rectangle",350,0,60,60);

  //player is standing
  plrStand=createSprite(100,height/2+30,20,20);
  plrStand.addImage("standing",plrStandImg)
  plrStand.scale=1;
  plrStand.visible=false;
  
  // ybox 
  yBox=createSprite(thingOnDoor.x+100,thingOnDoor.y, 30, 30)
  yBox.shapeColor = color(255,255,0)
  yBox.visible=false;

  DoorOpen=createSprite(60,height/2+30,20,20);
  DoorOpen.addAnimation("DoorOpen",DoorOpenImg);
  DoorOpen.scale=0.8;
  DoorOpen.visible=false;
}

function draw() 
{
  background("blue"); 
  //console.log(frameCount);
  

  Arrow.depth=thingOnDoor.depth;
  Arrow.depth++;

   if(gameState===0)
  {

  //tada.play();
    
    //if(Display.x<200)
    //{
     // Display.x=Display.width/2;
    //}
    Display.velocityX=0;
    CrossIcon.visible=false;
   
    //player.visible=false;
    player.changeImage("still",playeStillImg);
    StartButton.visible=true;
  }
    if(mousePressedOver(StartButton))
    {
      
        ClickButton.play(); 
         gameState=1;
         StartButton.visible=false;
    } 
    
    player.collide(invisibleGround);
    drawSprites(); 
    
  // game state 1
  if(gameState===1)
  { 
    Display.velocityX=-2;

    if(Display.x<300)
    {
      Display.x=Display.width/2;
    }

 
    player.visible=false;
    

  
    
  
    // true visible

    CrossIcon.visible=true;
       // text
       fill("black");
       textSize(25);
       text("1.Help Raj to Escape from this dangerous area ." ,width/2-300 , 100);
       text(" 2. Click arrow keys to move Raj (up or down) .",width/2-300,140);
     
       text(" 3. To help Raj you have to cross all the obstacles",width/2-300,180);
       

       text("AT LAST:",width/2-300,220);
       fill("black");
       textSize(20);
       text("4.PRESS S TO SHOT THE ARROW TO OPEN THE DOOR AND ",width/2-130050,250);
       text("FINNALY ESCAPE FROM THE HORROR AREA",width/2-300,280)

       if(mousePressedOver(CrossIcon))
       {
         gameState=2;
         afterClickOBJ.visible=true;
         
         CrossIcon.visible=false; 
         ClickButton.play(); 
         
      
       }
      
       

  }

  
   

  if(gameState===2) 
  {
        
    Display.velocityX=-2;

    if(Display.x<400)
    {
      Display.x=Display.width/2;
    }

    if(waterGroup.isTouching(player))
    {
      waterGroup.destroyEach();
      PlayerDrink.play();
    }
    
    if(DrinkGroup.isTouching(player))
    {
      DrinkGroup.destroyEach();
      PlayerDrink.play();
    }
 

   afterClickOBJ.visible=false;
    StartButton.visible=false;
    playNow.visible=false;
    player.visible=true;
    player.changeAnimation("running",player)
    CrossIcon.visible=false;
   


    if(touches.length>0 || keyDown("up")) {      
      player.velocityY=-6;
      touches = []
    }

    player.velocityY = player.velocityY + 0.8;
  
    player.depth=dangerT.depth;
    player.depth++;

    EnergyDrink();
   
    if(DrinkGroup.isTouching(player))
    {
      Display.velocityX=-8;
     

    } 


    Water();  
     if(waterGroup.isTouching(player))
     {
      Display.velocityX=-3;
    
    
     }
    
   

     Tortoise();

     if(TortoiseGroup.isTouching(player))
     {
       gameState=3;
      
     }
     TortoiseTwo()  ;
     if(TortoiseUpGroup.isTouching(player))
     {
       gameState=3;
      
     }
  
  }
  if(gameState===3)
  {
  
   GameOver.play();

   Display.velocityX=0;
   waterGroup.setVelocityXEach(0);
   waterGroup.visibleEach=false;
   DrinkGroup.setVelocityXEach(0);
   DrinkGroup.visibleEach=false;
   TortoiseGroup.setVelocityXEach(0);
   TortoiseGroup.destroyEach();
   dangerT.x=180;
   dangerT.y=350;
   dangerT.visible=true;
   dangerT.scale=0.15;
   
    //textSize=100;
    //fill("red");
    //text("GAME OVER",400,200);
    gameOverObj.x=400;
    gameOverObj.visible=false;
    playerOverSad.visible=true;
    playerOverSad.x=100;
    playerOverSad.y=350;
    playerOverSad.scale=0.35;
    player.visible=false;
    replayBtn.visible=true;
    replayBtn.scale=0.2;
   replayBtn.velocityY=3;
    replayBtn.y=100;
    if(replayBtn.y<=200)
    {
      replayBtn.velocityY=3;
    }
    
    if(mousePressedOver(replayBtn))
    {
      Replay();
    }

  

  }
  


if(frameCount===1000)
   {
     gameState=4;
  }


   if(gameState===4)
   {
    Display.velocityX=0;
    
     Arrow.visible=true;
     TortoiseUpGroup.destroyEach();
     TortoiseGroup.destroyEach();
     DrinkGroup.destroyEach();
     waterGroup.destroyEach();
     replayBtn.visible=false;
     dangerT.visible=false;
     playerOverSad.visible=false;
     door.visible=true; 
     thingOnDoor.visible=true;
     plrStand.visible=true;
     player.visible=false;
     yBox.visible=true;
     
     if(keyDown("S"))
     {
       Arrow.velocityX=7;

     }
     if(keyDown(DOWN_ARROW))
     {
      plrStand.y=plrStand.y+3;
      Arrow.y=Arrow.y+3;

     }
     if(keyIsDown(UP_ARROW))
     {
      plrStand.y=plrStand.y-3;
      Arrow.y=Arrow.y-3;

     }
     if(keyIsDown(RIGHT_ARROW))
     {
      plrStand.x=plrStand.x+3;
      Arrow.x=Arrow.x+3;
     }

     if(keyIsDown(LEFT_ARROW))
     {
      plrStand.x=plrStand.x-3;
      Arrow.x=Arrow.x-3;
     }

     // when arrow touches they box
     if(Arrow.isTouching(yBox))
     {
      gameState=5;
      DoorOpen.visible=true;
      DoorOpenSound.play();
     }  
    if(gameState===5)
    {
    
       Display.destroy();

       //Display2.velocityX=2;
    //if(Display2.x<200)
    //{
     // Display2.x=Display2.width/2;
    //}
       yBox.visible=false;
       Arrow.visible=false;
       Display2.visible=true;
       Display2.scale=1.35;
       door.visible=false;
       thingOnDoor.visible=false;
       plrStand.visible=false;
       player.visible=true;
       player.x=100;
       player.y=330;
       DoorOpen.visible=true;
       DoorOpen.lifetime=30;
      

       if(keyIsDown(LEFT_ARROW))
       {
        Arrow.visible=false;
        Arrow.velocityX=0;
        Display.visible=false;
        Display2.visible=true;
        Display2.scale=1.5;
        door.visible=false;
        thingOnDoor.visible=false;
        plrStand.visible=false;
        player.visible=true;
       }
       if(keyIsDown(DOWN_ARROW))
       {
        Arrow.visible=false;
        Arrow.velocityX=0;
        Display.visible=false;
        Display2.visible=true;
        Display2.scale=1.5;
        door.visible=false;
        thingOnDoor.visible=false;
        plrStand.visible=false;
        player.visible=true;
       }
       if(keyIsDown(UP_ARROW))
       {
        Arrow.visible=false;
        Arrow.velocityX=0;
        Display.visible=false;
        Display2.visible=true;
        Display2.scale=1.5;
        door.visible=false;
        thingOnDoor.visible=false;
        plrStand.visible=false;
        player.visible=true;
       }
       if(keyIsDown(RIGHT_ARROW))
       {
        Arrow.visible=false;
        Arrow.velocityX=0;
        Display.visible=false;
        Display2.visible=true;
        Display2.scale=1.5;
        door.visible=false;
        thingOnDoor.visible=false;
        plrStand.visible=false;
        player.visible=true;
       }
    }
   }
  }

function EnergyDrink()
{
    if(frameCount % 450 ===0 )
    {
      EnergyDrink1=createSprite(780,50,20,50);
      EnergyDrink1.addImage("Energy Drink" , EnergyDrinkImg);
      EnergyDrink1.velocityX=-5;
      EnergyDrink1.scale=0.1;
      DrinkGroup.add(EnergyDrink1);

      if(DrinkGroup.isTouching(player))
      {
        Display.velocityX=-8;
    
      }  
      
      player.depth=EnergyDrink1.depth;
      player.depth++;

    }
}

function Water()
{
    if(frameCount % 250 ===0 )
    {
      water=createSprite(780,100,20,50);
  
      water.addImage("water1" , waterImg);
      water.setCollider("rectangle",0,0,20,50)

      water.velocityX=-5;
      water.scale=0.35;
      water.debug=false;

     waterGroup.add(water);


     player.depth=water.depth;
     player.depth++;
    }
}

function Tortoise()
{
    if(frameCount % 100 ===0 )
    {
      tortoiseUp=createSprite(780,350,20,20);
      tortoiseUp.addImage("t1" , tortoiseImg1);
      tortoiseUp.velocityX=-5;
      tortoiseUp.scale=0.1;

     TortoiseUpGroup.add(tortoiseUp);

     if(TortoiseUpGroup.isTouching(player))
     {
       Display.velocityX=Display.velocityX-0.01;
       water.visible=false;
       
     }
     player.depth=tortoiseUp.depth;
     player.depth++;
    }
}

function TortoiseTwo()
{
    if(frameCount % 250 ===0 )
    {
      tortoise1=createSprite(780,300,20,20);
      tortoise1.addImage("t1" , tortoiseImg1);
      tortoise1.velocityX=-5;
      tortoise1.scale=0.1;

     TortoiseGroup.add(tortoise1);

     if(TortoiseGroup.isTouching(player))
     {
       Display.velocityX=Display.velocityX-0.01;
       water.visible=false;
       
     }
     player.depth=tortoise1.depth;
     player.depth++;
    }
}

function Replay()
{
  gameState=0;
  Display.velocityX=-2;
  dangerT.destroy();
  player.visible=true;
  playerOverSad.visible=false;
  replayBtn.visible=false;
  gameOverObj.visible=false;
  
  StartButton.visible=true;
  StartButton.x=400;
  waterGroup.destroyEach();
  DrinkGroup.destroyEach();


}
