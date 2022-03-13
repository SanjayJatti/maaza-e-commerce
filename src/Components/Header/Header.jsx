import "../Header/Header.css"
const Header = () => {
  return (
    <div className="navbar-container">
      <a href="./index.html" className="nav-link header-title">
        <h2>Maaza</h2>
      </a>

      <ul className="nav-list nav-items">
        <li className="nav-item">
          <a className="nav-link">
            Products
          </a>
        </li>
      </ul>
      <div className="search-box-container margin-auto">
        <div className="search-box flex-center">
          <input
            className="search-txt"
            type="search"
            name="search"
            placeholder="Type to search"
          />
          <a className="search-btn flex-center" >
            <i className="fas fa-search"></i>
          </a>
        </div>
      </div>

      <ul className="nav-list nav-social-media">
        <li className="nav-item">
          <a className="nav-link" >
            <i className="fas fa-user"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
            <i className="fas fa-heart"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >
            <i className="fas fa-shopping-cart"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export { Header };
