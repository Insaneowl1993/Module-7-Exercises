import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import BitcoinRates from './BitCoinRates';
import './App.css'; // Assuming you have some CSS for styling

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/bitcoin-rates">Bitcoin Rates</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bitcoin-rates" element={<BitcoinRates />} />
      </Routes>
    </Router>
  );
};

export default App;