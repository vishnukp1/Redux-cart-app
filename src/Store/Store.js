// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Reducers/cartReducer';
import productReducer from '../Reducers/Reducers';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
