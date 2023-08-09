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
let mouseDown = false;
let etch = true;

const clear = document.getElementById('clear');

function clearGrid() {
    gridDivs.forEach((gridDiv) => {
        gridDiv.classList.remove('fill');
    })
};

clear.addEventListener("click", clearGrid);

const erase = document.getElementById('erase');

erase.addEventListener("click", eraseDiv);

function eraseDiv() {
    etch = false;
    highlightSelection(etch);
};

const draw = document.getElementById('draw');

draw.addEventListener("click", drawDiv);

function drawDiv() {
    etch = true;
    highlightSelection(etch);
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

highlightSelection(etch); // highlights default draw button

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
