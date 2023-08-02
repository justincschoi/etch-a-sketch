const gridContainer = document.querySelector('.grid-container');

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < 16; j++) {
            const width = 300 / 16; // width and height are same for grid-container
            const column = document.createElement('div');
            column.classList.add('grid-div');
            column.style.width = `${width}px`;
            column.style.height = `${width}px`;
            row.appendChild(column);
        }

        gridContainer.appendChild(row);
    }
};

createGrid();