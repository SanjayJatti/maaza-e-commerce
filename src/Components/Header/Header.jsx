import "../Header/Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFilters } from "../../Context/FilterContext";
import { useAuth } from "../../Context/AuthContext"
import { useWishlist } from "../../Context/WishlistContext";
import { useCart } from "../../Context/CartContext";

export const Header = () => {
  const { dispatch } = useFilters();
  const { authState, authDispatch} = useAuth();
  const { token} = authState;
  const { wishlist } = useWishlist()
  const { cart } = useCart();
  const navigator = useNavigate()

const logOutHandler = () => {
  localStorage.removeItem("token");
  authDispatch({
    type: "AUTH_TOKEN",
    payload: null,
  });
  navigator("/");
};

  return (
    <div className="navbar-container">
      <NavLink to="/" className="nav-link header-title">
        <h2>Maaza</h2>
      </NavLink>
      <div className="nav-list nav-items">
        <div className="nav-item">
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </div>
      </div>
      <div className="search-box-container margin-auto">
        <div className="search-box flex-center">
          <input
            className="search-txt"
            type="search"
            name="search"
            placeholder="Type to search"
            onChange={(e) =>
              dispatch({
                type: "SEARCH",
                payload: e.target.value.toLowerCase(),
              })
            }
          />
          <div className="search-btn flex-center">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>

      <ul className="nav-list nav-social-media">
        {!token ? (
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              <p>LogIn</p>
            </NavLink>
          </li>
        ) : (
          <li className="nav-item" onClick={logOutHandler}>
            <p className="nav-link cursor-pointer">LogOut</p>
          </li>
        )}
        <li className="nav-item">
          <div className="icon-badge-wrapper">
            <NavLink to="/wishlist" className="nav-link">
              <i className="fas fa-heart"></i>
            </NavLink>
            <span className="icon-badge bg-danger flex-center">{token ? wishlist.length : 0}</span>
          </div>
        </li>
        <li className="nav-item">
          <div className="icon-badge-wrapper">
            <NavLink to="/cart" className="nav-link">
              <i className="fas fa-shopping-cart"></i>
            </NavLink>
            <span className="icon-badge bg-danger flex-center">{token ? cart.length : 0}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
