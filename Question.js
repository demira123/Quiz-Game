class Form {
    
      constructor() {
        this.input1 = createInput("Name");
        
        this.greeting = createElement('h2');
      }
      hide(){
        this.greeting.hide();
        
        this.input1.hide();
      }
    
      display(){
        title.html("My Quiz Game");
        this.title.position(350, 0); //400 
    
        this.question.html("Question: What month of the year has 28 days?");
        this.question.position(150,80);
    
        this.option1.html("1: January")
        this.option1.position(150,100)
        this.option2.html("2: September")
        this.option2.position(150,120)
        this.option3.html("3: February")
        this.option3.position(150,140)
        this.option4.html("4: All of them")
        this.option4.position(150,100)
        this.input1.position(150,230)
      }

}
    
      
    