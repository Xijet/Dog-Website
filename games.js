// Starting with Tic Tac Toe
// Creating variables to grab the elements required
const gameBoard = document.querySelector("#gameboard");
const infoDisplayTic = document.querySelector("#infoTic");
const startCells = ["", "", "", "", "", "", "", "", ""]; // Representing the board with an array using strings

let go = "circle";

infoDisplayTic.textContent = "Circle goes first";

function createBoard() {
  startCells.forEach((cell, index) => {
    const cellElement = document.createElement("div"); // Creating a div, saving it into the cellElement...
    cellElement.classList.add("square");
    cellElement.id = index; // Make it so each element has an ID
    cellElement.addEventListener("click", addGo);
    gameBoard.append(cellElement);
  });
}

createBoard();

function addGo(e) {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay);
  go = go === "circle" ? "cross" : "circle"; // If "go" is string "circle", return "cross", or return "circle" again to change whose turn it is

  infoDisplayTic.textContent = "It is now " + go + "'s go";
  e.target.removeEventListener("click", addGo); // Remove eventlistener so you can't click the same square twice
  checkScore(); // Calling checkScore function
}

function checkScore() {
  const allSquares = document.querySelectorAll(".square"); // We need all elements with the class "square"
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winCombos.forEach((array) => {
    const circleWin = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("circle")
    ); // For each array in the array, check every cell. If the cell contains circle or cross, either wins
    if (circleWin) {
      infoDisplayTic.textContent = "Circle wins!";
    }
  });

  winCombos.forEach((array) => {
    const crossWin = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("cross")
    );
    if (crossWin) {
      infoDisplayTic.textContent = "Cross wins!";
    }
  });
}

// Rock Paper Scissor

const userChoiceDisplay = document.createElement("h2");
const computerChoiceDisplay = document.createElement("h2");
const resultDisplayRock = document.createElement("h2");
const rockGameGrid = document.getElementById("rockPaperScissor");
rockGameGrid.append(
  userChoiceDisplay,
  computerChoiceDisplay,
  resultDisplayRock
); // Creating elements that we will use to put in the game div

const choices = ["rock", "paper", "scissor"];
let userChoice; // Using a non static variable
let computerChoice;

const handleClick = (e) => {
  // Using a function expression
  userChoice = e.target.id; // Whatever we click is stored as the userChoice
  userChoiceDisplay.innerHTML = "Your choice: " + userChoice;
  generateComputerChoice();
  getResults();
};

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]; // This will generate 1, 2 or 2 because it is the length of the choices array
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = "Computer's choice: " + randomChoice;
};

for (let i = 0; i < choices.length; i++) {
  // I want to create three buttons
  const button = document.createElement("button");
  button.classList.add("rockBtn");
  button.id = choices[i]; // Giving the button the ID of either rock, paper or scissor
  button.innerHTML = choices[i];
  button.addEventListener("click", handleClick); // Each time we click the button, call handleClick
  rockGameGrid.appendChild(button);
}

const getResults = () => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissor":
    case "paperrock":
      resultDisplayRock.innerHTML = "Omg you won!";
      break;
    case "paperscissor":
    case "scissorrock":
    case "rockpaper":
      resultDisplayRock.innerHTML = "Oh no, you lost!";
      break;
    case "paperpaper":
    case "scissorscissor":
    case "rockrock":
      resultDisplayRock.innerHTML = "It's a draw!";
      break;
  }
};
