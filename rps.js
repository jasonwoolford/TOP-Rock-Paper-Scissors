function getComputerChoice(choice) {
    choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "Rocks!";
        case 2:
            return "Paper!";
        case 3:
            return "Scissors!";
    }
}