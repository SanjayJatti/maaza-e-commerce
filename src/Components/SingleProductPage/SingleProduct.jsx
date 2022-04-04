import React from "react";
import "./SingleProduct.css";
import { Header } from "../Header/Header";

export const SingleProduct = () => {
  return (
    <div>
      <Header />
      <div className="single-product-wrapper">
        <div className="product-image">
          <img
            className="img-responsive"
            src="https://rukminim2.flixcart.com/image/746/895/jvv9zm80/watch/y/x/8/g604-casio-original-imafgh4uj5ump4gn.jpeg?q=50"
            alt="product image"
          ></img>
        </div>
        <div className="product-details flex-column gap-sm">
          <h2>Casio</h2>
          <h4>
            G604 G-Shock ( GST-S110D-1ADR ) Analog-Digital Watch - For Men
          </h4>
          <h4>Analog watch</h4>
          <div className="product-rating flex-center">
            5<i className="fas fa-star checked"></i>
          </div>
          <div>
            <div className="flex-row gap-sm">
              <h3> ₹ 8500</h3>
              <h3 className="light strikethrough">₹ 10000</h3>
              <h4 className="discount">(15% OFF)</h4>
            </div>
            <h4 className="text-success margin-b-lg">inclusive of all taxes</h4>
          </div>
          <hr />
          <p className="margin-t-lg">
            <i className="fas fa-truck font-inherit margin-r-xs"></i>Fast
            Delivery Available
          </p>
          <p>
            <i className="fas fa-check-circle font-inherit margin-r-xs"></i>
            Currently in stock
          </p>
          <div className="flex-row gap-md margin-t-lg">
            <button className="btn btn-primary">
              <i className="fas fa-shopping-cart font-inherit margin-r-xs"></i>
              ADD TO CART
            </button>
            <button className="btn btn-outline-secondary">
              {" "}
              <i className="fas fa-heart font-inherit margin-r-xs"></i>
              ADD TO WISHLIST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
