//create arrays for the questions and answers
var header = document.getElementById("heading");
var textry = document.getElementById("texty");
var buttony = document.getElementById("buttons");
var adder = document.getElementById("status");
var questions = ["Commonly used data types DO NOT include: ", "The condition in an if/else statement is enclosed within ", "Arrays in Javascript can be used to store ", "String values in javascript must be enclosed within ____ when being assigned to variables", "A very useful tool used during devolpment/debugging for printing objects to the debugger is called"] ;
var answer1 = ["strings", "booleans", "alerts", "numbers"]; 
var answer2 = ["quotes","curly brackets","parenthesis","square brackets"];
var answer3 = ["booleans", "strings and numbers", "other arrays", "All of the above"];
var answer4 = ["quotes", "curly brackets", "parenthesis", "square brackets"];
var answer5 = ["console.log", "alert", "system.print", "fix me please"];
var answers = [answer1,answer2,answer3,answer4,answer5];
var i = 0;
var button;



buttony.addEventListener("click", function(){
    buttony.textContent = "Next Question";
    var j = i+1;
    header.textContent = "Question " + j;
    textry.textContent = questions[i];
    
for(var l =0; l<answers[i].length; l++){
    var q = l+1;
    var ol = document.createElement("ol");
    button = document.createElement("button"); 
    button.onclick = function(event){
        i--;
        let target = event.target;
        console.log(target.textContent);
        
        
        if(answers[i]===answer1){
            if (target.textContent ===  "3. alerts"){
            
                adder.textContent = "correct";

            }
            else{
    
                adder.textContent = "incorrect";
           
            }
        }   

        else if(answers[i]===answer2){
            if (target.textContent === "3. parenthesis"){
                
                adder.textContent = "correct";
              
            }
            else{
                
                adder.textContent = "incorrect";
                     
            }
        }

        else if(answers[i]===answer3){
            if(target.textContent === "4. All of the above"){
                
                adder.textContent = "correct";
                
            }
            else{
                
                adder.textContent = "incorrect";
                
            }
        }

        else if(answers[i]===answer4){
            if(target.textContent === "1. quotes"){
                
                adder.textContent = "correct";
                
            }
            else{
                
                adder.textContent = "incorrect";
               
            }
        }

        else if(answers[i]===answer5){
            if(target.textContent === "1. console.log"){
              
                adder.textContent = "correct";
                
            }
            else{
                
                adder.textContent = "incorrect";
                
            }
        }
        

    else{
        console.log("didnt work");
    }
        i++;
        
    }
    //button.setAttribute("data-index", l);
    
    
    button.textContent = q + ". " + answers[i][l];
    ol.appendChild(button);
    textry.appendChild(ol);
}

    

    i++;
    

}) 


