let gridSizeInput = document.querySelector('input[name="size"]');
let colorInput = document.querySelector('input[name="color"]');
let resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", (e) => {
  deleteGridContainer();
  createGridContainer();
  drawGrid(gridSizeInput.value);
});

gridSizeInput.addEventListener("change", (e) => {
  console.log(e.target.value);
  gridSize = Number(gridSizeInput.value);
  console.log(gridSize);
  deleteGridContainer();
  createGridContainer();
  drawGrid(gridSize);
});

function createGridContainer() {
  // Create container
  let gridContainer = document.createElement("div");
  gridContainer.className = "grid-container";
  // Append container to body
  document.body.appendChild(gridContainer);
}

function deleteGridContainer() {
  let gridContainer = document.querySelector(".grid-container");
  gridContainer.remove();
}

function calculateRowHeight() {
  return (800 / gridSizeInput.value).toString() + "px";
}

function drawGrid(gridSize) {
  let grid = document.createDocumentFragment();
  for (let i = 0; i < gridSize; i++) {
    var column = document.createElement("div");
    column.className = "column";
    column.style.height = calculateRowHeight();
    if (i == gridSize - 1) {
      column.style.borderBottom = "2px solid black";
    }

    for (let j = 0; j < gridSize; j++) {
      let row = document.createElement("div");
      row.addEventListener("click", (e) => {
        row.style.backgroundColor = colorInput.value;
      });
      row.className = "row";
      if (j == gridSize - 1) {
        row.style.border = "none";
      }
      column.appendChild(row);
    }
    grid.appendChild(column);
  }
  // Append newly made grid to .grid-container
  let gridContainer = document.querySelector(".grid-container");
  gridContainer.appendChild(grid);
}

createGridContainer();
drawGrid(16);

// #TODO -- Add click and drag feature
