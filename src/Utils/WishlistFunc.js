import axios from "axios";
import toast from "react-hot-toast";
import { toastStyle } from "../Components/toastStyle";

const addWishlistHandler = async (product, setWishlist, token) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: { authorization: token },
      }
    );
    setWishlist(response.data.wishlist);
    toast.success("Product added to wishlist", toastStyle);
  } catch (error) {
    toast.error("Failed to add item to wishlist", toastStyle);
  }
};

const deleteWishlistHandler = async (id, setWishlist, token) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });
    setWishlist(response.data.wishlist);
    toast.success("Product removed from wishlist", toastStyle);
  } catch (error) {
    toast.error("Failed to remove item from wishlist", toastStyle);
  }
};
export { deleteWishlistHandler, addWishlistHandler };
