var dog, happyDog, database, foodS, foodStock , position;
var backgroundImg, dogImg;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");  
 
  
}


function setup(){
    createCanvas(500,500);
    database= firebase.database();
    dog = createSprite(250,250,50,50);
    dog.addImage("dog",dogImg);
    dog.scale=0.3  ;
     foodStock =  database.ref('food');
    foodStock.on("value",readStock)
    
}

function draw(){
    background(46, 139, 87);
    
   
    if(keyWentDown("UP_ARROW")){
        
       WriteStock(foodS)
       dog.addImage("dog", happyDog) ;
    }
    

   
    
    drawSprites();
    textSize(25);
    fill("black");
    text("food remaining:"+ foodS,170,80);
    text("press up arrow to feed drago!" ,170 , 120 )
    
}

function WriteStock(petFOOD){
    if(petFOOD<=0){
        petFOOD=0
    }
    else{
        petFOOD=petFOOD-1;
    }
    database.ref('/').update({
        food:petFOOD
    })
}
function readStock(data){
    foodS = data.val();
    
}



