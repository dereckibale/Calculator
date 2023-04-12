let num1 = 0;
let num2 = 0;
let operator = "";
let numstrng = "";
let result = 0;

// Define function to update display
function updateDisplay() {
  document.getElementById("mybox").textContent = numstrng;
}

// Define function to handle number button clicks
function handleNumberClick(number) {
  if (operator === "") {
    num1 = num1 * 10 + number;
  } else {
    num2 = num2 * 10 + number;
  }
  numstrng += number.toString();
  updateDisplay();
}

// Define function to handle operator button clicks
function handleOperatorClick(op) {
  operator = op;
  numstrng += op;
  updateDisplay();
}

// Add event listeners to number buttons
document.getElementById("0").addEventListener("click", () => {
  handleNumberClick(0);
});
document.getElementById("1").addEventListener("click", () => {
  handleNumberClick(1);
});
document.getElementById("2").addEventListener("click", () => {
  handleNumberClick(2);
});
document.getElementById("3").addEventListener("click", () => {
  handleNumberClick(3);
});
document.getElementById("4").addEventListener("click", () => {
  handleNumberClick(4);
});
document.getElementById("5").addEventListener("click", () => {
  handleNumberClick(5);
});
document.getElementById("6").addEventListener("click", () => {
  handleNumberClick(6);
});
document.getElementById("7").addEventListener("click", () => {
  handleNumberClick(7);
});
document.getElementById("8").addEventListener("click", () => {
  handleNumberClick(8);
});
document.getElementById("9").addEventListener("click", () => {
  handleNumberClick(9);
});

// Add event listeners to operator buttons
document.getElementById("+").addEventListener("click", () => {
  handleOperatorClick("+");
});
document.getElementById("-").addEventListener("click", () => {
  handleOperatorClick("-");
});
document.getElementById("*").addEventListener("click", () => {
  handleOperatorClick("*");
});
document.getElementById("/").addEventListener("click", () => {
  handleOperatorClick("/");
});

// Add event listener to equals button
document.getElementById("=").addEventListener("click", () => {
  calculate();
});
document.getElementById("restart").addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  operator = "";
  result = 0;
  numstrng = "";
  document.getElementById("mybox").textContent = "Input Number";
});

// Define function to perform calculation
function calculate() {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      break;
  }
  num1 = result;
  num2 = 0;
  operator = "";
  numstrng = result.toString();
  result = 0;
  updateDisplay();
}
//add comment
