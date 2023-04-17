import { configureStore } from '@reduxjs/toolkit';
import cryptosReducer from './crypto/cryptoSlice';
import detailReducer from './detail/detailSlice';

const store = configureStore({
  reducer: {
    crypto: cryptosReducer,
    detail: detailReducer,
  },
});

export default store;
