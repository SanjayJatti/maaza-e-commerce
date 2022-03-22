import React from "react";
import { products } from "../../backend/db/products";

export const ProductCard = ({product}) => {

  const calculateDiscountedPrice =(originalPrice, discount) =>{
     const discountedPrice = originalPrice * (1 - (discount / 100))
     return discountedPrice
  }

  return (
    <div className="card card-vertical">
      <img
        className="img-responsive"
        src= {product.image}
        alt={products.title}
      />
      <div className="card-info">
        <h4>{product.title}</h4>
        <p>{product.categoryName} <span className="text-center">{product.rating}<i class="fas fa-star checked"></i></span></p>
      </div>
      <div className="card-price">
        <h4>{calculateDiscountedPrice(product.price, product.discount)}</h4>
        <h4 className="light strikethrough">₹{product.price}</h4>
        <h5 className="discount">({product.discount}% OFF)</h5>
      </div>
      <div className="button-container">
        <button className="btn btn-primary btn-long">Add to Cart</button>
      </div>
      <a className="btn btn-absolute" href="#">
        <span>
          <i className="far fa-heart fa-2x"></i>
        </span>
      </a>
      <div id="badge-absolute" className="badge bg-danger">
        New
      </div>
    </div>
  );
};
