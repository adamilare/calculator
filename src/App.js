import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './routes/Calculator';
import Layout from './components/Layout';
import './css/calculator.css';
import Home from './routes/Home';
import Quote from './routes/Quote';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
