const PADWIDTH = 960;
// let padWidth = getComputedStyle(container).width; // returns width of container in px

const container = document.querySelector(".container");
let gridSideTileNumber = 16;
let gridTileNumber = gridSideTileNumber * gridSideTileNumber; 
let tileWidth = PADWIDTH / gridSideTileNumber;

for (let i = 0; i < gridTileNumber; i++) {
    const gridTile = document.createElement("div");
    
    gridTile.className = "gridTile";
    gridTile.setAttribute("style", `width: ${tileWidth}px; height: ${tileWidth}px;`);
    gridTile.addEventListener("mouseenter", () => {
        gridTile.className = "markedTile";
    });

    container.appendChild(gridTile);
}