var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1image=loadImage("assets/car1.png")
  car2image=loadImage("assets/car2.png")
  trackimage=loadImage("assets/track.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);

  if(playerCount===2){
    game.update
  }

  if(gameState===1){
    game.play()
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
