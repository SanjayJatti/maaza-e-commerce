import "../Header/Header.css"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/" className="nav-link header-title">
        <h2>Maaza</h2>
      </NavLink>
      <div className="nav-list nav-items">
        <li className="nav-item">
         <NavLink to="/products" className="nav-link">
           <p>Products</p>
          </NavLink>
        </li>
      </div>
      <div className="search-box-container margin-auto">
        <div className="search-box flex-center">
          <input
            className="search-txt"
            type="search"
            name="search"
            placeholder="Type to search"
          />
         <div className="search-btn flex-center">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>

      <ul className="nav-list nav-social-media">
        <li className="nav-item">
         <NavLink to="/login" className="nav-link">
            <i className="fas fa-user"></i>
          </NavLink>
        </li>
        <li className="nav-item">
         <NavLink to="/wishlist" className="nav-link">
            <i className="fas fa-heart"></i>
          </NavLink>
        </li>
        <li className="nav-item">
         <NavLink to="/cart" className="nav-link">
            <i className="fas fa-shopping-cart"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
