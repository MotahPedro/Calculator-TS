import React from 'react'
import './App.css'

// Display
interface DisplayProps {
  value: string
}

// Variáveis restantes
type Operation = {
  operator?: "+"|"-"|"*"|"/"|"%"
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

// const App: React.FC = () => {
//   return (
//     <></>
//   )
// }


function App() {

  return (
    <h1>Em Construção</h1>
  )
}

export default App
