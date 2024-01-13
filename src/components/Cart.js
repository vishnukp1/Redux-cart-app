// ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../Reducers/cartReducer';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}  Price: ${item.price * item.quantity}{' '}
            <button onClick={() => dispatch(increaseQuantity(item.id))}>
              Increase Quantity
            </button>
            Quantity: <h4>{item.quantity}</h4>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
              Decrease Quantity
            </button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
