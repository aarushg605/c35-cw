class Game {
  constructor() {}

  getState(){
    var gameStateRef=database.ref("gameState");
    gameStateRef.on("value",function(data)){
      gameState=data.val()
    }
  }
  update(state){
    database.ref("/").update({
      gameState:state
    })
  }
  start() {
    form = new Form();
    form.display();

    car1=createSprite(width/2-50,height-100)
    car1.addImage("car1",car1image)
    car1.scale=0.07

    car2=createSprite(width/2+100,height-100)
    car2.addImage("car2",car2image)
    car2.scale=0.07
    
    cars=[car1,car2]
  }
  HANDLEELEMENT(){
    form.hide();
    form.tittleimage.position(40,50)
    form.tittleimage.class("gametittle")
  }
  play(){
    this.HANDLEELEMENT();
    drawSprites()
  }
}
