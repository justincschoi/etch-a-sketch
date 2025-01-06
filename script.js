const gridContainer = document.querySelector('.gridContainer');

function createGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('gridCell');
            gridContainer.appendChild(gridCell);
        }
    }
}

createGrid(16, 16);