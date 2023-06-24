// make a object with q and a 
const quizIndex = [
  {
    question: "how are you ?",
    answerIndex: [ 
      {answer: "lol!", correct: true},
      {answer: "happy!", correct: false},
      {answer: "sadge", correct: false},
      {answer: "bruh", correct: false}
    ]
  },
  {
    question: "how are you2 ?",
    answerIndex: [ 
      {answer: "lol!", correct: true},
      {answer: "happy!", correct: false},
      {answer: "sadge", correct: false},
      {answer: "bruh", correct: false}
    ]
  },
  {
    question: "how are you3 ?",
    answerIndex: [ 
      {answer: "lol!", correct: true},
      {answer: "happy!", correct: false},
      {answer: "sadge", correct: false},
      {answer: "bruh", correct: false}
    ]
  },
  {
    question: "how are you4 ?",
    answerIndex: [ 
      {answer: "lol!", correct: true},
      {answer: "happy!", correct: false},
      {answer: "sadge", correct: false},
      {answer: "bruh", correct: false}
    ]
  }
]
// assign q and a to designated box 
const questionBox = document.querySelector(".question");
const answerBoxes = document.querySelectorAll(".answerBtn");
//
let currentNumber = 0;
function showQuiz (){
  const currentQuestion = quizIndex[currentNumber];
  questionBox.textContent = currentQuestion.question;

  currentQuestion.answerIndex.forEach((answers, index) => {
    answerBoxes[index].textContent = answers.answer;
    answerBoxes[index].addEventListener('click', function(){
      selectAnswer(index, answers.correct);
    });
  });
}

function selectAnswer(selectedIndex, isCorrect){
  //checks answer if it is correct and 
  if(isCorrect){
    console.log("Correct answer");
    currentNumber++;
    if (currentNumber < quizIndex.length){
      showQuiz();
    }else {
      console.log("quiz completed!");
      //add completion code later lol
    }
  }else {
    console.log("Icorrect answer");
  }
}
showQuiz();

// when aswers is clicked show answer right or wrong 

// if answer is wrong deduct Time 

// if answer is right add points 

// when question is answered move onto next question

// if question is at the end move to leaderboard screen

// put initials in a box and submit to the leaderboard 

// game can be restarted 

// <!-- html button designing and calling the event in javascript -->
// <input id="btntest" type="button" value="Check" 
//        onclick="window.location.href = 'http://www.google.com'" />