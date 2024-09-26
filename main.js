function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function updateScore() {
        const scoreDiv = document.getElementById("score");
        scoreDiv.textContent = `Scores - Human: ${humanScore}, Computer: ${computerScore}`;
    }

    function displayResult(message) {
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = message;
    }

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) {
            displayResult("It's a tie! You both chose " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ".");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            displayResult("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice + ".");
        } else {
            computerScore++;
            displayResult("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".");
        }

        updateScore();
        checkWinner();
    }

    function checkWinner() {
        if (humanScore === 5) {
            alert("Congratulations! You win the game!");
            resetGame();
        } else if (computerScore === 5) {
            alert("Sorry! The computer wins the game.");
            resetGame();
        }
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        updateScore();
        displayResult("Game has been reset. Start again!");
    }

    // Create buttons
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let button3 = document.createElement("button");

    button1.textContent = "Rock";
    button2.textContent = "Paper";
    button3.textContent = "Scissors";

    // Add event listeners for buttons
    button1.addEventListener("click", () => playRound("rock"));
    button2.addEventListener("click", () => playRound("paper"));
    button3.addEventListener("click", () => playRound("scissors"));

    // Append buttons to the container
    const buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.append(button1, button2, button3);
}

playGame();
