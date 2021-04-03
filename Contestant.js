class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.button = createButton('Submit');
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
    display(){
        this.button.mousePressed(()=>{
           
            this.button.hide();
            this.title.hide()
            this.input1.hide
            contestant.name=this.input1.value()
            contestantCount+=1
            contestant.index=contestantCount
            contestant.update();
      contestant.updateCount(contestantCount);
        )}
    }