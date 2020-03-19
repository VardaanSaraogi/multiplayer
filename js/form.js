class Form { 
constructor(){
    this.input = createInput("GamerTag")
    this.button = createButton('Join Now')
    this.greeting = createElement('h4')
}
hide(){
this.input.hide();
this.button.hide();
this.greeting.hide();
}
display(){
    var title = createElement ('h3');
title.html("Forza by Vardaan");
title.position(displayWidth/2,50)



this.input.position(displayWidth/2-50,displayHeight/2-50)
this.button.position(displayWidth/2+50,displayHeight/2-50)
this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playercount +=1;
    player.index = playercount;
    player.update();
    player.updateCount(playercount)
    this.greeting.html("Thanks You for joining Forza , " + player.name)
    this.greeting.position(displayWidth/2-30,displayHeight/2);
})
}
}
