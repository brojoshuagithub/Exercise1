const game = () => {
  let moves = 0;
  let computerScore = 0;
  let playerScore = 0;

  const determineWinner = (player, computer) => {
    const resultDisplay = document.querySelector(".result");
    const playerScoreElement = document.querySelector(".p-count");
    const computerScoreElement = document.querySelector(".c-count");

    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
      resultDisplay.textContent = "Tie";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      resultDisplay.textContent = "Player Won";
      playerScore++;
      playerScoreElement.textContent = playerScore;
    } else {
      resultDisplay.textContent = "Computer Won";
      computerScore++;
      computerScoreElement.textContent = computerScore;
    }
  };

  const endGame = (playerOptions, movesLeftDisplay) => {
    const movePrompt = document.querySelector(".move");
    const resultDisplay = document.querySelector(".result");
    const restartButton = document.querySelector(".reload");

    playerOptions.forEach((option) => {
      option.style.display = "none";
    });

    movePrompt.innerText = "Game Over!!";
    movesLeftDisplay.style.display = "none";

    if (playerScore > computerScore) {
      resultDisplay.innerText = "You Won The Game";
      resultDisplay.style.color = "#308D46";
    } else if (playerScore < computerScore) {
      resultDisplay.innerText = "You Lost The Game";
      resultDisplay.style.color = "red";
    } else {
      resultDisplay.innerText = "Tie";
      resultDisplay.style.color = "grey";
    }

    resultDisplay.style.fontSize = "2rem";
    restartButton.innerText = "Restart";
    restartButton.style.display = "flex";
    restartButton.addEventListener("click", () => {
      window.location.reload();
    });
  };

  const startGame = () => {
    const rock = document.querySelector(".rock");
    const paper = document.querySelector(".paper");
    const scissors = document.querySelector(".scissor");
    const playerChoices = [rock, paper, scissors];
    const computerChoices = ["rock", "paper", "scissors"];

    playerChoices.forEach((choice) => {
      choice.addEventListener("click", function () {
        const movesLeftDisplay = document.querySelector(".movesleft");
        moves++;
        movesLeftDisplay.innerText = `Moves Left: ${10 - moves}`;

        const randomIndex = Math.floor(Math.random() * 3);
        const computerSelection = computerChoices[randomIndex];

        const choiceDisplay = document.querySelector(".choice-display");
        choiceDisplay.innerText = computerSelection;

        determineWinner(this.innerText, computerSelection);

        if (moves === 10) {
          endGame(playerChoices, movesLeftDisplay);
        }
      });
    });
  };

  startGame();
};

game();
