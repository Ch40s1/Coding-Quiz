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
// assing where the text if going to written into a variable.
const questionBox = document.querySelector(".question");
const answerButtons = document.querySelectorAll(".answerBtn");
const scoreButton = document.querySelector('#score');
const timerButton = document.querySelector('.timer');
// set a current index for the array quizIndex
let currentIndex = 0;
// function starts the quiz
let score = 0;
let time = 60;
timerButton.textContent = time;
// scoreButton.textContent = score;
function showQuiz() {
  const currentQuestion = quizIndex[currentIndex];
  questionBox.textContent = currentQuestion.question;

  answerButtons.forEach((answerButton, index) => {
    answerButton.textContent = currentQuestion.answerIndex[index].answer;
    answerButton.removeEventListener('click', answerClickHandler);
    answerButton.addEventListener('click', answerClickHandler);
  });
}
function startTime(){
  const timerInterval = setInterval (() =>{
    time--;
    timerButton.textContent = time;

    if (time <= 0){
      clearInterval(timerInterval);
      //add end of quiz here
    }
  }, 1000);
}
answerButtons.forEach((answerButton, index) => {
  answerButton.addEventListener('click', () => {
    selectAnswer(index, currentQuestion.answerIndex[index].correct);
  });
});
// select answer is going to check if answer is correct.
function selectAnswer(selectedIndex, isCorrect){
  /* checks answer if it is correct and if it is then add to the 
  current question index making it go next */
  if(isCorrect){
    console.log("Correct answer");
    score++;
    updateScore();
  }else {
    console.log("Icorrect answer");
  }
  currentIndex++;
   // nested (if) checks for the length of array and if it has not reached end then diplay quiz again.
  if (currentIndex < quizIndex.length){
    showQuiz();
  }else {
    // else it is complete
    console.log("quiz completed!");
    // eventually add code for end of quiz.
  }
}
function updateScore(){
  scoreButton.textContent = score;
}


showQuiz();
startTime();

// <!-- html button designing and calling the event in javascript -->
// <input id="btntest" type="button" value="Check" 
//        onclick="window.location.href = 'http://www.google.com'" />
/*Sorry I think my brain's fried from staring at code all night.. I'm struggling to articulate what you need to fix based on the code you already have.
I'm pretty sure the problem is how you're attaching event listeners to your code. For whatever reason, your selectAnswer() is running the code for your previous selections. 
In other words, when I answer question 2, selectAnswer() fires off twice, once for question 1 and a second time for question 2.
The same happens for question 3. When I answer question 3, selectAnswer() fires off three times for the previous questions I answered, etc. etc.
You probably need to re-structure how you're attaching event listeners to each answer box and potentially the event handlers that are getting to those event listeners
The reason why your game progresses after selecting the correct answer for the first question is because selectAnswer() 
fires off your first selection everytime for some reason, so it's gonna increment currentNumber and re-trigger showQuiz()
Try going through and re-building your javascript piece by piece. Making sure to get a full grasp on each part 
(e.g. get the currentQuestion rendered to the UI first, then get the answer boxes populated, then attach event listeners to each answer box, 
then get the logic for checking if the answer is correct, etc. etc.) */

// function selectAnswer(selectedIndex, isCorrect){
//   /* checks answer if it is correct and if it is then add to the 
//   current question index making it go next */
//   if(isCorrect){
//     console.log("Correct answer");
//     score++;
//     updateScore();
//   }else {
//     console.log("Icorrect answer");
//   }
//   currentIndex++;
//    // nested (if) checks for the length of array and if it has not reached end then diplay quiz again.
//   if (currentIndex < quizIndex.length){
//     showQuiz();
//   }else {
//     // else it is complete
//     console.log("quiz completed!");
//     // eventually add code for end of quiz.
//   }
// }


// function showQuiz (){
//   // creates a const that holds the current question. While setting the quizIndex array to the currentIndex
//   const currentQuestion = quizIndex[currentIndex];
//   // writes the quizIndex array to the box that holds the question
//   questionBox.textContent = currentQuestion.question;

//   /* path to the answerIndex array sets a function that will give the answers on by one. The array will 
//   set its content on the box that holds the answer */
//   currentQuestion.answerIndex.forEach((answers, index) => {
//     answerButtons[index].textContent = answers.answer;
//     // sets an event that will listen for a click and calls the function. selectAnswer.
//     answerButtons[index].addEventListener('click', function(){
//       selectAnswer(index, answers.correct);
//     });
//   });