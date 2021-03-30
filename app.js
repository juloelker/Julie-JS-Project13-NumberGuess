//This is based on Traversy Media beginner project,
//Section 4, DOM Projects
//Number Guesser

//guess a number between min and max
//certain number of guesses
//notify of guesses remaining
//notify when win
//notify player of the correct number when lose
//player can play again

//game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

//UI Elements
const gameContainer = document.querySelector("#game"),
  minNum = document.querySelector("#min-num"),
  maxNum = document.querySelector("#max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for the play again event
gameContainer.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//Listen for Guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a guess between ${min} and ${max}.`, "red");
    guessInput.value = "";
  } else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! You win!`);
  } else if (guess != winningNum) {
    //wrong number, guesses left
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(false, `You lose! The winning number was ${winningNum}.`);
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(`${guess} is incorrect. ${guessesLeft} guesses left.`, "red");
    }
  }
});

//set the winning number

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(winningNum);
//game over, win or lose

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  //disable input
  guessInput.disabled = true;
  //set border and text color to color
  guessInput.style.borderColor = color;
  message.style.color = color;
  //set message
  setMessage(msg);
  //play again?
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

//setMessage function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
