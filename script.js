const gridContainer = document.querySelector('.gridContainer');

function createGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < cols; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('gridCell');
            row.appendChild(gridCell);
        }
        gridContainer.appendChild(row);
    }
}

createGrid(16, 16);