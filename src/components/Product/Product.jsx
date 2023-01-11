import React from "react";

const Product = (props) => {
  return (
    <div className="single-product">
      <div className="product-image">
        <img src={props.data.image} className="product-img" alt={props.title} />
      </div>
      <div className="product-info">
        <p className="title">{props.data.title}</p>
        <p className="category">{props.data.category}</p>
        <p className="description">{props.data.description}</p>
        <p className="rating">Rating: {props.data.rating.rate} / 5</p>
        <p className="price">${props.data.price}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => props.action(props.data)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
