const canvas = document.querySelector("#canvas");
const clear = document.querySelector("#clear");
const input = document.querySelector("#size");
const colorChooser = document.querySelector("#colorChooser");

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
    pixels.forEach(pixel => pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "black";
    })
)}

function erase() {
    const pixels = document.querySelectorAll(".pixel");
    const lines = document.querySelectorAll(".line");
    pixels.forEach(pixel => pixel.remove());
    lines.forEach(line => line.remove())
}

function changeColor(color) {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = `${color}`;
    })
)}

function initialize() {
    let size = input.value;
    if (size > 100) size = 100;
    let pixelSize = (450/size);
    createGrid(size, pixelSize);
    draw();
}

input.addEventListener("change", () => {
    erase();
    initialize();
    changeColor(colorChooser.value);
});

clear.addEventListener("click", () => {
    erase();
    initialize();
    changeColor(colorChooser.value);
});

colorChooser.addEventListener("change", () => {
    changeColor(colorChooser.value);
})

initialize();