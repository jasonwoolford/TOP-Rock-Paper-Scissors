function play(playerSelection,computerSelection) {
    getComputerChoice();  //Step one: get input from the computer
    computerSelection = getComputerChoice(); //Step two: assign computer input as arg
    let playChoice = window.prompt("Enter your move below"); //Step three: get user input
    playerSelection = playChoice; //Step four: assign user input as arg

    //This code block lays out all possible outcomes and a fallback condition for unacceptable inputs
    if (playChoice.toLowerCase() === "rock" && computerSelection === 1) {
        return "You play rock, computer plays rock, it's a tie!";
    } else if (playChoice.toLowerCase() === "rock" && computerSelection === 2) {
        return `You play rock, computer plays paper. Computer wins!`
    } else if (playChoice.toLowerCase() === "rock" && computerSelection === 3) {
        return "You play rock, computer plays scissors. You win!"
    } else if (playChoice.toLowerCase() === "paper" && computerSelection === 1) {
        return "You play paper, computer plays rock.  You win!";
    } else if (playChoice.toLowerCase() === "paper" && computerSelection === 2) {
        return "You play paper, computer plays paper, it's a tie!"
    } else if (playChoice.toLowerCase() === "paper" && computerSelection === 3) {
        return "You play paper, computer plays scissors. Computer wins!"
    } else if (playChoice.toLowerCase() === "scissors" && computerSelection === 1) {
        return "You play scissors, computer plays rock. Computer wins!";
    } else if (playChoice.toLowerCase() === "scissors" && computerSelection === 2) {
        return "You play scissors, computer plays paper. You win!"
    } else if (playChoice.toLowerCase() === "scissors" && computerSelection === 3) {
        return "You play scissors, computer plays scissors, it's a tie!"
    } else {
        return "What?";
    }
    }

    function getComputerChoice(choice) {  //Computer logic for selecting a move
        choice = Math.floor(Math.random() * 3) + 1;
    
        switch (choice) {
            case 1:
                return 1;  //Rock value
            case 2:
                return 2;  //Paper value
            case 3:
                return 3;  //Scissors value
        }
    }