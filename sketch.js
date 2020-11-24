var dog, dogImg;
var happyDog, happyDogImg;
var database;
var foodStock,foodS;

function preload()
{
	var dogImg = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  var dog = createSprite(250,250,20,20);
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

 if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
 } 

  drawSprites();
  
  textSize(16);
  fill("red");
  text("Note: Press UP_ARROW key to feed Drago Milk!",100,50)

}
function readStock(data){
    foodS = data.val();
}

function writeStock(){
   if(x<=0){
     x = 0;
   }
   else{
     x = x+1;
   }
  database.ref("/").update({
    Food:x
  })
}



