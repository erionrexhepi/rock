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

function getComputerChoice () {
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}
function getHumanChoice () {
    const input = prompt("enter your pick").toLowerCase();
    return input ;
    
}

function playround (humanChoice, computerChoice) {


       

       if (rules[human] === computer) {
            alert("Human wins!");
            humanScore++;
            
        }
        else if (rules[computer] === human) {
        alert("Computer wins!");
            computerScore++;
            }
       

        else  {
         alert("It's a tie!");
            
        }
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {  // play 5 rounds
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const winner = playRound(humanChoice, computerChoice);

        if (winner === "human") humanScore++;
        else if (winner === "computer") computerScore++;
        // tie does not affect score
    }
console.log(`Final Scores -> Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Human is the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the overall winner!");
    } else {
        console.log("The game ends in a tie!");
    }
}

// Step 5: Start the game
playGame();




























/*function getComputerChoice (random) {
  //  if ( a > c ) {
   //     console.log("rock wins")
   // }
    else if (a < b) {
        console.log("paper wins")
    }
}*/

