const gridContainer = document.querySelector('.grid-container');
const clear = document.getElementById('clear');
const erase = document.getElementById('erase');
const draw = document.getElementById('draw');
const gridSlider = document.getElementById('grid-value');
const sliderTxt = document.getElementById('grid-size')

let mouseDown = false;
let etch = true;
let gridSize = 16;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(gridSize) {
    // Remove child nodes to create new grid
    removeAllChildNodes(gridContainer);

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < gridSize; j++) {
            // width and height are same for grid-container
            const width = 300 / gridSize;
            const square = document.createElement('div');
            square.classList.add('grid-div');
            square.style.width = `${width}px`;
            square.style.height = `${width}px`;
            row.appendChild(square);
        }

        gridContainer.appendChild(row);
    }
};
// initial grid creation
createGrid(gridSize);

let gridDivs = document.querySelectorAll('.grid-div');

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
    // prevents mousedown drag on a filled grid
    e.preventDefault();
    if (etch) {
        this.classList.add('fill');
    } else {
        this.classList.remove('fill');
    }
};

function handleGridEventListeners() {
    gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener("mouseover", handleMouseOver);
        gridDiv.addEventListener("mouseout", handleMouseOut);
        gridDiv.addEventListener("mousedown", fillGrid);
    });
}

// highlights default draw button
highlightSelection(etch);

clear.addEventListener("click", clearGrid);
erase.addEventListener("click", eraseDiv);
draw.addEventListener("click", drawDiv);

gridSlider.addEventListener("input", () => {
    gridSize = gridSlider.value;
    sliderTxt.innerText = `${gridSize} x ${gridSize}`;
    createGrid(gridSize);
    gridDivs = document.querySelectorAll('.grid-div');
    handleGridEventListeners();
});

gridContainer.addEventListener("mousedown", () => {
    mouseDown = true;
});

gridContainer.addEventListener("mouseup", () => {
    mouseDown = false;
});

handleGridEventListeners();
