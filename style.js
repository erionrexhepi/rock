const a = "rock";
const b = "paper";
const c = "scissors";
const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
}

function getComputerChoice () {
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}
function getHumanChoice () {
    const input = prompt("enter your pick")
    return input ;
    
}
function playround () {
    const human = getHumanChoice;
    const computer = getComputerChoice;

    console.log("Human:", human);
    console.log("Computer:", computer);

   if (human === computer) {
    alert("It's a tie!");
    return;
}

if (rules[human] === computer) {
    alert("Human wins!");
    return;
}

alert("Computer wins!");
}




















/*function getComputerChoice (random) {
  //  if ( a > c ) {
   //     console.log("rock wins")
   // }
    else if (a < b) {
        console.log("paper wins")
    }
}*/

