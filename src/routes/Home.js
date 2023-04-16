import React from 'react';
import CryptoList from '../components/CryptoList';

const Home = () => (
  <div className="container">
    <div className="bookstore-container">Hello there</div>
    <CryptoList />
    <div className="Line" />
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
    </div>
  </div>
);

export default Home;
