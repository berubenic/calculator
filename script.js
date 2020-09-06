let firstNum;
let secondNum;

//add
function add(firstNum, secondNum) {
  result = firstNum + secondNum;
  if (Number.isInteger(result) === false) {
    result = parseFloat(result).toFixed(2);
  }
  display.innerText = result;
}
//substract
function substract(firstNum, secondNum) {
  result = firstNum - secondNum;
  if (Number.isInteger(result) === false) {
    result = parseFloat(result).toFixed(2);
  }
  display.innerText = result;
}
//multiply
function multiply(firstNum, secondNum) {
  result = firstNum * secondNum;
  if (Number.isInteger(result) === false) {
    result = parseFloat(result).toFixed(2);
  }
  display.innerText = result;
}
//divide
function divide(firstNum, secondNum) {
  result = firstNum / secondNum;
  if (Number.isInteger(result) === false) {
    result = parseFloat(result).toFixed(2);
  }
  display.innerText = result;
}
//operate
function operate(operator, firstNum, secondNum) {
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);
  if (operator === "add") {
    add(firstNum, secondNum);
  } else if (operator === "substract") {
    substract(firstNum, secondNum);
  } else if (operator === "multiply") {
    multiply(firstNum, secondNum);
  } else if (operator === "divide") {
    divide(firstNum, secondNum);
  }
}

// display numbers when clicked
const numBtns = document.querySelectorAll(".number");
const display = document.querySelector("p");

numBtns.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", (e) => {
    if (equalCheck === true) {
      display.innerText = 0;
      displayText = "";
      runningTotal = 0;
      firstNum = 0;
      secondNum = 0;
      operator = "";
      result = 0;
      equalCheck = false;
    }
    numClicked = currentBtn.innerText;
    displayText = displayText + numClicked;
    display.innerText = displayText;
  });
});

//store numbers clicked
let displayText = "";
let runningTotal = 0;

//when click operator, store firstNum, store operator clicked
const operatorBtns = document.querySelectorAll(".operator");
let operator;

operatorBtns.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", (e) => {
    if (runningTotal === 0 && equalCheck === false) {
      firstNum = displayText;
      operator = currentBtn.id;
      runningTotal = firstNum;
      displayText = "";
      decimalBtn.disabled = false;
    } else if (runningTotal > 0) {
      equalCheck = false;
      secondNum = displayText;
      operate(operator, firstNum, secondNum);
      runningTotal = result;
      firstNum = runningTotal;
      operator = currentBtn.id;
      displayText = "";
      decimalBtn.disabled = false;
    }
  });
});

// when click equal, store secondNum, run operator function
let equalCheck = false;

const equalBtn = document.querySelector(".equal");

equalBtn.addEventListener("click", (e) => {
  secondNum = displayText;
  operate(operator, firstNum, secondNum);
  equalCheck = true;
  decimalBtn.disabled = false;
});

// clear button

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", (e) => {
  display.innerText = 0;
  displayText = "";
  runningTotal = 0;
  firstNum = 0;
  secondNum = 0;
  operator = "";
  result = 0;
  equalCheck = false;
  decimalBtn.disabled = false;
});

// decimal point

const decimalBtn = document.querySelector(".dot");

decimalBtn.addEventListener("click", (e) => {
  displayText = displayText + decimalBtn.innerText;
  display.innerText = displayText;
  decimalBtn.disabled = true;
});

// backspace

const backBtn = document.querySelector(".back");

backBtn.addEventListener("click", (e) => {
  displayText = displayText.slice(0, -1);
  display.innerText = display.innerText.slice(0, -1);
  if (equalCheck === true) {
    runningTotal = 0;
    result = Math.floor(result / 10);
    displayText = display.innerText;
    equalCheck = false;
    secondNum = 0;
  }
});

//keyboard support
