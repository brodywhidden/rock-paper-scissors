const selection = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    const computer = selection[Math.floor(Math.random() * selection.length)];
    return computer
}

function playRound(playerSelection) {
    const player = playerSelection.charAt(0).toUpperCase() + playerSelection.substr(1).toLowerCase();
    const computer = getComputerChoice()
    if (player == 'Rock' && computer == 'Scissors') {
        return("You win! Rock beats Scissors!");
        }
    if (player == 'Rock'  && computer == 'Paper') {
        return("You lose! Paper beats Rock!");
        }
    if (player == 'Rock'  && computer == 'Rock') {
        return("It's a draw! Rock vs. Rock");
        }
    if (player == 'Paper' && computer == 'Scissors') {
        return("You lose! Scissors beats Paper!");
        }
    if (player == 'Paper'  && computer == 'Paper') {
        return("It's a draw! Paper vs. Paper");
        }
    if (player == 'Paper'  && computer == 'Rock') {
        return("You win! Paper beats Rock!");
        }
    if (player == 'Scissors' && computer == 'Scissors') {
        return("It's a draw! Scissors vs. Scissors");
        }
    if (player == 'Scissors'  && computer == 'Paper') {
        return("You win! Scissors beats Paper!");
        }
    if (player == 'Scissors'  && computer == 'Rock') {
        return("You lose! Rock beats Scissors!");
        }
    }

    function playGame() {
        const Game = prompt("Rock, Paper, Scissors!");
        console.log(playRound(Game));
        const Game2 = prompt("Round two!");
        console.log(playRound(Game2));
        const Game3 = prompt("Round three!");
        console.log(playRound(Game3));
        const Game4 = prompt("Round four!");
        console.log(playRound(Game4));
        const Game5 = prompt("Final round!");
        console.log(playRound(Game5));
    }
