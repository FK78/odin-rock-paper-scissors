const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return rock;
    case 1:
      return paper;
    case 2:
      return scissors;
  }
}

function playRound(playerSelection, computerSelection) {
  let computerWins = 1;
  let playerWins = 0;
  let winner = 3;
  const playerSelectionCaseSensitive =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.toLowerCase().slice(1);

  if (playerSelectionCaseSensitive !== computerSelection) {
    if (playerSelectionCaseSensitive === rock) {
      if (computerSelection === paper) {
        winner = computerWins;
      } else if (computerSelection === scissors) {
        winner = playerWins;
      }
    } else if (playerSelectionCaseSensitive === paper) {
      if (computerSelection === rock) {
        winner = playerWins;
      } else if (computerSelection === scissors) {
        winner = computerWins;
      }
    } else if (playerSelectionCaseSensitive === scissors) {
      if (computerSelection === paper) {
        winner = computerWins;
      } else if (computerSelection === rock) {
        winner = playerWins;
      }
    }
  } else {
    winner = 2;
  }
  return winner;
}

function game() {
  let computerWins = 0;
  let playerWins = 0;
  for (let index = 0; index < 5; index++) {
    let playerSelection = prompt("Please enter your choice");
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if (result === 0) {
      playerWins += 1;
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (result === 1) {
      computerWins += 1;
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else {
      console.log("It's a draw.");
    }
  }
  computerWins > playerWins
    ? console.log("Game over, you lose!")
    : console.log("Game over, you win!");
}

game();
