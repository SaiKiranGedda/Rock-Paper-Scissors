// Initialize score from localStorage or default values
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

// Call updateScoreElement to display initial score
updateScoreElement();

// Function to play the game
function playGame(playerMove) {
  // Pick computer's move
  const computerMove = pickComputerMove();
  
  // Determine the result
  let result = '';
  if (playerMove === computerMove) {
    result = 'Tie';
  } else if ((playerMove === 'rock' && computerMove === 'scissors') ||
             (playerMove === 'paper' && computerMove === 'rock') ||
             (playerMove === 'scissors' && computerMove === 'paper')) {
    result = 'You win';
  } else {
    result = 'You lose';
  }
  
  // Update score based on the result
  if (result === 'You win') {
    score.wins++;
  } else if (result === 'You lose') {
    score.losses++;
  } else {
    score.ties++;
  }
  
  // Update localStorage with updated score
  localStorage.setItem('score', JSON.stringify(score));
  
  // Update UI elements
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You
    <img src="../images123/${playerMove}-emoji.png" class="move-icon">
    <img src="../images123/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

// Function to update the score displayed on the page
function updateScoreElement() {
  const scoreElement = document.querySelector('.js-score');
  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Function to pick a random move for the computer
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  
  if (randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber < 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  
  return computerMove;
}
