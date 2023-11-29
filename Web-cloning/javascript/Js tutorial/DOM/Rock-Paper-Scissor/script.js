let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

function game() {
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    let result = ''
  if(computerMove === 'rock'){
    result = 'Tie'
  } else if (computerMove === 'paper') {
    result = 'You lose'
  } else if (computerMove === 'scissor') {
    result = 'You win'
  }

  if (result === 'You win') {
    Score.win += 1;
  } else if (result == 'You lose') {
    score.losses += 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }  

  localStorage.setitem('score', JSON.stringify(sore));

  alert(`You picked rock. Computer picked ${computerMove}. ${result} 
  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
}