import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  const [cart, setCart] = useState([]);
  const addToCart = (cartItem) => {
    const newCart = [...cart, cartItem];
    setCart(newCart);
    // console.log(cart.length);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product data={product} action={addToCart} key={product.id} />
        ))}
      </div>
      <div className="cart-container">
        <p className="cart-title">Order summary</p>
        <Cart data={cart} />
        <button className="review-order-btn">Review Order</button>
      </div>
    </div>
  );
};

export default Shop;
