const container = document.querySelector(".container");
// let padWidth = getComputedStyle(container).width; // returns width of container in px
let gridSideTileNumber = 16;
let gridTileNumber = gridSideTileNumber * gridSideTileNumber; 
let padWidth = 960;
let tileWidth = padWidth / gridSideTileNumber;

for (let i = 0; i < gridTileNumber; i++) {
    const gridTile = document.createElement("div");
    gridTile.className = "gridTile";
    gridTile.setAttribute("style", `width: ${tileWidth}px; height: ${tileWidth}px;`);
    container.appendChild(gridTile);
} 