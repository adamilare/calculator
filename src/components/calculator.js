import CalcBtn from './calcBtn';
import CalcDisplay from './calcDisplay';
import '../css/calculator.css';

const Calculator = () => (
  <section id="calculator">
    <div className="calc-row">
      <CalcDisplay />
    </div>
    <div className="calc-row">
      <CalcBtn text="AC" />
      <CalcBtn text="+/-" />
      <CalcBtn text="%" />
      <CalcBtn text="÷" />
    </div>
    <div className="calc-row">
      <CalcBtn text="7" />
      <CalcBtn text="8" />
      <CalcBtn text="9" />
      <CalcBtn text="x" />
    </div>
    <div className="calc-row">
      <CalcBtn text="4" />
      <CalcBtn text="5" />
      <CalcBtn text="6" />
      <CalcBtn text="-" />
    </div>
    <div className="calc-row">
      <CalcBtn text="1" />
      <CalcBtn text="2" />
      <CalcBtn text="3" />
      <CalcBtn text="+" />
    </div>
    <div className="calc-row">
      <CalcBtn extraClass="col-2" text="0" />
      <CalcBtn text="." />
      <CalcBtn text="=" />
    </div>
  </section>
);

export default Calculator;
