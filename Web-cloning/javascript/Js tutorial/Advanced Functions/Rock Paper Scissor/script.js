let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  }
  updateScoreElement(); 
  let result = ''
  
  function getRock()
   {
    let playerMove='rock'
     const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissor';
    }
  
    //let result = ''
  
    if(playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.'
      console.log(result)
    } else if (computerMove === 'paper') {
      result = 'You lose.'
      console.log(result)
    } else if (computerMove === 'scissor') {
      result = 'You win.'
      console.log(result)
    }
  }
    if (result === 'You win') {
      score.wins += 1;
    } else if (result == 'You lose') {
      score.losses += 1;
    } else if (result === 'Tie') {
      score.ties += 1;
    }
  
    localStorage.setItem('score', JSON.stringify(score));
  
    document.querySelector('.js-result').innerHTML = result;
    console.log(result)
  
    updateScoreElement();
  
    document.querySelector('.js-moves').
    innerHTML = 
    `You
    <img src="images/rock.svg" class="move-icon">
    <img src="./images/${computerMove}.svg" class="move-icon">
    Computer`;
  
    //   alert(`You picked rock. Computer picked ${computerMove}. ${result} 
    // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
  
  }
  
  
  function getPaper() {
    let playerMove = 'paper'
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissor';
    }
  
    let result = ''
  
    if(playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'Tie'
    } else if (computerMove === 'paper') {
      result = 'You lose'
    } else if (computerMove === 'scissor') {
      result = 'You win'
    }
  }
  
    if (result === 'You win') {
      score.wins += 1;
    } else if (result == 'You lose') {
      score.losses += 1;
    } else if (result === 'Tie') {
      score.ties += 1;
    }
  
    localStorage.setItem('score', JSON.stringify(score));
   
    updateScoreElement();
  
    document.querySelector('.js-result').
    innerHTML = result;
  
    document.querySelector('.js-moves').
    innerHTML = 
    `You 
    <img src = "./images/paper.svg" class ="move-icon">
    <img src = "./images/${computerMove}.svg" class = "move-icon">
    Computer`
  
    //   alert(`You picked paper. Computer picked ${computerMove}. ${result} 
    // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
  
  }
  
  
  function getScissor() {
    playerMove = 'scissor'
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissor';
    }
  
    let result = ''
  
    if(playerMove === 'scissor') {
    if (computerMove === 'rock') {
      result = 'Tie'
    } else if (computerMove === 'paper') {
      result = 'You lose'
    } else if (computerMove === 'scissor') {
      result = 'You win'
    }
  }
  
    if (result === 'You win') {
      score.wins += 1;
    } else if (result == 'You lose') {
      score.losses += 1;
    } else if (result === 'Tie') {
      score.ties += 1;
    }
  
    localStorage.setItem('score', JSON.stringify(score));
   
    updateScoreElement();
  
    const firstP=document.querySelector('.js-result').innerText 
    console.log(result)
    
  
    document.querySelector('.js-moves').
    innerHTML = 
    `You 
    <img src = "./images/scissor.svg" class ="move-icon">
    <img src = "./images/${computerMove}.svg" class = "move-icon">
    Computer`
  
    //   alert(`You picked scissor. Computer picked ${computerMove}. ${result} 
    // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
  }
  
  function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
   
    let isAutoPlaying = false;
  let intervalId;


  function onAutoPlay() {
    if(!isAutoPlaying) {
        intervalId = setInterval(function(){
          const playerMove = computerMove();
          getScissor(playerMove)
        }, 1000)
        isAutoPlaying = true;
    } else {
      clearInterval(intervalId);
      isAutoPlaying = false
    }
}


  

  
  