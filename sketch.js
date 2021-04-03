var canvas;
var gameState=0
var contestantCount, database
var quiz, question, contestant
function setup(){
  canvas = createCanvas(850,400);
  quiz=new Quiz()
  Quiz.getState()
  Quiz.start()
database = firebase.database();
}


function draw(){
  background("pink");
  if(playerCount==4){
    game.update(1)
  }
  if(gameState==1){
    clear()
    game.play()
  }


  
}
