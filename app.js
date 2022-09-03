const calc = document.querySelector(".calc");
const btns = document.querySelectorAll(".btn");
const delBtn = document.querySelector(".deleteBtn");
const operators = document.querySelectorAll(".obtn");
const eq = document.querySelector(".special-btn");
let first, second, op;

// EVENT LISTENERS
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    addText(e);
  });
});
delBtn.addEventListener("click", function () {
  calc.value = calc.value.substring(0, calc.value.length - 1);
});
eq.addEventListener("click", calculate);
operators.forEach((operator) => {
  operator.addEventListener("click", function (event) {
    operatorbtn(event);
  });
});

//FUNCTIONS
function addText(event) {
  const inputValue = calc.value;
  calc.value = inputValue + event.target.innerText;
}

function operatorbtn(event) {
  first = parseFloat(calc.value);
  op = event.target.innerText;
  calc.value = "";
}
function calculate() {
  second = parseFloat(calc.value);
  switch (op) {
    case "+":
      calc.value = first + second;
      break;
    case "-":
      calc.value = first - second;
      break;
    case "/":
      calc.value = first / second;
      break;
    case "*":
      calc.value = first * second;
      break;
  }
}
