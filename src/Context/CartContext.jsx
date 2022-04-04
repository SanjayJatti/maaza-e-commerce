import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { authState } = useAuth();
  const { userInfo, token } = authState;

  useEffect(() => {
    const getCartItems = async () => {
      if (userInfo.isUserLoggedIn) {
        try {
          const response = await axios.get("/api/user/cart", {
            headers: {
              authorization: token,
            },
          });
          setCart(response.data.cart);
        } catch (error) {
          console.log(error);
        }
      } else {
        setCart([]);
      }
    };
    getCartItems();
  }, [token]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
