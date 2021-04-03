class Quiz{
    constructor(){}
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        }) 
    }
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
        asyc start(){
            if(gameState===0){
                constestant=new Contestant();
                var contestantCountRef= await database.ref('contestantCount').once("value");
                if(contestantCountRef.exists()){
                    contestantCount=contestantCountRef.val()
                    contestant.getCount();
                }
                question=new Question
                question.display()
            }

}
play(){
    input1.hide();
    title.hide()
    button.hide();
    textSize("50")
    text("Quiz Results")
    Contestant.getContestantInfo();
background("yellow")
    if(allContestants !== undefined){
      

     
      var index = 0

      var x=0
      var y 
      text("Note: The contestants who answered correctly are higlighted in green!")

    }
      for(var plr in allContestants){
        
        var correctAns="4"
        if(correctANs===allContestants[plr].answer)
            fill("green")
            else
            fill("red")
        }}}
