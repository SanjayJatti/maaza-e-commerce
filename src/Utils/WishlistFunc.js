import axios from "axios";

const deleteWishlistHandler = async (id, setWishlist, token, navigator) => {

  if (token) {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: {
          authorization: token,
        },
      });
      setWishlist(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  } else {
    navigator("/login");
  }
};

const addWishlistHandler = async (product, setWishlist, token, navigator) => {
  if (token) {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: { authorization:token },
        }
      );
      setWishlist(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  } else {
    navigator("/login");
  }
};

export { deleteWishlistHandler, addWishlistHandler };
