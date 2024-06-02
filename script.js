const btnRock = document.getElementById("rock-btn");
const btnPaper = document.getElementById("paper-btn");
const btnScissor = document.getElementById("scissors-btn");

let playersChoice = 0;

function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

btnRock.addEventListener("click", () => {
  playersChoice = "Rock";
  //   console.log(playersChoice);
  showResults(playersChoice);
});
btnPaper.addEventListener("click", () => {
  playersChoice = "Paper";
  showResults(playersChoice);
});
btnScissor.addEventListener("click", () => {
  playersChoice = "Scissors";
  showResults(playersChoice);
});

function hasPlayerWonTheRound(playersChoice, computer) {
  return (
    (playersChoice === "Rock" && computer === "Scissors") ||
    (playersChoice === "Scissors" && computer === "Paper") ||
    (playersChoice === "Paper" && computer === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

resetGameBtn.addEventListener("click", () => {
  window.location.reload();
});
