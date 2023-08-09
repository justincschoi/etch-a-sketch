const gridContainer = document.querySelector('.grid-container');
const clear = document.getElementById('clear');
const erase = document.getElementById('erase');
const draw = document.getElementById('draw');

let mouseDown = false;
let etch = true;

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

function clearGrid() {
    gridDivs.forEach((gridDiv) => {
        gridDiv.classList.remove('fill');
    })
};

function highlightSelection(etch) {
    if (etch) {
        draw.classList.add('selected');
        erase.classList.remove('selected');
    }
    else {
        erase.classList.add('selected');
        draw.classList.remove('selected');
    }
};

function eraseDiv() {
    etch = false;
    highlightSelection(etch);
};

function drawDiv() {
    etch = true;
    highlightSelection(etch);
};

function handleMouseOver() {
    if (mouseDown && etch) {
        this.classList.add('fill');
        this.classList.add('hover');
    }
    else if (mouseDown && !etch) {
        this.classList.remove('fill');
        this.classList.add('hover');
    }
    else {
        this.classList.add('hover');
    }
};

function handleMouseOut() {
    this.classList.remove('hover');
};

function fillGrid(e) {
    e.preventDefault(); // prevents mousedown drag on a filled grid
    if (etch) {
        this.classList.add('fill');
    } else {
        this.classList.remove('fill');
    }
};

highlightSelection(etch); // highlights default draw button

clear.addEventListener("click", clearGrid);
erase.addEventListener("click", eraseDiv);
draw.addEventListener("click", drawDiv);

gridContainer.addEventListener("mousedown", () => {
    mouseDown = true;
});

gridContainer.addEventListener("mouseup", () => {
    mouseDown = false;
});

gridDivs.forEach((gridDiv) => {
    gridDiv.addEventListener("mouseover", handleMouseOver);
    gridDiv.addEventListener("mouseout", handleMouseOut);
    gridDiv.addEventListener("mousedown", fillGrid);
});