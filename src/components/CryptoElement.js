import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cryptoElement.css';
import { useNavigate } from 'react-router-dom';

const CryptoElement = ({ crypto, index }) => {
  const navigate = useNavigate();
  return (
    <div
      className="crypto-card"
      style={{ animation: index % 2 === 0 ? 'backInLeft 2s' : 'backInRight 2s' }}
      onClick={() => navigate(`/details/${crypto.id}`)}
      aria-hidden="true"
    >
      <h2>{crypto.name}</h2>
      <img
        onMouseOver={(e) => {
          e.target.style.animation = 'rotateIn 4s ';
        }}
        onFocus={(e) => {
          e.preventDefault();
        }}
        onMouseOut={(e) => {
          e.target.style.animation = '';
        }}
        onBlur={(e) => {
          e.preventDefault();
        }}
        className="crypto-icon"
        src={crypto.icon}
        alt={crypto.id}
      />
    </div>
  );
};

CryptoElement.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CryptoElement;
