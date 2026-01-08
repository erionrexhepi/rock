const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
};

let humanScore = 0;
let computerScore = 0;

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
    resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}
    Score: You ${humanScore} - Computer ${computerScore}`;
  } else {
    computerScore++;
    resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}
    Score: You ${humanScore} - Computer ${computerScore}`;
  }
}

document.querySelector(".rock").addEventListener("click", () => playRound("rock"));
document.querySelector(".paper").addEventListener("click", () => playRound("paper"));
document.querySelector(".scissors").addEventListener("click", () => playRound("scissors"));























/*function getComputerChoice (random) {
  //  if ( a > c ) {
   //     console.log("rock wins")
   // }
    else if (a < b) {
        console.log("paper wins")
    }
}*/

