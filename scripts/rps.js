const choice = ["ROCK", "PAPER", "SCISSORS"];

let userScore = 0;
let computerScore = 0;

function computerPlay() {
  let random = choice[Math.floor(Math.random() * choice.length)];
  return random;
}

let computerChoice = computerPlay();

function playRound(userChoice, computerChoice) {
  userChoice = userChoice.toUpperCase();

  let winningMessage = `Congratulations, you win! ${userChoice} beats ${computerChoice}.`;
  let losingMessage = `You lose... ${computerChoice} beats ${userChoice}.`;

  function win() {
    userScore++;
    console.log(userScore + " / " + computerScore);
    return winningMessage;
  }

  function lose() {
    computerScore++;
    console.log(userScore + " / " + computerScore);
    return losingMessage;
  }
  if (userChoice === computerChoice) {
    console.log(userScore + " / " + computerScore);
    return `It\'s a Tie! You both chose ${userChoice}`;
  }

  switch (userChoice) {
    case "ROCK":
      if (computerChoice === "PAPER") {
        return lose();
      } else {
        return win();
      }
      break;

    case "PAPER":
      if (computerChoice === "SCISSORS") {
        return lose();
      } else {
        return win();
      }
      break;

    case "SCISSORS":
      if (computerChoice === "ROCK") {
        return lose();
      } else {
        return win();
      }
      break;

    default:
      console.log("Invalid input.");
  }
}
function game() {
  for (i = 1; i <= 5; i++) {
    console.log(
      playRound(prompt("What's your weapon of choice?"), computerPlay())
    );
  }
  if (userScore > computerScore) {
    return "Congratulations, you won! :D";
  } else if (userScore < computerScore) {
    return "You lost :( Better luck next time!";
  } else {
    return "It's a Tie";
  }
}

console.log(game());
