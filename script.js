const displayable = document.querySelectorAll(".displayable");
const compute = document.getElementById("equal");
const clearScreen = document.getElementById("clear");
const screen = document.querySelector(".display");
const answer = document.querySelector(".answer"); //  answer display area

for (let i = 0; i < displayable.length; i++) {
  displayable[i].addEventListener("click", display);
}

compute.addEventListener("click", calculate);
clearScreen.addEventListener("click", clear);

function display(e) {
  screen.textContent += e.target.innerText;
  screen.scrollLeft = screen.scrollWidth;
  answer.scrollLeft = 0;
}

function calculate() {
  const expression = screen.innerText;
  console.log(expression);
  let cleaned = expression
    .replace(/\u00d7/g, "*")
    .replace(/\u2212/g, "-")
    .replace(/\u00f7/, "/");
  console.log(cleaned);
  console.log(typeof cleaned);
  const result = Number(eval(cleaned)).toFixed(6);
  answer.textContent = result;
}

function clear() {
  screen.innerText = "";
  answer.innerText = "";
}
