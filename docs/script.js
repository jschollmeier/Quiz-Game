//create variables that represent elements from the html
var timeEl = document.querySelector(".time");
var scoreEl = document.querySelector(".score");
var mainEl = document.getElementById("main");
var form = document.getElementById("initials");
var initials = document.querySelector("#fname");
var scoreHi =document.getElementById("scoreHi");
var hiList = document.getElementById("list");
var ident = document.getElementById("ident");
var scoreTag = document.getElementById("score-tag");
var header = document.getElementById("heading");
var textry = document.getElementById("texty");
var buttony = document.getElementById("buttons");
var adder = document.getElementById("status"); 
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var elbutton = document.getElementsByClassName("elbutton");

//create arrays for the questions and answers and hiscores
var questions = ["Commonly used data types DO NOT include: ?", "The condition in an if/else statement is enclosed within what?", "Arrays in Javascript can be used to store? ", "String values in javascript must be enclosed within ____ when being assigned to variables.", "A very useful tool used during development/debugging for printing objects to the debugger is called?"] ;
var answer1 = ["strings", "booleans", "alerts", "numbers"]; 
var answer2 = ["quotes","curly brackets","parenthesis","square brackets"];
var answer3 = ["booleans", "strings and numbers", "other arrays", "All of the above"];
var answer4 = ["quotes", "curly brackets", "parenthesis", "square brackets"];
var answer5 = ["console.log", "alert", "system.print", "fix me please"];
var answers = [answer1,answer2,answer3,answer4,answer5];
var touchies = [button1,button2,button3,button4];
var hiScores = ["KJS: 200", "JPR: 175"]
//create variables for iterations and scores and seconds left
var i = 0; 
var score = 0;
var secondsLeft = 60;
//run init to read array from local storage
init();


//event listener for the start button that listeners for it to be clicked and then creates the first question page and sets the timer
buttony.addEventListener("click", function(){ 
    makePage();
    setTime();   

}) 

//event listener for the first button that listners for it to be clicked and runs a set of conditions that see if button1 was the correct answer for that particular question if it is not it displays incorrect that makes the page for the next question as well as docking ten points and subtracting five seconds from the timer if it is correct it adds fifty points and displays correct and makes the next question page
 
button1.addEventListener("click", function(){
    console.log("uno is working")
    i--;
        
        if(answers[i]===answer1){
             adder.textContent = "Incorrect."; 
             score = score - 10;
             secondsLeft = secondsLeft - 5;
             i++;
             makePage();
        }   

        else if(answers[i]===answer2){
            adder.textContent = "Incorrect.";
            score = score - 10;
            secondsLeft = secondsLeft - 5;
            i++;
            makePage();
        }

        else if(answers[i]===answer3){
            adder.textContent = "Incorrect.";
            score = score - 10;
            secondsLeft = secondsLeft - 5;
            i++;
            makePage();
        }

        else if(answers[i]===answer4){
            adder.textContent = "Correct!";
            score = score + 50;
            i++;
            makePage();
        }

        else if(answers[i]===answer5){
            adder.textContent = "Correct!";
            score = score + 50;
            i++;
            endPage();
        }
        

        else{
            console.log("didnt work");
        }

        

        
})

//event listener for button2 does the same conditionals as button1


button2.addEventListener("click", function(){
    console.log("dos is working")

    i--; 
      
    if(answers[i]===answer1){
         adder.textContent = "Incorrect.";
         score = score - 10;
         secondsLeft = secondsLeft - 5;
         i++;
         makePage();
    }   

    else if(answers[i]===answer2){
        adder.textContent = "Incorrect.";
        score = score - 10;
        secondsLeft = secondsLeft - 5;
        i++;
        makePage();
    }

    else if(answers[i]===answer3){
        adder.textContent = "Incorrect.";
        score = score - 10;
        secondsLeft = secondsLeft - 5;
        i++;
        makePage();
    }

    else if(answers[i]===answer4){
        adder.textContent = "Incorrect.";
        score = score - 10;
        secondsLeft = secondsLeft - 5;
        i++;
        makePage();
    }

    else if(answers[i]===answer5){
        adder.textContent = "Incorrect.";
        score = score - 10;
        secondsLeft = secondsLeft - 5;
        i++;
        endPage();
        
    }
    

    else{
        console.log("didnt work");
    
    }
        

        

})

//event listener for button3 does the same as first two event listeners

