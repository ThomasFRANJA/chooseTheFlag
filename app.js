
var startBtn = document.querySelectorAll('.startGame');
var game     = document.querySelector('#game');
var live     = document.querySelectorAll('.lives is-active');
var flag     = document.querySelectorAll('.flag');
var country  = document.querySelector('#country');
var timer    = document.querySelector('#timer');

var otherFlags = [];
var counter    = 0;
var random     = Math.floor(Math.random() * flags.length);
var flagToFind = flags[random];
var seconds    = 1000;

var delay;
var over = document.getElementById('game-over');
var restartBtn = document.getElementById('restart');

function decreaseTimer() {
  if (timer.textContent === '1'){
    clearInterval(delay);
    gameOver();
  }
  timer.textContent = timer.textContent - 1;
}

function startTimer() {
  delay = setInterval(decreaseTimer, 1000);
}

function gameOver() {
  over.classList.toggle('is-open');
  timer.textContent = 20;
}

function gameStart(element) {
  element.parentElement.classList.toggle('is-open');

  for (var i = 0; i < 4; i++) {
    flag[i].innerHTML = '<img src ='+flagToFind.src+'></img>';
    country.innerHTML = '<h2>'+flagToFind.name+'</h2>';
  }

  startTimer();
}

for (var i = 0; i < startBtn.length; i++) {
  startBtn[i].addEventListener('click', function(event) {
    gameStart(event.target);
  });
}

//// nom egal au titre ////
//// Front end job web questions (lien mickael)
//// CSS NEXT : http://cssnext.io/features/
