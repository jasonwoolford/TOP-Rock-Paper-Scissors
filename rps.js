//For the DOM
const mainContainer = document.querySelector('#main');
document.body.appendChild(mainContainer);

const section1 = document.createElement('div');
section1.classList.add('section1');
section1.textContent = "Hello!  Click a button for your selection";
mainContainer.appendChild(section1);

const section2 = document.createElement('div');
section2.classList.add('section2');
mainContainer.appendChild(section2);

const rockButton = document.createElement("button");
rockButton.classList.add('rockButton');
rockButton.textContent = "Rock!";
const paperButton = document.createElement("button");
paperButton.classList.add('paperButton');
paperButton.textContent = "Paper!";
const scissorsButton = document.createElement("button");
scissorsButton.classList.add('scissorsButton');
scissorsButton.textContent = "Scissors!";
section2.appendChild(rockButton);
section2.appendChild(paperButton);
section2.appendChild(scissorsButton);

const section3 = document.createElement('div');
section3.classList.add('section3');
section3.textContent = "Game log"
section3.style.backgroundColor = 'pink'
mainContainer.appendChild(section3);

const sec3list = document.createElement('ul');
sec3list.classList.add('sec3p');
section3.appendChild(sec3list);

const section4 = document.createElement('div');
section4.classList.add('section4');
mainContainer.appendChild(section4);

//Global Values
playerScore = 0;
computerScore = 0;

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
    console.log(choice);
}

function play(playerSelection,computerSelection) {
    computerSelection = getComputerChoice(); //Step one: assign computer input as arg
    playChoice = playerSelection; //Step two: get user input
    
    //This code block lays out all possible outcomes and a fallback condition for unacceptable inputs
    if (playChoice === "rock" && computerSelection === 1) {
        return "You play rock, computer plays rock, it's a tie!"
    } else if (playChoice === "rock" && computerSelection === 2) {
        computerScore++;
        return `You play rock, computer plays paper. Computer wins!`
    } else if (playChoice === "rock" && computerSelection === 3) {
        playerScore++;
        return "You play rock, computer plays scissors. You win!"
    } else if (playChoice === "paper" && computerSelection === 1) {
        playerScore++;
        return "You play paper, computer plays rock.  You win!"
    } else if (playChoice === "paper" && computerSelection === 2) {
        return "You play paper, computer plays paper, it's a tie!"
    } else if (playChoice === "paper" && computerSelection === 3) {
        computerScore++;
        return "You play paper, computer plays scissors. Computer wins!"
    } else if (playChoice === "scissors" && computerSelection === 1) {
        computerScore++;
        return "You play scissors, computer plays rock. Computer wins!"
    } else if (playChoice === "scissors" && computerSelection === 2) {
        playerScore++;
        return "You play scissors, computer plays paper. You win!"
    } else if (playChoice === "scissors" && computerSelection === 3) {
        return "You play scissors, computer plays scissors, it's a tie!"
    } else {
        return "What?";
    }
    }
function resetScore() {
    playerscore = 0;
    computerScore = 0;
}
function compare() {
    if (playerScore === 5) {
        return "Player reached five wins!  Player wins!";
    } else if (computerScore === 5) {
        return "Computer reached five wins! Computer wins!"
    } else {
        return "Current player score is " + playerScore + " and the current computer score is " + computerScore;
    }
}
    function game() { //This function runs the play function five times, keeps score of the players, and declares a final winner after the final loop.
        playerScore = 0;
        computerScore = 0;
        for (let i = 0; i < 5; i++) {
            play();
        }

        if (playerScore > computerScore) {
            return "The player scored " + playerScore + " and the computer scored " + computerScore + "."
            + " The player wins!";
        } else if (playerScore < computerScore) {
            return "The player scored " + playerScore + " and the computer scored " + computerScore + "."
            + " The computer wins!";
        } else {
            return "The player scored " + playerScore + " and the computer scored " + computerScore + "."
            + " It's a tie!  Play again!";
        }

    }

rockButton.addEventListener('click', function() {
    let result = "";
    result = play("rock");
    sec3list.textContent = result;
    let final = "";
    final = compare();
    section4.textContent = final;    
});
    
paperButton.addEventListener('click', function(){
    let result = "";
    result = play("paper");
    sec3list.textContent = result;
    let final = "";
    final = compare();
    section4.textContent = final; 
});

scissorsButton.addEventListener('click', function(){
    let result = "";
    result = play("scissors");
    sec3list.textContent = result;
    let final = "";
    final = compare();
    section4.textContent = final; 
});