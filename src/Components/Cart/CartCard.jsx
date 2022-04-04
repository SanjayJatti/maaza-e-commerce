import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { useCart } from "../../Context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../Context/WishlistContext.jsx";
import {
  deleteWishlistHandler,
  addWishlistHandler,
} from "../../Utils/WishlistFunc";
import {
  deleteCartItemHandler,
  increaseCartItem,
  decreaseCartItem,
} from "../../Utils/CartFunc";
import "./Cart.css";

const CartCard = ({ product }) => {
  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const {
    authState: { token },
  } = useAuth();

  const navigator = useNavigate();

  return (
    <div className="card card-horizontal">
      <img className="img-square" src={product.image} alt={product.title} />
      <div className="column-container padding-y-xs margin-auto">
        <h4>{product.title}</h4>
        <p>
          {product.categoryName}{" "}
          <span className="text-center">
            {product.rating}
            <i class="fas fa-star checked"></i>
          </span>
        </p>
        <div className="flex-row gap-xs">
          <h5>₹{product.discountedPrice}</h5>
          <h5 className="light strikethrough">₹{product.price}</h5>
          <h5 className="discount">({product.discount}% OFF)</h5>
        </div>
        <div className="text-medium margin-y-xs">
          Quantity :
          <button
            className="btn-decrease margin-l-sm"
            onClick={() => {
              if (product.qty <= 1) {
                deleteCartItemHandler(product._id, setCart, token, navigator);
              } else {
                decreaseCartItem(product._id, setCart, token, navigator, null);
              }
            }}
          >
            -
          </button>
          <span className="quantity">{product.qty}</span>
          <button
            className="btn-increase"
            onClick={() =>
              increaseCartItem(product._id, setCart, token, navigator, null)
            }
          >
            +
          </button>{" "}
        </div>
        <div className="flex-column gap-xs">
          <button
            id="btn-md"
            className="btn btn-outline-secondary"
            onClick={() => deleteCartItemHandler(product._id, setCart, token)}
          >
            {" "}
            Remove
          </button>

          {wishlist.find((item) => item._id === product._id) ? (
            <button
              id="btn-md"
              className="btn btn-secondary"
              onClick={() =>
                deleteWishlistHandler(
                  product._id,
                  setWishlist,
                  token,
                  navigator
                )
              }
            >
              Remove from Wishlist
            </button>
          ) : (
            <button
              id="btn-md"
              className="btn btn-secondary "
              onClick={() => {
                addWishlistHandler(product, setWishlist, token, navigator);
                deleteCartItemHandler(product._id, setCart, token, navigator);
              }}
            >
              Move to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { CartCard };