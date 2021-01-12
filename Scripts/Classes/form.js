class Form{
    constructor(){
        this.nameInput;
        this.changeNameButton;
        this.feedButton;
        this.addFoodButton;
    }

    hide(){
        this.nameInput.hide();
        this.changeNameButton.hide();
        this.feedButton.hide();
        this.addFoodButton.hide();
    }

    show(){
        this.nameInput.show();
        this.changeNameButton.show();
        this.feedButton.show();
        this.addFoodButton.show();
    }

    display(){
        //Name Button
        this.nameInput=createInput("Name");
        this.nameInput.position(50,100);
        this.changeNameButton=createButton("Change Name");
        this.changeNameButton.position(50,125);
        this.changeNameButton.mousePressed(function(){
            dog.setName(this.nameInput.value());
        }); 

        //Feed Button
        this.feedButton=createButton("Feed");
        this.feedButton.position(width/2,10)
        this.feedButton.mousePressed(function(){
            if(foodStock>0){
                food.updateHunger(+5)
                food.updateFoodStock(-1);
                food.updateLastFed();
                food.getLastFed();
            }
        }); 

        // Add Food button
        this.addFoodButton=createButton("Add Food");
        this.addFoodButton.position(width/2+50,10)
        this.addFoodButton.mousePressed(function(){
            food.updateFoodStock(+1);
        }); 
    }
}