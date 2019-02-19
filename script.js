var html = document.querySelector('html');
var text = document.querySelector('h1');
var holes = document.querySelectorAll('.hole');
var scoreBoard = document.querySelector('.score');
var lastHole = 0;
var timeUp = false;
var score = 0;
var gameStarted;

document.querySelector('.startButton').addEventListener('click', function () {
  if (!gameStarted) {
    Game()
  }
});

holes.forEach(function(hole) {
  hole.addEventListener('click', () => {
    if (gameStarted) {
      if(hole.classList.contains('showMole')) {
        hole.classList.remove('showMole')
        score ++
        scoreBoard.textContent = score
      } else {
        html.classList.add('loser')
        text.textContent = `Perdiste, tu puntaje fue: ${score}`
        gameStarted = false
      }
    }
  })
});


function Game() {
  if (!gameStarted) {
    resetGame()
    gameStarted = true
  }
  
  setTimeout(function () {
    //Each second
    moleUp()
    if (gameStarted) {
      Game()
    }
  }, 1000)
}

function moleUp() {
  var i = getAleatoryHole();
  holes[lastHole].classList.remove('showMole');
  holes[i].classList.add('showMole');
  lastHole = i;
}

function getAleatoryHole() {
  var random = Math.round(Math.random() * 5)
  console.log(random)
  if (random === lastHole){
    return getAleatoryHole();
  } else {
    return random;
  }
}

function resetGame() {
  text.innerHTML = '¡Golpea al topo! <span class="score">0</span>'
  html.classList.remove('loser')
  scoreBoard = document.querySelector('.score');
  score = 0
}