const selection = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return selection[Math.floor(Math.random() * selection.length)];
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
    else
        return("Invalid input! please select Rock, Paper, or Scissors (case-insensitive)")
    }

    function playGame() {
        let playerScore = 0
        let computerScore = 0
        const Game = prompt("Rock, Paper, Scissors!");
        let result = (playRound(Game));
            console.log(result)
                if (/You win!/.test(result)) {++playerScore};
                if (/You lose!/.test(result)) {++computerScore};
                if (/It's a draw!/.test(result)) {console.log("No points for either side")};
            console.log("The score is " + playerScore + " to " + computerScore);
        const Game2 = prompt("Round two!");
        let result2 = (playRound(Game2));
            console.log(result2)
                if (/You win!/.test(result2)) {++playerScore};
                if (/You lose!/.test(result2)) {++computerScore};
                if (/It's a draw!/.test(result2)) {console.log("No points for either side")};
            console.log("The score is " + playerScore + " to " + computerScore);
        const Game3 = prompt("Round three!");
        let result3 = (playRound(Game3));
            console.log(result3)
                if (/You win!/.test(result3)) {++playerScore};
                if (/You lose!/.test(result3)) {++computerScore};
                if (/It's a draw!/.test(result3)) {console.log("No points for either side")};
            console.log("The score is " + playerScore + " to " + computerScore);
        const Game4 = prompt("Round four!");
        let result4 = (playRound(Game4));
            console.log(result4)
                if (/You win!/.test(result4)) {++playerScore};
                if (/You lose!/.test(result4)) {++computerScore};
                if (/It's a draw!/.test(result4)) {console.log("No points for either side")};
            console.log("The score is " + playerScore + " to " + computerScore);
        const Game5 = prompt("Final round!");
        let result5 = (playRound(Game5));
            console.log(result5)
                if (/You win!/.test(result5)) {++playerScore};
                if (/You lose!/.test(result5)) {++computerScore};
                if (/It's a draw!/.test(result5)) {console.log("No points for either side")};
            console.log("The score is " + playerScore + " to " + computerScore);
        if (playerScore > computerScore) {console.log("Congratulations! You've won")};
        if (computerScore > playerScore) {console.log("Sorry! You lose")};
        if (playerScore == computerScore) {console.log("It's a draw! play again?")};
    }
