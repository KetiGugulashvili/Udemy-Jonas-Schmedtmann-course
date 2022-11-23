'use strict';

let myNumber = Math.trunc(Math.random() * 50) + 1;
let score = 10;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  
  if (!guess) {
    displayMessage('No Number!');
  } else if (guess === myNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = myNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== myNumber) {
    if (score > 1 && guess !== myNumber) {
      displayMessage(
        guess > myNumber ? 'The Number is Lower' : 'The Number is Higher'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage('You lost a game!');
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});


document.querySelector('.again').addEventListener('click', function () {
  myNumber = Math.trunc(Math.random() * 50) + 1;
  score = 10;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
