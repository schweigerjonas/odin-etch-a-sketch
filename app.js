const PAD_WIDTH = 960;
const DEFAULT_GRID_SIDE_TILE_NUMBER = 16;
// let padWidth = getComputedStyle(container).width; // returns width of container in px
const container = document.querySelector(".container");

createGrid(DEFAULT_GRID_SIDE_TILE_NUMBER);

function createGrid(gridSideTileNumber) {
    const gridTileNumber = gridSideTileNumber * gridSideTileNumber;
    const tileWidth = PAD_WIDTH / gridSideTileNumber;

    for (let i = 0; i < gridTileNumber; i++) {
        const gridTile = document.createElement("div");
        
        gridTile.className = "gridTile";
        gridTile.style.height = `${tileWidth}px`;
        gridTile.style.width = `${tileWidth}px`;
        gridTile.addEventListener("mouseenter", () => {
            let red = generateRandomRgbValue();
            let green = generateRandomRgbValue();
            let blue = generateRandomRgbValue();
            gridTile.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            
            // gridTile.className = "markedTile";
        });

        container.appendChild(gridTile);
    }
}

const btn = document.querySelector(".btn");
btn.onclick = () => {
    let sideTileNumberInput = 0;
    
    while (sideTileNumberInput <= 0 || sideTileNumberInput === null || sideTileNumberInput > 100) {
        sideTileNumberInput = prompt("Enter the desired number of tiles per side of the new grid!", DEFAULT_GRID_SIDE_TILE_NUMBER);
        if (sideTileNumberInput <= 0 || sideTileNumberInput > 100) alert("Invalid number. Enter a value in the range of 0 to 100!");
    }

    container.replaceChildren();
    createGrid(sideTileNumberInput);
}

function generateRandomRgbValue() {
    return Math.floor(Math.random() * 255);
}