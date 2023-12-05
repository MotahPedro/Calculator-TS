// // Display
// interface DisplayProps {
//     value: string
// }

// // Variáveis restantes
// type Operation = {
//     operator?: "+"|"-"|"*"|"/"|"%"|"."|"="
// }
// type Operands = {
//     firstOperand: string
//     secondOperand: string
// }

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

const inverse = () => {
  displayValue = (1 / parseFloat(displayValue)).toString()
  updateDisplay()
}


const calculatorController = { addDigitToDisplay, addDecimal, clearAll, clearEntry, clearLastDigit, inverse}

export default calculatorController