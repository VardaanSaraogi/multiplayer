class Game{
    constructor(){}
    getState(){
       var gamestaterefer = database.ref('gamestate');
       gamestaterefer.on("value",function(data){
           gamestate = data.val();
       })

    }
    update(state){
        database.ref('/').update({
           gamestate:state 
        })
    }
     async start(){
        if(gamestate===0){
        player = new Player();
        var playercountref = await database.ref('playerCount').once("value")
        if(playercountref.exists()){
        playercount = playercountref.val();
        player.getCount();
        }
        form = new Form();
        form.display();
    
        }
        car1 = createSprite(100,200);
        car1.addImage("car1" ,car1image)
        
        car2 = createSprite(300,200);
        car2.addImage("car2" ,car2image)
        car3 = createSprite(500,200);
        car3.addImage("car3" ,car3image)
        car4 = createSprite(700,200);
        car4.addImage("car4" ,car4image)
        CarStorage = [car1,car2,car3,car4];
    }
    
    play (){
     form.hide();
     textSize(20)   
     text("Race Off",100,90)
     Player.getPlayerInfo();

     if(allplayers !== undefined){
         background("#c68767")
         image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5)
         var index = 0 ;
         var x = 150;
         var y ;
         for(var plr in allplayers ){
           index = index+1;
           x += 200  
           y = displayHeight - allplayers[plr].distance
           CarStorage[index-1].x = x
           CarStorage[index-1].y = y
           if(index === player.index){
               CarStorage[index-1].shapeColor = "red"
               camera.position.x = displayWidth/2
               camera.position.y = CarStorage [index-1].y
           }
         }
     
    
        }
if(keyIsDown(UP_ARROW) && player.index !== null) {
 player.distance += 50 
 player.update(); 
}
if(player.distance>3800){
    gamestate = 2 ;
}
drawSprites();
    }
end(){
    console.log("GAME ENDED")
    game.update(2);
}


}