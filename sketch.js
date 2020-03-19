var  gamestate = 0, database ;
var form , game , player , playercount , allplayers , distance = 0 ;
var car1 , car2 , car3 ,car4,CarStorage ;
var car1image , car2image , car3image , car4image , trackimage , groundimage
function preload(){
trackimage = loadImage("sprites/track2.jpg")
groundimage = loadImage("sprites/ground.png")
car1image = loadImage("sprites/car1.png")
car2image = loadImage("sprites/car2.png")
car3image = loadImage("sprites/car3.png")
car4image = loadImage("sprites/car4.png")


}
function setup(){
    database = firebase.database();
    createCanvas(displayWidth,displayHeight);
    game = new Game();
    game.getState();
    game.start();
}


function draw(){
   
    if(playercount === 4 ){
        game.update(1);
    }
  if (gamestate === 1) {
      clear();
      game.play();
    
  }
  if(gamestate===2){
      game.end();
  }
}
