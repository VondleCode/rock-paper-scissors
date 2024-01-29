let player = prompt("It's time! Rock, Paper or Scissors?");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}



function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "It's a Draw!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    } else {
        return "You Lose! Computer chose " + computerSelection
    }
}

const playerSelection = player;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
