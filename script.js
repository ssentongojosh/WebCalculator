const displayable = document.querySelectorAll(".displayable");
const compute = document.getElementById("equal");
const clearScreen = document.getElementById("clear");
const screen = document.querySelector(".display");

for (let i = 0; i < displayable.length; i++) {
  displayable[i].addEventListener("click", display);
}

function display(e) {
  screen.textContent += e.target.innerText;
  screen.scrollLeft = screen.scrollWidth;
}
