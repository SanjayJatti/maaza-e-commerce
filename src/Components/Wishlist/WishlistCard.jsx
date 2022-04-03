import React from "react";
import { calculateDiscountedPrice } from "../ProductsPage/ProductCard";
import { deleteWishlistHandler } from "../../Utils/WishlistFunc";
import { useWishlist } from "../../Context/WishlistContext";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";


const WishlistCard = ({ product }) => {
    const { authState } = useAuth();
    const { userInfo, token } = authState;
    const { wishlist, setWishlist } = useWishlist()
    const navigator= useNavigate();

  return (
    <div>
      <div className="flex-row flex-wrap gap-xl">
        <div className="card card-vertical">
          <img
            className="img-responsive"
            src={product.image}
            alt={product.title}
          />
          <div className="card-info">
            <h4>{product.title}</h4>
            <p>
              {product.categoryName}{" "}
              <span className="text-center">
                {product.rating}
                <i class="fas fa-star checked"></i>
              </span>
            </p>
          </div>
          <div className="card-price">
            <h4>{calculateDiscountedPrice(product.price, product.discount)}</h4>
            <h4 className="light strikethrough">₹{product.price}</h4>
            <h5 className="discount">({product.discount}% OFF)</h5>
          </div>
          <div className="button-container">
            <button className="btn btn-outline-primary btn-long">
              Move to Cart
            </button>
          </div>
          <span className="close-btn flex-center" onClick={() => deleteWishlistHandler(product._id, setWishlist, token, navigator)}>&times;</span>
        </div>
      </div>
    </div>
  );
};

export { WishlistCard };
