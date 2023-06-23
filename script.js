// load quiz //
// const startBtn = document.querySelector("#start-btn");

// //click start and go to quiz html
// startBtn.addEventListener("click", () => {
//   window.location.href = "./html-pages/quiz.html";
// });

//setting up the quiz///

// make a object with q and a 
const quizIndex = [
  {
    question: "how are you ?",
    answerIndex: [ 
      {answer: "lol!", correct: true},
      {answer: "happy!", correct: false},
      {answer: "sadge", correct: false},
      {amswer: "bruh", correct: false}
    ]
  }
]
// assign q and a to designated box 
const questionBox = document.querySelector(".question");
// const answerBox = document.querySelector(".answerBtn");
// questionBox.textContent = quizIndex[0].question;
// answerBox.textContent = quizIndex[0].answerIndex[1].answer;
let currentQuestion = quizIndex[0].question;
questionBox.textContent = currentQuestion;
const answerBoxes = document.querySelectorAll(".answerBtn");
let currentAnswer = quizIndex[0].answerIndex[0].answer;
answerBoxes[0].textContent = currentAnswer;
// let answerIndexLength = quizIndex[0].answerIndex.length;
// console.log(answerIndexLength);
// let answerContLenth = answerCont.length;
// console.log(answerContLenth);
/* when it is answerCont 0 then answerIndex should also be 0. quiz Index is the same.*/
// function x(){
//   let y = 0;
//   let z = 0;
// }
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