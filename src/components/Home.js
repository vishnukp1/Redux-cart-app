// ProductList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Assets/Assets";
import { addToCart } from "../Reducers/cartReducer";
import { useNavigate } from "react-router-dom";
import {products} from "../Assets/Data"

const Home = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.product.items);
  console.log(products);
const navigate =  useNavigate()
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <button onClick={()=>navigate("/cart")}>go to Cart</button>
    </div>
  );
};

export default Home;
