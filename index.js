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

function playRound(playSelection, computerSelection) {
  let statement = "";
  const playerSelectionCaseSensitive =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.toLowerCase().slice(1);
  const youWinStatement = `You Win! ${playerSelectionCaseSensitive} beats ${computerSelection}`;
  const youLoseStatement = `You Lose! ${computerSelection} beats ${playerSelectionCaseSensitive}`;

  if (playerSelectionCaseSensitive !== computerSelection) {
    if (playerSelectionCaseSensitive === rock) {
      if (computerSelection === paper) {
        statement = youLoseStatement;
      } else if (computerSelection === scissors) {
        statement = youWinStatement;
      }
    } else if (playerSelectionCaseSensitive === paper) {
      if (computerSelection === rock) {
        statement = youWinStatement;
      } else if (computerSelection === scissors) {
        statement = youLoseStatement;
      }
    } else if (playerSelectionCaseSensitive === scissors) {
      if (computerSelection === paper) {
        statement = youLoseStatement;
      } else if (computerSelection === rock) {
        statement = youWinStatement;
      }
    }
  } else {
    statement = "It's a tie!";
  }
  return statement;
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
