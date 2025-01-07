const gridContainer = document.querySelector('.gridContainer');

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

gridContainer.addEventListener('mouseover', highlightGridCell);
createGrid(16);