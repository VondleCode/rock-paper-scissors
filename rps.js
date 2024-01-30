let player = prompt("It's time! Rock, Paper or Scissors? Best of 5 wins!");
let playerWins = 0;
let computerWins = 0;
let gameCount = 0;


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playGame() {
    const playerSelection = player;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    gameCount++;
    if (gameCount === 5 && playerWins > computerWins) {
        console.log("Congratulations, you win " + playerWins + " to " + computerWins + ".")
    } else if (gameCount === 5 && playerWins < computerWins) {
        console.log("Oh no! You lose " + playerWins + " to " + computerWins + ".")
    } else if (gameCount < 5) {
        player = prompt("Next Round!");
    }
    
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "It's a Draw! The score is " + playerWins + " to " + computerWins + "."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        return "You Win! Rock beats Scissors! The score is " + playerWins + " to " + computerWins + "."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        return "You Win! Paper beats Rock! The score is " + playerWins + " to " + computerWins + "."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        return "You Win! Scissors beats Paper! The score is " + playerWins + " to " + computerWins + "."
    } else {
        computerWins++;
        return "You Lose! Computer chose " + computerSelection + ". The score is " + playerWins + " to " + computerWins + "."
    }
}

while (gameCount < 5) {
    playGame();
}