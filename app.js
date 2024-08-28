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
        gridTile.style.filter = `brightness(1)`
        gridTile.addEventListener("mouseenter", () => {
            console.log(getComputedStyle(gridTile).backgroundColor);
            /* New color is only assigned after first interaction with tile */
            // if (getComputedStyle(gridTile).backgroundColor === "rgb(225, 225, 225)") {
                let red = generateRandomRgbValue();
                let green = generateRandomRgbValue();
                let blue = generateRandomRgbValue();
                gridTile.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            // }        
            
            // gridTile.className = "markedTile";
            let currentBrightness = getBrightnessValue(gridTile);
            let newBrightness = adjustBrightness(currentBrightness);
            gridTile.style.filter = `brightness(${newBrightness})`;
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

function adjustBrightness(currentBrightness) {
    return currentBrightness -= 0.1;
}

/* Works specifically when only brightness is applied as a filter value */
function getBrightnessValue(element) {
    let filterValue = getComputedStyle(element).filter;
    return filterValue.replace("brightness", "").replace("(", "").replace(")", ""); 
}