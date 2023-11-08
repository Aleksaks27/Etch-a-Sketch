// Using javascript, we want the user to choose a certain grid size
// This grid will consist of div elements in a square arrangement
// When the user clicks or hovers over one of these squares, the colour should change
// There could be some additional functionality which allows the user to draw with
// different colours and perhaps erase the board entirely.

const canvas = document.querySelector("#canvas");
let size = 16;
// const changeColor = () => {
//     this.setAttribute("class", "change")
// }

for (let i = 1; i <= size; i++) {
    let line = document.createElement("div");
    for (let j = 1; j <= size; j++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel")
        pixel.addEventListener("click", () => {
            pixel.classList.add("change");
        })
        line.append(pixel);
    }
    line.classList.add("line")
    canvas.append(line);
}