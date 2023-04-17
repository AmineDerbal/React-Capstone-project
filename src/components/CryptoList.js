import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptosData } from '../redux/crypto/cryptoSlice';
import CryptoElement from './CryptoElement';
import Loader from './Loader';

const CryptoList = () => {
  const {
    cryptos, isFetched, isLoading, hasError,
  } = useSelector((store) => store.crypto);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetched) {
      dispatch(getCryptosData());
    }
  }, [dispatch, isFetched]);
  if (cryptos.length === 0) return <h2 className="empty-cryptos">No Crypto was fetched</h2>;
  if (isLoading) return <Loader />;
  if (hasError) return <h2 className="empty-cryptos">An error has occured</h2>;

  return (
    <div className="container">
      <div className="searchBar">
        <input
          type="text"
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Crypto Coins "
        />
      </div>
      <div className="cryptos-container">
        {cryptos
          .filter((crypto) => {
            if (search === '') {
              return crypto;
            }
            if (crypto.id.toLowerCase().includes(search.toLowerCase())) {
              return crypto;
            }
            return null;
          })
          .map((crypto, index) => (
            <CryptoElement key={crypto.id} crypto={crypto} index={index} />
          ))}
      </div>
    </div>
  );
};

export default CryptoList;
