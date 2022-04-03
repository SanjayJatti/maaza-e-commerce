import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { authState } = useAuth();
  const { userInfo, token } = authState;

  useEffect(() => {
    const getWishlist = async () => {
      if (userInfo.isUserLoggedIn) {
        try {
          const response = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: token,
            },
          });
          setWishlist(response.data.wishlist);
        } catch (error) {
          console.log(error);
        }
      } else {
        setWishlist([]);
      }
    };
    getWishlist();
  }, [token]);

  return (
    <wishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { useWishlist, WishlistProvider };
