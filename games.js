const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCells = ["", "", "", "", "", "", "", "", ""]; // Representing the board with an array using strings

let go = "circle";

infoDisplay.textContent = "Circle goes first";

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

  infoDisplay.textContent = "It is now " + go + "'s go";
  e.target.removeEventListener("click", addGo); // Remove eventlistener so you can't click the same square twice
  checkScore(); // Calling checkScore function
}

function checkScore(){
    const allSquares = document.querySelectorAll(".square"); // We need all elements with the class "square"
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    
    winCombos.forEach(array => {
        const circleWin = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains("circle")) // For each array in the array, check every cell. If the cell contains circle or cross, either wins
        if (circleWin) {
            infoDisplay.textContent = "Circle wins!";
        }
    })

    winCombos.forEach(array => {
        const crossWin = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains("cross"))
        if (crossWin) {
            infoDisplay.textContent = "Cross wins!";
        }
    })
}
