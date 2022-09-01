const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScore')) || []

// document.getElementById("name").innerHTML = highScores[0].name;
// document.getElementById("score").innerHTML = highScores[0].score;

console.log(highScores);
highScoresList.innerHTML = highScores.map(score => {
    return `<li class = "high-score">${score.name} - ${score.score}</li> `
}).join('');