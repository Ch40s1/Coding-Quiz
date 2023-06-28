// assing where the text if going to written into a variable.
const questionBox = document.querySelector(".question");
const answerButtons = document.querySelectorAll(".answerBtn");
const scoreButton = document.querySelector('#score');
const timerButton = document.querySelector('#timer');
let score = 0;
let time = 60;
let currentIndex = 0;

/* how this works arrays[{object, array[{object,object}]}] Note:technically the second array is an 
object (._____.)    
array[0] is one question. 
the actual question is an object while the answer is an arrays of mutiple pair objects. */
const quizIndex = [
  {
    question: "function x (){alert(\"hello!\")} needs what to display the alert?",
    answerIndex: [ 
      {answer: "x()", correct: true},
      {answer: "It will display, does not need anything.", correct: false},
      {answer: "Another function to call it.", correct: false},
      {answer: "let y = x.display", correct: false}
    ]
  },
  {
    question: "Which is a datatype in javascript?",
    answerIndex: [ 
      {answer: "Typos", correct: false},
      {answer: "Factorials", correct: false},
      {answer: "Baloons ", correct: false},
      {answer: "Null", correct: true}
    ]
  },
  {
    question: "The DOM is ?",
    answerIndex: [ 
      {answer: "A tree of css selectors.", correct: false},
      {answer: "The document object mode", correct: false},
      {answer: "A file in index.html", correct: false},
      {answer: "The document object model", correct: true}
    ]
  },
  {
    question: " An array is a special type of___?",
    answerIndex: [ 
      {answer: "Object", correct: true},
      {answer: "Data Science", correct: false},
      {answer: "Prototype", correct: false},
      {answer: "Parameter", correct: false}
    ]
  }
]
//function starts quiz 
function showQuiz(){
  //sets a number to be incremented.
const currentQuestion = quizIndex[currentIndex];
  //currentQuestion.question is the path to the written question
questionBox.textContent = currentQuestion.question;

//gets each answer and puts it in the answerButton
answerButtons.forEach((answerButtons, index) =>{
  //answerindex is an array containing two object. (.answer) is the written answer.
  answerButtons.textContent = currentQuestion.answerIndex[index].answer;
  //listens for an event "click" then calls for function
  answerButtons.addEventListener('click', selectAnswer);
});
}
//function decides what happens when we click the answer
function selectAnswer(event){
  //listens for an event. In this case it is clicking the answer button
  const selectedAnswer = event.target.textContent;
  const currentQuestion = quizIndex[currentIndex];
  //this finds if it has the object correct
  const correctAnswer = currentQuestion.answerIndex.find(answerObj => answerObj.correct);
  //if the question had the correct object
  if(selectedAnswer === correctAnswer.answer){
    //increment index so question moves to next
    currentIndex++;
    //score goes up by 10
    score+= 10;
    //score carries over
    updateScore();

  }else{
    //is it is wrong then deduct time but still move to next question
    currentIndex++;
    deductTime();
  }

  //is the index is at the end 
  if (currentIndex === quizIndex.length){
    //go to score screen
    scoreScreen();
  }else {
    //else keep going in quiz
    showQuiz();
  }
}


function scoreScreen(){
  //carries over the score into the local storage
  localStorage.setItem("score", score);
  //moves the window to the score html
  window.location.href = "./score.html";
}


function updateScore(){
  scoreButton.textContent = score;
}

//function reduces time when the answer is wrong 
function deductTime(){
  //time is 1/4 of questions
  time -=25;
  //display time to its box in the html
  timerButton.textContent = time;
}

//starts the timer when it is loaded.
function startTime(){
  //sets an interval to deduct time ecery 1 second
  const timerInterval = setInterval(() => {
    time --;
    timerButton.textContent = time;
    if(time <=0){
      //if time reaches zero then ends quiz
      clearInterval(timerInterval);
      endQuiz();
    }
    //1000 miliseconds = 1 second 
  }, 1000);
}

function endQuiz(){
  //selects the essentially the whole page and gets rid of it
  const main = document.querySelector('#quiz-container');
  const header = document.querySelector('header');
  header.remove();
  main.remove();

  //creates a container that will hold the game over screen
  const gameOver = document.createElement('h1');
  const homeButton = document.createElement('button');
  const body =document.querySelector('body');

  //creates a home button that allows to go back to the home screen.
  homeButton.textContent = "Home";
  var anchor = document.createElement('a');
  anchor.href = "../index.html";
  anchor.appendChild(homeButton);
  homeButton.classList.add('home-btn');
  gameOver.classList.add("over");
  gameOver.textContent = 'GAME OVER';
 

  body.append(gameOver);
  body.append(anchor);


}
function startQuiz(){
  scoreButton.textContent = 0;
  timerButton.textContent = 60;
  showQuiz();
  startTime();
}
//begins quiz when loaded
startQuiz();