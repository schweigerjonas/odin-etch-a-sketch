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
        gridTile.setAttribute("style", `width: ${tileWidth}px; height: ${tileWidth}px;`);
        gridTile.addEventListener("mouseenter", () => {
            gridTile.className = "markedTile";
        });

        container.appendChild(gridTile);
    }
} 