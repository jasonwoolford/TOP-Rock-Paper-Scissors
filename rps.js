function getComputerChoice(choice) {
    choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "Rock!";
        case 2:
            return "Paper!";
        case 3:
            return "Scissors!";
    }
}

function play(playerSelection,computerSelection) {
    computerSelection = getComputerChoice();
    let playChoice = window.prompt("Enter your move below");
    playerSelection = playChoice;
    
    if (playChoice.toLowerCase() === "rock") {
        return "You play rock";
    } else if (playChoice.toLowerCase() === "paper") {
        return "You play paper";
    } else if (playChoice.toLowerCase() === "scissors") {
        return "You play scissors";
    } else {
        return "What?";
    }
    }