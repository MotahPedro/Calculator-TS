let displayValue = "0";
let operator = "";
let firstOperand = "";
let isSecondOperand = false;

// CUpdates Display
const updateDisplay = () => {
  const displayElement = document.getElementsByClassName("display")[0];
  if (displayElement) {
    displayElement.textContent = displayValue;
  } else {
    alert("Não foi possível encontrar o elemento de exibição");
  }
};

// Add a number to display
const addDigitToDisplay = (number: number) => {
  if (isSecondOperand) {
    displayValue = number.toString();
    isSecondOperand = false;
  } else {
    displayValue =
      displayValue === "0" ? number.toString() : displayValue + number;
  }

  updateDisplay();
};

// Calculate Pergentage
const percentage = () => {
  if (firstOperand !== "" && !isSecondOperand) {
    const percentage = (
      (parseFloat(firstOperand) * parseFloat(displayValue)) /
      100
    ).toString();
    displayValue = percentage;
    updateDisplay();
  } else {
    displayValue = (parseFloat(displayValue) / 100).toString();
    updateDisplay();
  }
}

// Add decimal point
const addDecimal = () => {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  updateDisplay();
}


// Clear all data
const clearAll = () => {
  displayValue = "0";
  operator = "";
  firstOperand = "";
  isSecondOperand = false;
  updateDisplay();
};

// Clear last data entry
const clearEntry = () => {
  displayValue = '0'
  updateDisplay()
}

// Clear last digit
const clearLastDigit = () => {
  displayValue = (displayValue.length === 1) ? '0' : displayValue.slice(0,-1)
  updateDisplay()
}

// Invert the number. 8/1 becomes 1/8 or 0.125
const inverse = () => {
  displayValue = (1 / parseFloat(displayValue)).toString()
  updateDisplay()
}

// Multiply the number by itself
const square = () => {
  displayValue = (parseFloat(displayValue) ** 2).toString()
  updateDisplay()
}

// Discover the number wich multiplied by hilself equals the selected number
const squareRoot = () => {
  displayValue = Math.sqrt(parseFloat(displayValue)).toString();
  updateDisplay();
};

const calculate = () => {
  const secondOperand = displayValue
  switch (operator) {
    case '+':
      displayValue = (
        parseFloat(firstOperand) + parseFloat(secondOperand)
      ).toString();
      break;
    case '-':
      displayValue = (
        parseFloat(firstOperand) - parseFloat(secondOperand)
      ).toString();
      break;
    case '*':
      displayValue = (
        parseFloat(firstOperand) * parseFloat(secondOperand)
      ).toString();
      break;
    case '/':
      if (parseFloat(secondOperand) !== 0){
        displayValue = (
          parseFloat(firstOperand) / parseFloat(secondOperand)
        ).toString();
      } else {
        displayValue = "Error"
      }
      break;

    default:
      break;
  }
  operator = "";
  firstOperand = "";
  isSecondOperand = false;
  updateDisplay();
}

const Operator = (selectedOperator: string) => {
  if (firstOperand === '') {
    firstOperand = displayValue
  } else {
    calculate()
  }
  operator = selectedOperator
  isSecondOperand = true
  displayValue = '0'
  updateDisplay()
}

const add = () => {
  Operator("+");
}

const subtract = () => {
  Operator("-");
}

const multiply = () => {
  Operator("*");
}

const divide = () => {
  Operator("/");
}


const calculatorController = { addDigitToDisplay, addDecimal, clearAll, clearEntry, clearLastDigit, inverse, square, squareRoot, percentage, add, subtract, multiply, divide, calculate}

export default calculatorController