import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptosData } from '../redux/crypto/cryptoSlice';
import CryptoElement from './CryptoElement';

const CryptoList = () => {
  const { cryptos, isFetched } = useSelector((store) => store.crypto);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isFetched) {
      dispatch(getCryptosData());
    }
  }, [dispatch, isFetched]);
  if (cryptos.length === 0) return <h2>no crypto</h2>;

  return cryptos.map((crypto) => (
    <div key={crypto.id} className="cryptos-container">
      <CryptoElement key={crypto.id} crypto={crypto} />
    </div>
  ));
};

export default CryptoList;
