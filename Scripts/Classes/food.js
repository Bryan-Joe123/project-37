class Food{
    constructor(image){
        this.image=image;
    }

    display(){
        var x=80,y=120;

        imageMode(CENTER);
        // image(this.image,720,220,70,70);

        if(gameState="hungry"){
            if(foodStock!=0){
                for(var z=0;z<foodStock;z++){
                    if(z%10==0){
                        x=80;
                        y=y+50;
                    }
                    image(this.image,x,y,50,50);
                    x=x+30;
                }
            }
        }
    }

    getFoodStock(){
        var foodStockRef=database.ref('pet/foodStock');
        foodStockRef.on("value",function(data){
            console.log(data.val());
            foodStock=data.val();
        });
    }

    getHunger(){
        var hungerRef=database.ref('pet/hunger');
        hungerRef.on("value",function(data){
            hunger=data.val();
        });
    }

    updateFoodStock(amount){
        foodStock=foodStock+amount;
        database.ref('pet').update({foodStock:foodStock});
    }

    getLastFed(){
        var lastFedRef=database.ref('pet/lastFed');
        lastFedRef.on("value",function(data){
            lastFed=data.val();
        });
    }

    updateLastFed(amount){
        database.ref('pet').update({lastFed:hour()});
        
    }

    getGameState(){
        var gameStateRef=database.ref('pet/gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        });
    }

    setBackground(image){
        background(image);
    }

    updateGameState(state){
        database.ref('pet').update({gameState:state});
    }

    updateHunger(amount){
        hunger=hunger+amount;
        database.ref('pet').update({hunger:hunger});
    }
}