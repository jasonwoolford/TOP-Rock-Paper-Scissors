function play(playerSelection,computerSelection) {
    let playChoice = window.prompt("Enter your move below");
    playerSelection = playChoice;
    let compChoice = getComputerChoice();
    computerSelection = compChoice;

    if (playChoice.toLowerCase() === "rock" && compChoice === 1) {
        return "You play rock, computer plays rock, it's a tie!";
    } else if (playChoice.toLowerCase() === "rock" && compChoice === 2) {
        return "You play rock, computer plays"
    }
     else if (playChoice.toLowerCase() === "paper") {
        return "You play paper";
    } else if (playChoice.toLowerCase() === "scissors") {
        return "You play scissors";
    } else {
        return "What?";
    }
    }

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