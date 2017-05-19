// $(document).ready(function() {
var winningNumber = Math.floor(Math.random() * (120 - 19)) + 19;
var wins = 0;
var losses = 0;
var userScore = 0;
var image1 = Math.floor(Math.random() * (12 - 1)) + 1;
var image2 = Math.floor(Math.random() * (12 - 1)) + 1;
var image3 = Math.floor(Math.random() * (12 - 1)) + 1;
var image4 = Math.floor(Math.random() * (12 - 1)) + 1;


  function addValue1() {
    userScore += image1;
    console.log(userScore);
  }
  function addValue2() {
    userScore += image2;
    console.log(userScore);
  }
  function addValue3() {
    userScore += image3;
    console.log(userScore);
  }
  function addValue4() {
    userScore += image4;
    console.log(userScore);
  }
  function showTargetedScore() {
  $('#targetedScore').text(winningNumber);
  console.log(winningNumber);
  }

  function score() {
    if (userScore === winningNumber) {
      wins++;
      console.log(wins);
    }
    else if (userScore > winningNumber) {
      losses++;
      console.log(losses);
    }
  }
  function userScore1() {
    $("#wins").text(wins);
    $("#losses").text(losses);
  }
  function printScore() {
    $('#score').text('Your total score is: ' + userScore);
    console.log(userScore);
  }
  score();
  printScore();
  userScore1();

// });
