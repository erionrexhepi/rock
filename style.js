const a = "rock";
const b = "paper";
const c = "scissors";
const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}
let humanScore = 0;
let computerScore = 0;

document.querySelector(".rock")
  .addEventListener("click", () => playRound("rock"));

document.querySelector(".paper")
  .addEventListener("click", () => playRound("paper"));

document.querySelector(".scissors")
  .addEventListener("click", () => playRound("scissors"));

const resultsDiv = document.querySelector(".results");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultsDiv.textContent = `Tie! Both chose ${humanChoice}`;
    return;
  }

  if (rules[humanChoice] === computerChoice) {
    humanScore++;
    resultsDiv.textContent =
      `You win! ${humanChoice} beats ${computerChoice}
       Score: You ${humanScore} - Computer ${computerScore}`;
  } else {
    computerScore++;
    resultsDiv.textContent =
      `You lose! ${computerChoice} beats ${humanChoice}
       Score: You ${humanScore} - Computer ${computerScore}`;
  }

  if (humanScore === 5 || computerScore === 5) {
    resultsDiv.textContent +=
      humanScore === 5 ? "\n🎉 You won the game!" : "\n💻 Computer won the game!";
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll("button.choice")
    .forEach(btn => btn.disabled = true);
}

// Step 5: Start the game
//playGame();




























/*function getComputerChoice (random) {
  //  if ( a > c ) {
   //     console.log("rock wins")
   // }
    else if (a < b) {
        console.log("paper wins")
    }
}*/

