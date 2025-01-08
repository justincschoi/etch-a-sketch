const gridContainer = document.querySelector('.gridContainer');
const gridButton = document.querySelector('.gridButton');
let GRID_SIZE = 16;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            let gridHeight = 500 / gridSize;
            const gridCell = document.createElement('div');
            gridCell.classList.add('gridCell');
            gridCell.style.width = `${gridHeight}px`;
            gridCell.style.height = `${gridHeight}px`;
            row.appendChild(gridCell);
        }
        gridContainer.appendChild(row);
    }
}

function highlightGridCell(event) {
    event.target.classList.add('highlight');
}

function clearGrid() {
    gridContainer.innerText = '';
}

function resizeGrid() {
    GRID_SIZE = prompt('Enter new grid size (1 - 100)');
    if (GRID_SIZE >= 1 && GRID_SIZE <= 100) {
        clearGrid();
        createGrid(GRID_SIZE);
    } else {
        alert('Please enter a number between 1 - 100');
    }
}

gridContainer.addEventListener('mouseover', highlightGridCell);
gridButton.addEventListener('click', resizeGrid);
createGrid(GRID_SIZE);