button3.addEventListener("click", function(){
    console.log("tres is working");

    i--;
        
        
        
        
    if(answers[i]===answer1){
             adder.textContent = "Correct!";
             score = score + 50;
             i++;
             makePage();
    }   

    else if(answers[i]===answer2){
            adder.textContent = "Correct!";
            score = score + 50;
            i++;
            makePage();
    }

    else if(answers[i]===answer3){
            adder.textContent = "Incorrect.";
            score = score - 10;
            secondsLeft = secondsLeft - 5;
            i++;
            makePage();
    }

    else if(answers[i]===answer4){
            adder.textContent = "Incorrect.";
            score = score - 10;
            secondsLeft = secondsLeft - 5;
            i++;
            makePage();
    }

    else if(answers[i]===answer5){
            adder.textContent = "Incorrect.";
            score = score - 10; 
            secondsLeft = secondsLeft - 5;
            i++;
            endPage();

    }
        

    else{
        console.log("didnt work");
        
    }
        
        
        

})

//event listener for button4 does the same as the other event listeners

button4.addEventListener("click", function(){
    console.log("four is working");

    i--;
         
        
        if(answers[i]===answer1){
             adder.textContent = "Incorrect.";
             score = score - 10;
             secondsLeft = secondsLeft - 5;
             i++;
             makePage();
        }   

        else if(answers[i]===answer2){
            adder.textContent = "Incorrect.";
            score = score - 10;
            secondsLeft = secondsLeft - 5;
            i++;
            makePage();
        }

        else if(answers[i]===answer3){
            adder.textContent = "Correct!";
            score = score + 50;
            i++;
            makePage();
        }

        else if(answers[i]===answer4){
            adder.textContent = "Incorrect.";
            secondsLeft = secondsLeft - 5;
            score = score - 10;
            i++;
            makePage();
        }

        else if(answers[i]===answer5){
            adder.textContent = "Incorrect.";
            secondsLeft = secondsLeft - 5;
            score = score - 10;
            i++;
            endPage();
            
        }
        

        else{
        console.log("didnt work");
        }

        

    
})


//this function sets the timer up as well as displaying the initial score of 0

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent ="Timer: " + secondsLeft + " seconds left";
      scoreEl.textContent = "Score: " + score;
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        
        endPage();
      }
  
    }, 1000);
    
  }

  
//this function is what displays each new question along the way

function makePage(){
    buttony.style.visibility = 'hidden';



    
    var j = i+1;
    header.textContent = "Question " + j;
    textry.textContent = questions[i];
    
for(var l =0; l<answers[i].length; l++){
    var q = l+1;
    
    touchies[l].textContent = q + ". " + answers[i][l];
    touchies[l].style.visibility = 'visible';
    
}

    i++;
} 

//this function changes the screen to the end of the game page where high scores are entered and displayed

function endPage(){
    header.textContent = "GAME OVER";
    textry.textContent = "Your score is: " + score;
    textry.style.fontSize = 30+'px';
    scoreEl.style.visibility = 'hidden';
    timeEl.style.visibility = 'hidden';
    button1.style.visibility = 'hidden';
    button2.style.visibility = 'hidden';
    button3.style.visibility = 'hidden';
    button4.style.visibility = 'hidden';
    adder.style.visibility = 'hidden';
    form.style.visibility = 'visible';
    button5.style.visibility = 'visible';
    scoreTag.style.visibility = 'visible';
    hiList.style.visibility = 'visible';
    


    renderHiScores();



}

//this function creates the list of high scores

function renderHiScores() {
  
  hiList.innerHTML = "";
  

  
  for (var i = 0; i < hiScores.length; i++) {
    var hiScore = hiScores[i];

    var li = document.createElement("li");
    li.textContent = hiScore;
    hiList.appendChild(li);
  }
}

//event listener for the submit button for the form stores the scores in local storage and displays the high scores

button5.addEventListener("click", function(event) {
  event.preventDefault();
  button5.style.visibility = 'hidden';
  initials.style.visibility = 'hidden';
  ident.style.visibility = 'hidden';

  console.log(initials.value);

  var hiText = initials.value.trim();

  
  if (hiText === "") {
    return;
  }

  
  hiScores.push(hiText + ": " + score);
  initials.value = "";
  storeScore();

  
  renderHiScores(); 
  
  
});
//event listener for the form does the same as the submit button

form.addEventListener("submit", function(event){
    event.preventDefault();
    button5.style.visibility = 'hidden';
    initials.style.visibility = 'hidden';
    ident.style.visibility = 'hidden';
  
    console.log(initials.value);
  
    var hiText = initials.value.trim();
  
    
    if (hiText === "") {
      return;
    }
  
    
    hiScores.push(hiText + ": " + score);
    initials.value = "";
    storeScore();
  
    
    renderHiScores();


})

//this function grabs the stored high scores from local storage

function init() {
    
    var storedScores = JSON.parse(localStorage.getItem("scores"));
  
    if (storedScores !== null) {
      hiScores = storedScores;
    }

  }
  //this function stores the high scores in local storage
  
  function storeScore() {
    
    localStorage.setItem("scores", JSON.stringify(hiScores));
  }

 