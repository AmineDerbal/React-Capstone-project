import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Details from './routes/Details';
import './App.css';
import 'animate.css';

const App = () => (
  <Router>
    <div>
      <Header />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </Router>
);

export default App;
