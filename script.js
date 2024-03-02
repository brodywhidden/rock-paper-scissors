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

function playGame(playerSelection) {
    const resultText = playRound(playerSelection);
    updateScores();
    checkWin(resultText);
}

function updateScores() {
    resultsScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function checkWin(resultText) {
    if (playerScore === 5 || computerScore === 5) {
        const message = playerScore === 5 ? "Congratulations! You won the game!" : "You lost! Better luck next time!";
        resultsFlavor.textContent = message;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    } else {
        resultsFlavor.textContent = resultText;
    }
}