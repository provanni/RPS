// Declare variables to hold computer choices
var choicesList = ['rock', 'paper', 'scissors'];
var computerChoice;
var message;

// Variables to hold HTML elements
var userDisplay = document.getElementById("userDisplay");
var computerDisplay = document.getElementById("computerDisplay");
var result = document.getElementById("result");

// Making a selection will start the game
var userSelect = document.getElementById("userSelect");
userSelect.addEventListener('change', startGame);

// Reset Button, when clicked, whole game will be reset
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset);

// This function contains the entire game
function startGame() {

    // These variables hold the choices for user and computer
    var userChoice = userSelect.value;
    // console.log("userChoice = " + userChoice); // for debugging
    var computerChoice = generateComputerChoice();
    // console.log("computerChoice = " + computerChoice); // for debugging

    // If user and computer choose same thing, it's a tie
    if (userChoice === computerChoice) {
        userDisplay.textContent = "Here is your choice: " + userChoice;
        computerDisplay.textContent = "Here is computer choice: " + computerChoice;
        result.textContent = "It's a tie!";
    }

    // Displays winner
    if (userChoice === "rock") {
        // Goes here if user selects rock
        if (computerChoice === "scissors") {
            // Rock beats scissors, player wins
            userDisplay.textContent = "Here is your choice: " + userChoice;
            computerDisplay.textContent = "Here is computer choice: " + computerChoice;
            result.textContent = "Here is result PLAYER WINS";
        } else if (computerChoice === "paper") {
            // Rock loses to paper, player loses
            userDisplay.textContent = "Here is your choice: " + userChoice;
            computerDisplay.textContent = "Here is computer choice: " + computerChoice;
            result.textContent = "Here is result PLAYER LOSES";
        }
    } else if (userChoice === "paper") {
        // Goes here if user selects paper
        if (computerChoice === "rock") {
            // Paper beats rock, player wins
            userDisplay.textContent = "Here is your choice: " + userChoice;
            computerDisplay.textContent = "Here is computer choice: " + computerChoice;
            result.textContent = "Here is result PLAYER WINS";
        } else if (computerChoice === "scissors") {
            // Paper loses to scissors, player loses
            userDisplay.textContent = "Here is your choice: " + userChoice;
            computerDisplay.textContent = "Here is computer choice: " + computerChoice;
            result.textContent = "Here is result PLAYER LOSES";
        }
    } else if (userChoice === "scissors") {
        // Goes here if player selects scissors
        if (computerChoice === "paper") {
            // Scissors beats paper, player wins
            userDisplay.textContent = "Here is your choice: " + userChoice;
            computerDisplay.textContent = "Here is computer choice: " + computerChoice;
            result.textContent = "Here is result PLAYER WINS";
        } else if (computerChoice === "rock") {
            // Scissors loses to rock, player loses
            userDisplay.textContent = "Here is your choice: " + userChoice;
            computerDisplay.textContent = "Here is computer choice: " + computerChoice;
            result.textContent = "Here is result PLAYER LOSES";
        }
    }


}

// This will be called when the user clicks reset
function reset() {
    userDisplay.textContent = "Here is your choice";
    computerDisplay.textContent = "Here is computer choice";
    result.textContent = "Here is result";
}

// Generates a random number between 0 and seed
function random(seed) {
    // Returns random number to caller
    return Math.floor((Math.random() * seed));
}

// Picks from array compChoices based on random number
function generateComputerChoice() {
    // Generates random number between 0 and 2
    var randomNumber = random(2);

    // Chooses Rock, Paper or Scissors from array based on random number
    // Returns random computer choice as a String
    return choicesList[randomNumber];
}
