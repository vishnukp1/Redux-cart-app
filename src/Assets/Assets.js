// actions.js
import { setProducts } from '../Reducers/Reducers';

export const fetchProducts = () => {
  // Simulate an API call to fetch products
  const products = [
    { id: 1, name: 'Product A', price: 20 },
    { id: 2, name: 'Product B', price: 30 },
    // Add more products as needed
  ];

  return (dispatch) => {
    dispatch(setProducts(products));
  };
};
