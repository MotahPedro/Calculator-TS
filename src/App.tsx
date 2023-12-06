import React from 'react'
import './App.css'
import calculatorController from './utils/calculatorFunctions'

// Button Component
interface ButtonProps {
  label: string;
  onClick: () => void;
  className: string;
}

const Button: React.FC<ButtonProps> = ({label, onClick, className}) => {
  return (
    <div className={`button ${className}`} onClick={onClick}>
      {label}
    </div>
  )
}

const App: React.FC = () => {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        {/* Row 1*/}
        <div className="button-row">
          <Button label="%" onClick={() => { calculatorController.percentage()}} className="function" />
          <Button label="CE" onClick={() => { calculatorController.clearEntry() }} className="function" />
          <Button label="C" onClick={() => { calculatorController.clearAll() }} className="function" />
          <Button label="←" onClick={() => { calculatorController.clearLastDigit()}} className="function" />
        </div>

        {/* Row 2*/}
        <div className="button-row">
          <Button label="1/x" onClick={() => { calculatorController.inverse()}} className="function" />
          <Button label="X²" onClick={() => { calculatorController.square()}} className="function" />
          <Button label="√" onClick={() => { calculatorController.squareRoot()}} className="function" />
          <Button label="/" onClick={() => { calculatorController.divide()}} className="operator" />
        </div>

        {/* Row 3*/}
        <div className="button-row">
          <Button label="7" onClick={() => { calculatorController.addDigitToDisplay(7) }} className="number" />
          <Button label="8" onClick={() => { calculatorController.addDigitToDisplay(8) }} className="number" />
          <Button label="9" onClick={() => { calculatorController.addDigitToDisplay(9) }} className="number" />
          <Button label="*" onClick={() => { calculatorController.multiply()}} className="operator" />
        </div>

        {/* Row 4*/}
        <div className="button-row">
          <Button label="4" onClick={() => { calculatorController.addDigitToDisplay(4) }} className="number" />
          <Button label="5" onClick={() => { calculatorController.addDigitToDisplay(5) }} className="number" />
          <Button label="6" onClick={() => { calculatorController.addDigitToDisplay(6) }} className="number" />
          <Button label="-" onClick={() => { calculatorController.subtract()}} className="operator" />
        </div>

        {/* Row 5*/}
        <div className="button-row">
          <Button label="1" onClick={() => { calculatorController.addDigitToDisplay(1) }} className="number" />
          <Button label="2" onClick={() => { calculatorController.addDigitToDisplay(2) }} className="number" />
          <Button label="3" onClick={() => { calculatorController.addDigitToDisplay(3) }} className="number" />
          <Button label="+" onClick={() => { calculatorController.add()}} className="operator" />
        </div>

        {/* Row 6*/}
        <div className="button-row">
          <Button label="+/-" onClick={() => {}} className="sign" />
          <Button label="0" onClick={() => {calculatorController.addDigitToDisplay(0)}} className="number" />
          <Button label="." onClick={() => {calculatorController.addDecimal()}} className="sign" />
          <Button label="=" onClick={() => {calculatorController.calculate()}} className="equal" />
        </div>
      </div>
    </div>
  );
}


// function App() {

//   return (
//     <h1>Em Construção</h1>
//   )
// }

export default App
