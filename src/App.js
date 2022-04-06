import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home.jsx";
import { ProductsPage } from "./Components/ProductsPage/ProductsPage.jsx";
import { Wishlist } from "./Components/Wishlist/Wishlist.jsx";
import { Cart } from "./Components/Cart/Cart.jsx";
import { Login } from "./Components/Authentication/LogIn/Login.jsx";
import { Signup } from "./Components/Authentication/Signup/Signup.jsx";
import Mockapi from "./mock-api";
import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockapi />} />
      </Routes>
    </div>
  );
}

export default App;
