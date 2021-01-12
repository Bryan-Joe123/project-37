var dog, happyDog,foodS,hunger=0;
var database, foodStock, dogName, lastFed, gameState;
 

function preload(){
    happyDog=loadImage("Images/happydog.png");
    dog=loadImage("Images/Dog.png");

    foodImage=loadImage("Images/Milk.png")

    bedRoom=loadImage("Images/virtual pet images/Bed Room.png")
    garden=loadImage("Images/virtual pet images/Garden.png")
    washRoom=loadImage("Images/virtual pet images/Wash Room.png")
}

function setup(){
    createCanvas(800,500);
    database=firebase.database();
    foodStock=database.ref('pet/food');
    food = new Food(foodImage);
    food.getFoodStock();
    food.updateLastFed();

    dog = new Dog(600,250,{happy:happyDog,hungry:dog});    
    form = new Form();
    form.display();  
    dog.getName();
    food.getLastFed();
}

function draw(){
    switch (hour()) {
        case lastFed+1:
            food.setBackground(garden);
            dog.dogSprite.visible=false;
            form.hide();
            gameState="playing";
            food.updateGameState("playing");
            break;
        case lastFed+2:
            food.setBackground(bedRoom);
            dog.dogSprite.visible=false;
            form.hide();
            gameState="sleeping";
            food.updateGameState("sleeping");
            break;
        case lastFed+3:
            food.setBackground(washRoom);
            dog.dogSprite.visible=false;
            form.hide();
            gameState="bathing";
            food.updateGameState("bathing");
            break
        case lastFed+4:
            food.setBackground(washRoom);
            dog.dogSprite.visible=false;
            form.hide();
            gameState="bathing";
            food.updateGameState("bathing");
            break

        default:
            food.updateGameState("hungry");
            gameState="hungry";
            form.show();
    
            food.setBackground(255);
    
            dog.display(happyDog);
            textSize(20);
            fill("black");
            text(dogName+" the dog",550,175)
    
            if(lastFed>=12){
                text("Last Fed: "+lastFed%12+"PM",250,30);
            }else if(lastFed==0){
                text("Last Fed: 12AM",250,30);
            }else{
                text("Last Fed: "+lastFed+"AM",250,50);
            }
    
            dog.dogSprite.visible=true;  
    }

    drawSprites();
}
