import { Header } from "../Header/Header.jsx";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer.jsx";
import "../Home/Home.css";
export const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-page">
        <div className="hero-section flex-column-center gap-md margin-t-xxl">
          <h1 className="padding-sm">
            Maaza
            <span className="text-secondary font-inherit"> Mart</span>
          </h1>
          <h1>UPTO 30% OFF on various products</h1>
          <Link to="/products">
            <button className="btn btn-primary btn-large">
              <h3>Shop Now</h3>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
