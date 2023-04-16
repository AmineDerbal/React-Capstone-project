import React from 'react';
import PropTypes from 'prop-types';

const CryptoElement = ({ crypto }) => (
  <div className="crypto-card">
    <h2>{crypto.id}</h2>
  </div>
);

CryptoElement.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default CryptoElement;
