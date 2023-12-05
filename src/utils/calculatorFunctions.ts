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

const calculatorController = { addDigitToDisplay, addDecimal }

export default calculatorController