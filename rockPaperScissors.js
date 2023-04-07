function rockPaperScissors(input) {
    const colors = require('colors');
    colors.enable()
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    let playerTurn = '';
    if (input == 'r' || input == 'rock') {
        playerTurn = rock
    } else if (input == 'p' || input == 'paper') {
        playerTurn = paper
    } else if (input == 's' || input == 'scissors') {
        playerTurn = scissors
    } else {
        console.log('Invalid Input. Try Again...');
        return;
    }
    console.log(`You choose ${playerTurn}`.blue);

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1
    let computerTurn = '';
    switch (computerRandomNumber) {
        case 1:
            computerTurn = rock;
            break;
        case 2:
            computerTurn = paper;;
            break;
        case 3:
            computerTurn = scissors;
            break;
    }

    console.log(`The computer choose ${computerTurn}`.blue);

    if ((playerTurn === rock && computerTurn === scissors) || (playerTurn === paper && computerTurn === rock) || (playerTurn === scissors && computerTurn === paper)) {
        console.log('You win!'.green);
    } else if ((playerTurn === rock && computerTurn === paper) || (playerTurn === paper && computerTurn === scissors) || (playerTurn === scissors && computerTurn === rock)) {
        console.log('You lose!'.red);
    } else {
        console.log('This game was a draw!'.yellow);
    }

}
rockPaperScissors("paper")



