const choices = document.querySelectorAll(".choices button");
const playerChoices = document.getElementById("player-choice");
const computerChoices = document.getElementById("computer-choice");
const resultText = document.getElementById("winner");
const playerWinsSpan = document.getElementById("player-wins");
const computerWinsSpan = document.getElementById("computer-wins");
const tiesSpan = document.getElementById("ties");

let playerWins = 0;
let computerWins = 0;
let ties = 0;

choices.forEach(choice => {
  choice.addEventListener("click", () => play(choice.id));
});

function getNumberRandom() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex].id;
}

function play(playerChoice) {
  const computerChoice = getNumberRandom();

  playerChoices.src = `${playerChoice}.png`;
  computerChoices.src = `${computerChoice}.png`;

  if (playerChoice === computerChoice) {
    resultText.textContent = "Empate";
    ties++;
    tiesSpan.textContent = ties;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText.textContent = "Ganaste";
    playerWins++;
    playerWinsSpan.textContent = playerWins;
  } else {
    resultText.textContent = "Perdiste";
    computerWins++;
    computerWinsSpan.textContent = computerWins;
  }
}
