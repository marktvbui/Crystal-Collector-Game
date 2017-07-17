// global variables
// *************************************

var crystal = {
  sky:
  {
    name: 'sky',
    value: 0
  },
  red:
  {
    name: 'red',
    value: 0
  },
    blue:
  {
    name: 'blue',
    value: 0
  },
  green:
  {
    name: 'green',
    value: 0
  }
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

// functions
// *************************************
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  currentScore = 0;
  targetScore = getRandom(19, 120);
  crystal.sky.value = getRandom(1,12);
  crystal.red.value = getRandom(1, 12);
  crystal.blue.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);

  $('#yourScore').html(currentScore);
  $('#targetScore').html(targetScore);

  console.log(targetScore);
  console.log('sky: ' + crystal.sky.value + ' red: ' + crystal.red.value + ' blue: ' + crystal.blue.value + ' green: ' + crystal.green.value);
};

function addValues(crystal) {
  currentScore = currentScore + crystal.value;
  $('#yourScore').html(currentScore);
  checkwin();
  console.log('your score: ' + currentScore);
};

function checkwin(){
  if (currentScore > targetScore) {
    alert('Sorry you lost');
    console.log('you lost');
    lossCount++;
    $('#lossCount').html(lossCount);
    startGame();
  } else if (currentScore == targetScore) {
    alert('You WIN!!!');
    console.log('you win!');
    winCount++;
    $('#winCount').html(winCount);
    startGame();
  }
};
// main
// *************************************
$('#sky').click(function() {
  addValues(crystal.sky);
});

$('#red').click(function() {
  addValues(crystal.red);
});

$('#blue').click(function() {
  addValues(crystal.blue);
});

$('#green').click(function() {
  addValues(crystal.green);

});

startGame();

// // $(document).ready(function() {
// var winningNumber = Math.floor(Math.random() * (120 - 19)) + 19;
// var wins = 0;
// var losses = 0;
// var userScore = 0;
// var image1 = Math.floor(Math.random() * (12 - 1)) + 1;
// var image2 = Math.floor(Math.random() * (12 - 1)) + 1;
// var image3 = Math.floor(Math.random() * (12 - 1)) + 1;
// var image4 = Math.floor(Math.random() * (12 - 1)) + 1;


//   function addValue1() {
//     userScore += image1;
//     console.log('user score1: ' + userScore);
//   }
//   function addValue2() {
//     userScore += image2;
//     console.log('user score2: ' + userScore);
//   }
//   function addValue3() {
//     userScore += image3;
//     console.log('user score3: ' + userScore);
//   }
//   function addValue4() {
//     userScore += image4;
//     console.log('user score4: ' + userScore);
//   }
//   function showTargetedScore() {
//   $('#targetedScore').text(winningNumber);
//   console.log('winning number: ' + winningNumber);
//   }

//   function score() {
//     if (userScore === winningNumber) {
//       wins++;
//       console.log('wins: ' + wins);
//     }
//     else if (userScore > winningNumber) {
//       losses++;
//       console.log('loses: ' + losses);
//     }
//   }
//   function userScore1() {
//     $("#wins").text('wins: ' + wins);
//     console.log('wins: ' + wins);
//     $("#losses").text('losses: ' + losses);
//     console.log('losses: ' + losses);
//   }
//   function printScore() {
//     $('#score').text('Your total score is: ' + userScore);
//     console.log('printscore user score: ' + userScore);
//   }
//   showTargetedScore();
//   score();
//   printScore();
//   userScore1();

// // });
