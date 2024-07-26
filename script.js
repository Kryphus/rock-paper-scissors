
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (randomNum === 1) {
        return 'Rock'
    } else if (randomNum === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }

}

const getHumanChoice = () => {
    let input = prompt('Enter either rock, paper, or scissors:')
    let choice = input.charAt(0).toUpperCase() + input.slice(1);

    if (!choice) {
        return 'Can\'t be empty'
    } else if (choice === 'Rock' || choice === 'Paper' || choice === 'Scissors') {
        return choice;
    } else {
        return `Enter either 'Rock', 'Paper', or 'Scissors' only`
    }
}

function playRound(humanChoice, computerChoice) {

    
        if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
            humanScore++;
            console.log(`You win! Your score: ${humanScore}`);
        } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
            humanScore++;
            console.log(`You win! Your score: ${humanScore}`);
        } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
            humanScore++;
            console.log(`You win! Your score: ${humanScore}`);
        } else  {
            computerScore++;
            console.log(`You lose! COMP score: ${computerScore}`)
        }
    
}

function playGame() {
    console.log(`Let the game begins! Best out of 5, good luck!`)

    let round = 0;
    while(round < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        round++;
    }

    if (humanScore > computerScore) {
        console.log(`YOU WIN THE GAME!`)
    } else {
        console.log(`YOU LOSE! Better luck next time.`)
    }

    humanScore, computerScore = 0;
}

playGame();

