function getComputerChoice() {
    const selection = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = selection[Math.floor(Math.random() * selection.length)];
    return computerSelection
}