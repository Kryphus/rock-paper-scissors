
let humanScore = 0;
let computerScore = 0;


const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

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

rockButton.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
});



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
    } else if (humanChoice === computerChoice) {
        console.log(`Draw! Score the same`)
    } else {
        computerScore++;
        console.log(`You lose! COMP score: ${computerScore}`)
    }

    const playerScoreDisplay = document.querySelector("#player-score-display")
    playerScoreDisplay.textContent = humanScore;
    const humanChoiceDisplay = document.querySelector("#player-choice");
    humanChoiceDisplay.textContent = humanChoice;
    const computerChoiceDisplay = document.querySelector("#computer-choice");
    computerChoiceDisplay.textContent = computerChoice;

    if (humanScore === 5) {

        console.log("You win! Restarting score to 0")
        humanScore = 0;

        const gameEndMessage = document.createElement("p");
        gameEndMessage.textContent = "You win!";
        gameEndMessage.id = "gameEndMessage";
        gameEndMessage.style.textAlign = "center";
        gameContent = document.querySelector("#game-content");
        gameContent.appendChild(gameEndMessage);

        const newGameButton = document.createElement("button");
        newGameButton.id = "newGameButton";
        newGameButton.textContent = "NEW GAME";
        gameContent.appendChild(newGameButton);

        const gameButtons = document.querySelectorAll('#rock-button, #paper-button, #scissors-button');
        gameButtons.forEach(button => button.disabled = true);

        newGameButton.addEventListener('click', () => {
            gameEndMessage.remove();
            newGameButton.remove();
            playerScoreDisplay.textContent = humanScore;
            gameButtons.forEach(button => button.disabled = false);
        })

        newGameButton.addEventListener('mouseover', () => {
            newGameButton.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)";
        });

        newGameButton.addEventListener('mouseout', () => {
            newGameButton.style.boxShadow = "none";
        });

        
    }
}




// function playGame() {
//     console.log(`Let the game begins! Best out of 5, good luck!`)

//     let round = 0;
//     while(round < 5) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();

//         playRound(humanSelection, computerSelection);
//         round++;
//     }

//     if (humanScore > computerScore) {
//         console.log(`YOU WIN THE GAME!`)
//     } else {
//         console.log(`YOU LOSE! Better luck next time.`)
//     }

//     humanScore, computerScore = 0;
// }

// playGame();

