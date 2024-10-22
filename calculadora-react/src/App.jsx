import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [calculated, setCalculated] = useState(false); // Novo estado para verificar se já foi calculado

  const handleClick = (value) => {
    if (calculated) {
      setInput(value); // Inicia novo cálculo
      setCalculated(false);
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      // Avaliação segura da expressão
      setInput(eval(input).toString());
      setCalculated(true); // Marca como calculado
    } catch (error) {
      setInput('Erro');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>Calculadora</h1>
        <input type="text" value={input} readOnly />
        <div className="botoes">
          <button onClick={handleClear}>C</button>
          <button onClick={handleBackspace}>{'<'}</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('*')}>x</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={calculate}>=</button>

          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
