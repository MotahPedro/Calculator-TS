import React from 'react'
import './App.css'

// Display
interface DisplayProps {
  value: string
}

// Variáveis restantes
type Operation = {
  operator?: "+"|"-"|"*"|"/"|"%"|"."|"="
}
type Operands = {
  firstOperand: string
  secondOperand: string
}

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
          <Button label="/" onClick={() => {}} className="function" />
        </div>

        {/* Row 3*/}
        <div className="button-row">
          <Button label="7" onClick={() => {}} className="function" />
          <Button label="8" onClick={() => {}} className="function" />
          <Button label="9" onClick={() => {}} className="function" />
          <Button label="*" onClick={() => {}} className="function" />
        </div>

        {/* Row 4*/}
        <div className="button-row">
          <Button label="4" onClick={() => {}} className="function" />
          <Button label="5" onClick={() => {}} className="function" />
          <Button label="6" onClick={() => {}} className="function" />
          <Button label="-" onClick={() => {}} className="function" />
        </div>

        {/* Row 5*/}
        <div className="button-row">
          <Button label="1" onClick={() => {}} className="function" />
          <Button label="2" onClick={() => {}} className="function" />
          <Button label="3" onClick={() => {}} className="function" />
          <Button label="+" onClick={() => {}} className="function" />
        </div>

        {/* Row 6*/}
        <div className="button-row">
          <Button label="+/-" onClick={() => {}} className="function" />
          <Button label="0" onClick={() => {}} className="function" />
          <Button label="." onClick={() => {}} className="function" />
          <Button label="=" onClick={() => {}} className="function" />
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
