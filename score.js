const score = localStorage.getItem("score");
    
const finalScore = document.querySelector('.final-score');
finalScore.textContent = score;