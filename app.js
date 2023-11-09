// Using javascript, we want the user to choose a certain grid size
// This grid will consist of div elements in a square arrangement
// When the user clicks or hovers over one of these squares, the colour should change
// There could be some additional functionality which allows the user to draw with
// different colours and perhaps erase the board entirely.

const canvas = document.querySelector("#canvas");
const clear = document.querySelector("#clear");
const input = document.querySelector("#size");

function createGrid(size, pixelSize) {
    for (let i = 1; i <= size; i++) {
        let line = document.createElement("div");
        line.style.height = `${pixelSize}px`
        for (let j = 1; j <= size; j++) {
            let pixel = document.createElement("div");
            pixel.style.cssText = `width: ${pixelSize}px; height: ${pixelSize}px`
            pixel.classList.add("pixel");
            line.append(pixel);
        }
        line.classList.add("line");
        canvas.append(line);
    }
}

function draw() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("click", () => {
        pixel.classList.add("draw");
    }))
}

function erase() {
    const pixels = document.querySelectorAll(".pixel");
    const lines = document.querySelectorAll(".line");
    pixels.forEach(pixel => pixel.remove());
    lines.forEach(line => line.remove())
}

function initialize() {
    let size = input.value;
    let pixelSize = (400/size);
    createGrid(size, pixelSize);
    draw();
}

input.addEventListener("change", () => {
    erase();
    initialize()
});

clear.addEventListener("click", () => {
    erase();
    initialize();
});

initialize();