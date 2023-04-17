import React from 'react';
import PropTypes from 'prop-types';
import '../styles/detailElement.css';

const DetailElement = ({ details }) => (
  <div className="details-card">
    <img className="detail-icon" src={details.icon} alt={details.id} />
    <h2>{details.name}</h2>
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{details.name}</td>
        </tr>
        <tr>
          <td>Rank</td>
          <td>{details.rank}</td>
        </tr>
        <tr>
          <td>Symbol</td>
          <td>{details.symbol}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(
              details.price,
            )}
          </td>
        </tr>
        <tr>
          <td>Conversion rate to BTC</td>
          <td>
            {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
              details.priceBtc,
            )}
          </td>
        </tr>
        <tr>
          <td>Daily change for Price</td>
          <td>{details.priceChange1d}</td>
        </tr>
        <tr>
          <td>Hourly change for Price</td>
          <td>{details.priceChange1h}</td>
        </tr>
        <tr>
          <td>Weekly change for Price</td>
          <td>{details.priceChange1w}</td>
        </tr>
        <tr>
          <td>Total Supply</td>
          <td>
            {' '}
            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(
              details.totalSupply,
            )}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

DetailElement.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
    rank: PropTypes.number,
    symbol: PropTypes.string,
    price: PropTypes.number,
    priceBtc: PropTypes.number,
    priceChange1d: PropTypes.number,
    priceChange1h: PropTypes.number,
    priceChange1w: PropTypes.number,
    totalSupply: PropTypes.number,
  }).isRequired,
};

export default DetailElement;
