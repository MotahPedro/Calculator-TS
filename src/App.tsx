import React from 'react'
import './App.css'

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



function App() {

  return (
    <h1>Em Construção</h1>
  )
}

export default App
