import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  deleteWishlistHandler,
  addWishlistHandler,
} from "../../Utils/WishlistFunc";
import { addToCartHandler } from "../../Utils/CartFunc";

export const ProductCard = ({ product }) => {
  const { authState } = useAuth();
  const { userInfo, token } = authState;
  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart();
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
        <h4>₹{product.discountedPrice}</h4>
        <h4 className="light strikethrough">₹{product.price}</h4>
        <h5 className="discount">({product.discount}% OFF)</h5>
      </div>
      {cart.find((item) => item._id === product._id) ? (
        <div className="button-container">
          <button
            className="btn btn-secondary btn-long"
            onClick={() => navigator("/cart")}
          >
            Go to Cart
          </button>
        </div>
      ) : (
        <div className="button-container">
          <button
            className="btn btn-primary btn-long"
            onClick={() =>
              userInfo.isUserLoggedIn
                ? addToCartHandler(product, setCart, token)
                : navigator("/login")
            }
          >
            Add to Cart
          </button>
        </div>
      )}

      {wishlist.find((item) => item._id === product._id) ? (
        <div
          className="btn-absolute"
          onClick={() =>
            userInfo.isUserLoggedIn
              ? deleteWishlistHandler(
                  product._id,
                  setWishlist,
                  token
                )
              : navigator("/login")
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
