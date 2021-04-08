'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const setMessage = function (text) {
  document.querySelector('.message').textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    setMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    setMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    checkHighscore();

    // checkScore(guess);
  } else if (guess !== secretNumber) {
    setMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
    document.querySelector('.score').textContent = --score;
    if (score < 1) setMessage('💥You lost the game!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  restoreGame();
});

const restoreGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const checkHighscore = function () {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};
