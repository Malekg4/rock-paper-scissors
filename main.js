// Global variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to get the human's choice
function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return choice;
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! You both chose " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ".");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ".");
        humanScore++; // Increment human score
    } else {
        console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".");
        computerScore++; // Increment computer score
    }
}



// Example game loop for a single round
let humanChoice = getHumanChoice(); // Get human choice
let computerChoice = getComputerChoice(); // Get computer choice
console.log(computerChoice);
console.log(humanChoice);
playRound(humanChoice, computerChoice); // Play a round

// Log the current scores
console.log("Current Scores - Human: " + humanScore + ", Computer: " + computerScore);
