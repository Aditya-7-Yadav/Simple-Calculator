import React, { useState } from 'react';
import './App.css'; // Importing CSS file

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("operation");
  const [res, setRes] = useState(0);

  function handleSubmit() {
    switch (operator) {
      case "+":
        setRes(num1 + num2);
        break;
      case "-":
        setRes(num1 - num2);
        break;
      case "*":
        setRes(num1 * num2);
        break;
      case "/":
        setRes(num2 !== 0 ? num1 / num2 : "Cannot divide by zero");
        break;
      default:
        setRes("Select an operator");
    }
  }

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>

      <div className="input-container">
        <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
        <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      </div>

      <div className="button-container">
        <button onClick={() => setOperator("+")}>➕</button>
        <button onClick={() => setOperator("-")}>➖</button>
        <button onClick={() => setOperator("*")}>✖</button>
        <button onClick={() => setOperator("/")}>➗</button>
      </div>

      <h2>Operation:</h2>
      <h4>{num1} {operator} {num2}</h4>

      <button className="equals-button" onClick={handleSubmit}>=</button>

      <h2>Result:</h2>
      <h4 className="result">{res}</h4>
    </div>
  );
}

export default App;
