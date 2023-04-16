import { configureStore } from '@reduxjs/toolkit';
import cryptosReducer from './crypto/cryptoSlice';

const store = configureStore({
  reducer: {
    crypto: cryptosReducer,
  },
});

export default store;
