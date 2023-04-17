import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cryptoElement.css';

const CryptoElement = ({ crypto, index }) => (
  <div className="crypto-card">
    <h2>
      {crypto.id}
      {index}
    </h2>
    <img className="crypto-icon" src={crypto.icon} alt={crypto.id} />
  </div>
);

CryptoElement.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CryptoElement;
