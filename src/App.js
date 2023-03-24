import './App.css';
import Calculator from './components/calculator';
import Quote from './components/Quote';
import './css/calculator.css';

function App() {
  return (
    <div className="App">
      <div className="main-grp">
        <Quote />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
