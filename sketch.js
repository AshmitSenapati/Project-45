var ball;

var obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10;
var obj1_img, obj2_img, obj3_img, obj4_img, obj5_img, obj6_img, obj7_img, obj8_img, obj9_img, obj10_img;

var sam;

//First Floor
var hallWall1, hallWall2,hallWall3, hallWall4;
var KitchenWall1, KitchenWall2,KitchenWall3,KitchenWall4;
var libraryWall1
var PlayAreaWall1, PlayAreaWall2, PlayAreaWall3

var pWallGroup
var wallGroup1
var objectGroup1
var trapGroup1

var securitySwitch1

//objects
var watch, book, toy;
var pit, mouseTrap1, mt2, mt3, eFence;

//common for both floors
var stair, stairCase
var gsaWall1, gsaWall2
var officeWall1, officeWall2
var sittingArea;

var gameState = 1
var lives = 6
var objectsCollected = 0
var security = "ON"

function preload(){
  //bookImage = loadImage("Images/Book_ccexpress.png")
  //jacketImage = loadImage("Images/Jacket_ccexpress.png")
  //penDriveImage = loadImage("Images/PenDrive_ccexpress.png")
  //plateImage = loadImage("Images/Plate_ccexpress.png")
  samImage = loadImage("depositphotos_51100923-stock-illustration-man-face_ccexpress.png")
  //teaCupImage = loadImage("Images/TeaCup_ccexpress.png")
  //toyImage = loadImage("Images/Toy_ccexpress.png")
  //watchImage = loadImage("Images/Watch_ccexpress.png")
}

function setup() {
  createCanvas(displayWidth-30,displayHeight+60); 

  //test1 = createSprite(800,850,20,20)

  wallGroup1 = new Group()
  objectGroup1 = new Group()
  trapGroup1 = new Group()
  pWallGroup = new Group()

  trapGroup2 = new Group()
  objectGroup2 = new Group()
  wallGroup2 = new Group()

  sam = createSprite(733,862, 40,60)
  sam.addImage(samImage)
  sam.scale = 0.1

  hallWall1 = createSprite(100,480,50,displayHeight+60);
  hallWall2 = createSprite(720,20,displayWidth-200,50)
  hallWall3 = createSprite(displayWidth-100,480,50,displayHeight + 60)
  hallWall4 = createSprite(740,displayHeight + 40,displayWidth-200,50)

  pWallGroup.add(hallWall1);
  pWallGroup.add(hallWall2);
  pWallGroup.add(hallWall3);
  pWallGroup.add(hallWall4);

  PlayAreaWall1 = createSprite(displayWidth-399.5,550,25,150)
  PlayAreaWall2 = createSprite(1178,357,300,25)
  PlayAreaWall3 = createSprite(1178,357 + 270,300,25)

  wallGroup1.add(PlayAreaWall1)
  wallGroup1.add(PlayAreaWall2)
  wallGroup1.add(PlayAreaWall3)

  libraryWall1 = createSprite(displayWidth-399.5,730,25,200)

  wallGroup1.add(libraryWall1)

  gsaWall1 = createSprite(displayWidth-1178,357 + 270,300,25)
  gsaWall2 = createSprite(399.5,730,25,200)

  wallGroup1.add(gsaWall1)
  wallGroup1.add(gsaWall2)

  officeWall1 = createSprite(displayWidth-1178,357,300,25)
  officeWall2 = createSprite(399.5,550,25,180)

  wallGroup1.add(officeWall1)
  wallGroup1.add(officeWall2)

  stair = createSprite(displayWidth/2,50,500,300)
  stairCase1 = createSprite(980,125,25,90)
  stairCase2 = createSprite(980,125,25,90)

  pWallGroup.add(stair)

  sittingArea = createSprite(734,324, 100,100)

  wallGroup1.add(sittingArea)

  watch = createSprite(163,486, 20,20)
  //watch.addImage(watchImage)
  //watch.scale = 0.09
  book = createSprite(1258,498, 35,50)
  //book.addImage(bookImage)
  //book.scale = 0.09
  toy = createSprite(1246,763, 40,40)
  //toy.addImage(toyImage)
  //toy.scale = 0.4

  objectGroup1.add(watch);
  objectGroup1.add(book);
  objectGroup1.add(toy);

  trapReveal1 = createSprite(420,910,60,40)

  pit1 = createSprite(555,636,120,90)
  eFence1 = createSprite( 1040,190,120,20)
  mouseTrap1 = createSprite(1130,820,30,30)
  mt2 = createSprite(1180,450,30,30)
  mt3 = createSprite(300,528,30,30)

  trapGroup1.add(pit1)
  trapGroup1.add(eFence1)
  trapGroup1.add(mouseTrap1)
  trapGroup1.add(mt2)
  trapGroup1.add(mt3)

  securitySwitch1 = createSprite(1290, 110,30,30)

  sittingRoomWall1 = createSprite(displayWidth-1160,300,370,25)
  sittingRoomWall1.visible = false
  sWall2 = createSprite(displayWidth-986,260 + 280,25, 270)
  sWall2.visible = false
  bedRoomWall1 = createSprite(displayWidth-1160,260 + 270,370,25) 
  bedRoomWall1.visible = false
  storageWall = createSprite(300,130, 370,20)
  storageWall.visible = false
  bRoomWall1 = createSprite(displayWidth-1105, 280 + 500,260,22)
  bRoomWall1.visible = false
  bRoomWall2 = createSprite(displayWidth-986,565 + 280,25, 150)
  bRoomWall2.visible = false
  htWall1 = createSprite(displayWidth/2 + 440,250,370,25)
  htWall1.visible = false
  htWall2 = createSprite(displayWidth-455,210 + 280,25, 270)
  htWall2.visible = false
  dWall1 = createSprite(displayWidth/2 + 440,260 + 270,370,25)
  dWall1.visible = false
  kWall1 = createSprite(displayWidth/2 + 440,460 + 270,370,25)
  kWall1.visible = false
  kWall2 = createSprite(displayWidth-452.5,690 + 280,25, 270)
  kWall2.visible = false

    wallGroup2.add(sittingRoomWall1)
    wallGroup2.add(sWall2)
    wallGroup2.add(bedRoomWall1)
    wallGroup2.add(storageWall)
    wallGroup2.add(bRoomWall1)
    wallGroup2.add(bRoomWall2)
    wallGroup2.add(htWall1)
    wallGroup2.add(htWall2)
    wallGroup2.add(dWall1)
    wallGroup2.add(kWall1)
    wallGroup2.add(kWall2)

    

    teaCup = createSprite(220,415, 15,15)
    teaCup.visible = false
    jacket = createSprite(312,587,35,50)
    jacket.visible = false
    penDrive = createSprite(1258,292, 25,12.5)
    penDrive.visible = false
    plate = createSprite(1034,572, 20,20)
    plate.visible = false

    objectGroup2.add(teaCup)
    objectGroup2.add(jacket)
    objectGroup2.add(penDrive)
    objectGroup2.add(plate)

  
}

