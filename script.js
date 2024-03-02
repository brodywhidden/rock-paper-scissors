const selection = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    return selection[Math.floor(Math.random() * selection.length)];
}

function playRound(playerSelection) {
    const computer = getComputerChoice()
    let resultText;

    if (playerSelection === computer) {
        resultText = `It's a draw! Both chose ${playerSelection}!`;
    } else if (
        (playerSelection == 'Rock' && computer == 'Scissors') ||
        (playerSelection == 'Paper' && computer == 'Rock') ||
        (playerSelection == 'Scissors' && computer == 'Paper')
    ) {
        resultText = `You win! ${playerSelection} beats ${computer}!`;
        playerScore++;
    } else {
        resultText = `You lose! ${computer} beats ${playerSelection}!`;
        computerScore++;
    }

    return resultText;
}