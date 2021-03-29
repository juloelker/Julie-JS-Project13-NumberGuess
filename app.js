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
  winningNum = 2,
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

//Listen for Guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a guess between ${min} and ${max}.`, "red");
  }

  //check if we won
  if (guess === winningNum) {
    //game won, disable input
    guessInput.disabled = true;
    //input box green border
    guessInput.style.borderColor = "green";
    //you win message
    setMessage(`${winningNum} is correct! You win!`, "green");
  } else {
    //wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //game over, lost, I added wrongNum, need to define it better, getting
      //[object HTMLInputElement] is not correct when using wrongNum, line 57.
      let wrongNum = guessInput.toString();
      guessInput.disabled = true;
      //input box red border
      guessInput.style.borderColor = "red";
      //you lose message
      setMessage(
        `${wrongNum} is not correct. You lose! The winning number was ${winningNum}.`,
        "red"
      );
      console.log(wrongNum.innerHTML);
    } else {
      //game continues, answer wrong
    }
  }
});

//setMessage function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
