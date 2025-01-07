const gridContainer = document.querySelector('.gridContainer');

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('gridCell');
            row.appendChild(gridCell);
        }
        gridContainer.appendChild(row);
    }
}

createGrid(16);