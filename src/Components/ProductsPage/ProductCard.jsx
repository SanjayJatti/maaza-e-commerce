import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useNavigate } from "react-router-dom";
import {
  deleteWishlistHandler,
  addWishlistHandler,
} from "../../Utils/WishlistFunc";

export const calculateDiscountedPrice = (originalPrice, discount) => {
  const discountedPrice = originalPrice * (1 - discount / 100);
  return discountedPrice;
};

export const ProductCard = ({ product }) => {
  const { authState } = useAuth();
  const { userInfo, token } = authState;
  const { wishlist, setWishlist } = useWishlist();
  const navigator = useNavigate();

  return (
    <div className="card card-vertical">
      <img className="img-responsive" src={product.image} alt={product.title} />
      <div className="card-info">
        <h4>{product.title}</h4>
        <p>
          {product.categoryName}{" "}
          <span className="text-center">
            {product.rating}
            <i className="fas fa-star checked"></i>
          </span>
        </p>
      </div>
      <div className="card-price">
        <h4>{calculateDiscountedPrice(product.price, product.discount)}</h4>
        <h4 className="light strikethrough">₹{product.price}</h4>
        <h5 className="discount">({product.discount}% OFF)</h5>
      </div>
      <div className="button-container">
        <button className="btn btn-primary btn-long">Add to Cart</button>
      </div>

      {userInfo.isUserLoggedIn &&
      wishlist.find((item) => item._id === product._id) ? (
        <div
          className="btn-absolute"
          onClick={() =>
            deleteWishlistHandler(product._id, setWishlist, token, navigator)
          }
        >
          <i className="fas fa-heart fa-2x text-danger"></i>
        </div>
      ) : (
        <div
          className="btn-absolute"
          onClick={() =>
            addWishlistHandler(product, setWishlist, token, navigator)
          }
        >
          <i className="far fa-heart fa-2x"></i>
        </div>
      )}

      <div id="badge-absolute" className="badge bg-danger">
        New
      </div>
    </div>
  );
};
