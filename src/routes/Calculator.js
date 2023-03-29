import { useState } from 'react';
import CalcBtn from '../components/calcBtn';
import CalcDisplay from '../components/calcDisplay';
import '../css/calculator.css';
import calculate from '../components/logic.js/calculate';

const Calculator = () => {
  const [data, setData] = useState({});

  const handleClick = (text) => {
    setData(calculate(data, text));
  };

  const getDisplayText = () => {
    if (data) {
      if (!data.next && !data.operation) return data.total ?? '0';
      if (data.operation) {
        return `${data.total ?? '0'} ${data.operation} ${data.next ?? ''}`;
      }
      return data.next ?? data.total;
    }
    return '0';
  };

  return (
    <section className="calc-container">
      <p> Lets do some math!</p>
      <div id="calculator">
        <div className="calc-row">
          <CalcDisplay text={getDisplayText()} />
        </div>
        <div className="calc-row">
          <CalcBtn onClick={handleClick} text="AC" />
          <CalcBtn onClick={handleClick} text="+/-" />
          <CalcBtn onClick={handleClick} text="%" />
          <CalcBtn onClick={handleClick} text="÷" />
        </div>
        <div className="calc-row">
          <CalcBtn onClick={handleClick} text="7" />
          <CalcBtn onClick={handleClick} text="8" />
          <CalcBtn onClick={handleClick} text="9" />
          <CalcBtn onClick={handleClick} text="x" />
        </div>
        <div className="calc-row">
          <CalcBtn onClick={handleClick} text="4" />
          <CalcBtn onClick={handleClick} text="5" />
          <CalcBtn onClick={handleClick} text="6" />
          <CalcBtn onClick={handleClick} text="-" />
        </div>
        <div className="calc-row">
          <CalcBtn onClick={handleClick} text="1" />
          <CalcBtn onClick={handleClick} text="2" />
          <CalcBtn onClick={handleClick} text="3" />
          <CalcBtn onClick={handleClick} text="+" />
        </div>
        <div className="calc-row">
          <CalcBtn onClick={handleClick} extraClass="col-2" text="0" />
          <CalcBtn onClick={handleClick} text="." />
          <CalcBtn onClick={handleClick} text="=" />
        </div>
      </div>
    </section>
  );
};

export default Calculator;
