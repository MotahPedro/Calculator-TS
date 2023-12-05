import React from 'react'
import './App.css'
import {addDigitToDisplay} from './utils/calculatorFunctions'

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
          <Button label="%" onClick={() => {}} className="function" />
          <Button label="CE" onClick={() => {}} className="function" />
          <Button label="C" onClick={() => {}} className="function" />
          <Button label="←" onClick={() => {}} className="function" />
        </div>

        {/* Row 2*/}
        <div className="button-row">
          <Button label="1/x" onClick={() => {}} className="function" />
          <Button label="X²" onClick={() => {}} className="function" />
          <Button label="√" onClick={() => {}} className="function" />
          <Button label="/" onClick={() => {}} className="operator" />
        </div>

        {/* Row 3*/}
        <div className="button-row">
          <Button
            label="7"
            onClick={() => { addDigitToDisplay(7) }}
            className="number"
          />
          <Button label="8" onClick={() => { addDigitToDisplay(8) }} className="number" />
          <Button label="9" onClick={() => { addDigitToDisplay(9) }} className="number" />
          <Button label="*" onClick={() => {}} className="operator" />
        </div>

        {/* Row 4*/}
        <div className="button-row">
          <Button label="4" onClick={() => { addDigitToDisplay(4) }} className="number" />
          <Button label="5" onClick={() => { addDigitToDisplay(5) }} className="number" />
          <Button label="6" onClick={() => { addDigitToDisplay(6) }} className="number" />
          <Button label="-" onClick={() => {}} className="operator" />
        </div>

        {/* Row 5*/}
        <div className="button-row">
          <Button label="1" onClick={() => { addDigitToDisplay(1) }} className="number" />
          <Button label="2" onClick={() => { addDigitToDisplay(2) }} className="number" />
          <Button label="3" onClick={() => { addDigitToDisplay(3) }} className="number" />
          <Button label="+" onClick={() => {}} className="operator" />
        </div>

        {/* Row 6*/}
        <div className="button-row">
          <Button label="+/-" onClick={() => {}} className="sign" />
          <Button label="0" onClick={() => {}} className="number" />
          <Button label="." onClick={() => {}} className="sign" />
          <Button label="=" onClick={() => {}} className="equal" />
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
