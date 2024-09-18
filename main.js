function getComputerChoice(){
    
    const choices = ["Rock", "Paper", "Scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

function getHumanChoice(){

    let choice = prompt("Enter your choice (rock, paper, or scissors):");
    
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return choice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());