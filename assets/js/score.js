
//get the score from localStorage and it is made into an interger
let score = parseInt(localStorage.getItem("score")) || 0;

// gets the node for where the final score will be displayed and display the final score
const finalScore = document.querySelector('.final-score');
finalScore.textContent = score;

// get the input and submit button elements.
const initialsInput = document.querySelector("#initials");
const sendScore = document.querySelector("#send-score");

//get the score list element
const scoreList = document.querySelector(".current-scores");

// Function to update the score list
function updateScoreList() {
  // Clear existing score list
  scoreList.innerHTML = "";

  // Retrieve scores from localStorage and get made into a array.
  const scores = JSON.parse(localStorage.getItem("scores")) || [];

  // Iterate over the scores array and add them to the list
  scores.forEach((entry) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${entry.initials} Score: ${entry.score}`;
    scoreList.appendChild(listItem);
  });
}

// Add event listener to the submit button
sendScore.addEventListener("click", function(event) {
  event.preventDefault();
  //this makes the initials capital 
  const initials = initialsInput.value;

  //Create a new score entry.
  const newScore = { initials, score };

  //Retrieve scores from localStorage.
  const scores = JSON.parse(localStorage.getItem("scores")) || [];

  // Add the new score to the scores array
  scores.push(newScore);

  // Save the updated scores to localStorage. Note: they have to be stringified bc they are arrays and cannot be saved.
  localStorage.setItem("scores", JSON.stringify(scores));

  // Update the score list
  updateScoreList();

  // Clear the initials input field
  initialsInput.value = "";
});

//update score by reloading page.
updateScoreList();