
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
    let choice = input.charAt(0).toUpperCase + input.slice(1);
    return choice;


    // if (!choice) {
    //     return 'Can\'t be empty'
    // } else if (choice === )
}

console.log(getHumanChoice())


