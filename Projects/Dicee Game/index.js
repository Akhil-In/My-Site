var heading = document.querySelector("h1"); // Select h1 Element

randomOutcome1(); //Generate random Number and also set image src attribute accordingly For Dice 1
randomOutcome2(); //Generate random Number and also set image src attribute accordingly For Dice 2

var randomNum1 = randomOutcome1(); //Get random Number for Dice 1
var randomNum2 = randomOutcome2(); //Get random Number for Dice 2

if (randomNum1 === randomNum2) {
  //If Match Draw
  heading.textContent = "Draw!";
} else if (randomNum1 > randomNum2) {
  //If Player 1 Wins
  heading.textContent = "🚩Player 1 Wins!";
} else {
  // If Player 2 Wins
  heading.textContent = "Payer 2 Wins!🚩";
}

// Generate random Number and also set image src attribute accordingly For Dice 1

function randomOutcome1() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var img1 = document.querySelector(".img1");
  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  return img1.setAttribute("src", randomImageSource1), randomNumber1;
}

// Generate random Number and also set image src attribute accordingly For Dice 2
function randomOutcome2() {
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var img2 = document.querySelector(".img2");
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  return img2.setAttribute("src", randomImageSource2), randomNumber2;
}
