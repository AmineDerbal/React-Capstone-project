import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cryptoElement.css';
import { useNavigate } from 'react-router-dom';

const CryptoElement = ({ crypto, index }) => {
  const navigate = useNavigate();
  return (
    <div
      className="crypto-card"
      onClick={() => navigate(`/details/${crypto.id}`)}
      aria-hidden="true"
    >
      <h2>
        {crypto.id}
        {index}
      </h2>
      <img className="crypto-icon" src={crypto.icon} alt={crypto.id} />
    </div>
  );
};

CryptoElement.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CryptoElement;
