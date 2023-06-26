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
    question: "Question1",
    answerIndex: [ 
      {answer: "true", correct: true},
      {answer: "false!", correct: false},
      {answer: "flase", correct: false},
      {answer: "flase", correct: false}
    ]
  },
  {
    question: "Question2",
    answerIndex: [ 
      {answer: "false", correct: false},
      {answer: "false", correct: false},
      {answer: "true", correct: true},
      {answer: "false", correct: false}
    ]
  },
  {
    question: "Question3",
    answerIndex: [ 
      {answer: "false", correct: false},
      {answer: "false", correct: false},
      {answer: "false", correct: false},
      {answer: "true", correct: true}
    ]
  },
  {
    question: "Question4 ?",
    answerIndex: [ 
      {answer: "true", correct: true},
      {answer: "false", correct: false},
      {answer: "false", correct: false},
      {answer: "false", correct: false}
    ]
  }
]

function showQuiz(){
const currentQuestion = quizIndex[currentIndex];
questionBox.textContent = currentQuestion.question;

answerButtons.forEach((answerButtons, index) =>{
  answerButtons.textContent = currentQuestion.answerIndex[index].answer;
  answerButtons.addEventListener('click', selectAnswer);
});
}

function selectAnswer(event){
  const selectedAnswer = event.target.textContent;
  const currentQuestion = quizIndex[currentIndex];
  const correctAnswer = currentQuestion.answerIndex.find(answerObj => answerObj.correct);
  if(selectedAnswer === correctAnswer.answer){
    currentIndex++;
    score++;
    updateScore();
  }else{
    currentIndex++;
    deductTime();
  }
  showQuiz();
}

function updateScore(){
  scoreButton.textContent = score;
}
function deductTime(){
  time -=10;
  timerButton.textContent = time;
}
function startTime(){
  const timerInterval = setInterval(() => {
    time --;
    timerButton.textContent = time;
    if(time <=0){
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function endQuiz(){
  const main = document.querySelector('#container');
  const header = document.querySelector('header');
  header.remove();
  main.remove();

  const gameOver = document.createElement('h1')
  gameOver.classList.add("over");
  gameOver.textContent = 'GAME OVER';
  const body =document.querySelector('body');

  body.append(gameOver);


}
function startQuiz(){
  scoreButton.textContent = 0;
  timerButton.textContent = 60;
  showQuiz();
  startTime();
}
startQuiz();