import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home.jsx";
import { ProductsPage } from "./Components/ProductsPage/ProductsPage.jsx";
import { Wishlist } from "./Components/Wishlist/Wishlist.jsx";
import { Cart } from "./Components/Cart/Cart.jsx";
import { Login } from "./Components/Authentication/LogIn/Login.jsx";
import { Signup } from "./Components/Authentication/Signup/Signup.jsx";
import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute";
import { SingleProduct } from "./Components/SingleProductPage/SingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <SingleProduct />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
