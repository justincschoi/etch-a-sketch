const gridContainer = document.querySelector('.grid-container');

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < 16; j++) {
            const width = 300 / 16; // width and height are same for grid-container
            const square = document.createElement('div');
            square.classList.add('grid-div');
            square.style.width = `${width}px`;
            square.style.height = `${width}px`;
            row.appendChild(square);
        }

        gridContainer.appendChild(row);
    }
};

createGrid();

const gridDivs = document.querySelectorAll('.grid-div');

function highlightOnHover() {
    this.classList.add('hover');
}

function removeHighlight() {
    this.classList.remove('hover');
}
gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseover", highlightOnHover);
    gridDiv.addEventListener("mouseout", removeHighlight);
});
