function createSketchbox(size) {
  let sketchbox = document.querySelector("#sketchbox");
  sketchbox.innerHTML = "";
  sketchbox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchbox.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let area = size * size;

  for (let i = 0; i < area; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
    sketchbox.appendChild(square);
  }
}

createSketchbox(16);

function changeSize() {
  let size = prompt("How many squares per side? (1 - 100)");
  createSketchbox(size);
  if (size < 1 || size > 100) {
    changeSize();
  }
}
