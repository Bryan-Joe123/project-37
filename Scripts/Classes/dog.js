class Dog{
    constructor(x,y,image){
        this.dogSprite=createSprite(x,y);
        this.dogSprite.scale=0.2;
        this.dogSprite.addImage(image.happy);

        // this.mood=happy;
    }

    display(image){
        this.dogSprite.addImage(image);
    }

    getName(){
        var nameRef=database.ref('pet/name');
        nameRef.on("value",function(data){
            dogName=data.val();
        });
    }

    setName(name){
        database.ref('pet').update({name:name})
    }
}