function draw() {
  
  background(220);  

  drawSprites();
  if( keyDown("UP_ARROW")) {
    sam.y = sam.y - 4
  }
  if( keyDown("DOWN_ARROW")) {
    sam.y = sam.y + 4
  }
  if( keyDown("LEFT_ARROW")) {
    sam.x = sam.x - 4
  }
  if( keyDown("RIGHT_ARROW")) {
    sam.x = sam.x + 4
  }
  /*
  if(sam.isTouching(wallGroup)) {
    console.log("inside if condition")
    sam.x = sam.x;
    sam.y = sam.y;
  }
  */
  
   
 sam.bounceOff(wallGroup1)
 sam.bounceOff(pWallGroup)


 if(gameState === 1){
  mouseTrap1.visible = false
  mt2.visible = false
  mt3.visible = false
  eFence1.visible = false
  pit1.visible = false

  if(objectGroup1.isTouching(sam)){
    for(var i=0;i<objectGroup1.length;i++){
       if(objectGroup1[i].isTouching(sam)){
          objectGroup1[i].destroy() 
          //bulletGroup.destroyEach() 
          //explosionSound.play(); 
          objectsCollected++;
        } 
    } 
  }

  if(trapGroup1.isTouching(sam)){
  sam.x = 733
  sam.y = 862
  lives = lives - 1
  }
      
   
  
  if(trapReveal1.isTouching(sam)){
    mouseTrap1.visible = true
    mt2.visible = true
    mt3.visible = true
    eFence1.visible = true
    pit1.visible = true
  }

  if(sam.collide(securitySwitch1)){
    trapGroup1.destroyEach()
    security = 'OFF'
  }
   
  if(stairCase1.collide(sam)){
   
    trapGroup1.destroyEach()
    objectGroup1.destroyEach()
    wallGroup1.destroyEach()
    securitySwitch1.destroy()
    sittingArea.destroy()
    stairCase1.destroy()
    trapReveal1.destroy()
   
    sam.x = 738
    sam.y = 841
    gameState = 2;
     
  }

  
}

else if(gameState === 2){
    
    security = 'ON'
    sittingRoomWall1.visible = true
    sWall2.visible = true
    bedRoomWall1.visible = true
    storageWall.visible = true
    bRoomWall1.visible = true
    bRoomWall2.visible = true
    htWall1.visible = true
    htWall2.visible = true
    dWall1.visible = true
    kWall1.visible = true
    kWall2.visible = true

    teaCup.visible = true
    jacket.visible = true
    penDrive.visible = true
    plate.visible = true
  
    sam.bounceOff(wallGroup2)

    if(objectGroup2.isTouching(sam)){
      for(var j=0;j<objectGroup2.length;j++){
         if(objectGroup2[j].collide(sam)){
            objectGroup2[j].destroy() 
            //bulletGroup.destroyEach() 
            //explosionSound.play(); 
            objectsCollected++;
           } 
         } 
       }

    
  }

  
    textSize(20)
    fill('brown')
    text("Objects Collected: "+ objectsCollected,230,71 )
    text("Security Systems - " + security,1050,71)
    text("Lives - " + lives, 300,100)
    if(lives === 0) {
      gameState = 'end'
    }

  

  //fill("Red"); textSize(30); text(World.mouseX + "," + World.mouseY, displayWidth/2, displayHeight/2);
}