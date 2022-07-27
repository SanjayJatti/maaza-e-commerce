import axios from "axios";
import toast from "react-hot-toast";
import { toastStyle } from "../Components/toastStyle";
const addToCartHandler = async (product, setCart, token) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setCart(response.data.cart);
    toast.success("Product added to cart", toastStyle);
  } catch (error) {
    toast.error("Failed to add item to Cart", toastStyle);
  }
};

const deleteCartItemHandler = async (id, setCart, token) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: token,
      },
    });
    setCart(response.data.cart);
    toast.error("Product removed from cart", toastStyle);
  } catch (error) {
    toast.error("Failed to remove item from Cart", toastStyle);
  }
};

const increaseCartItem = async (id, setCart, token) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setCart(response.data.cart);
    toast.success("Product incremented by 1", toastStyle);
  } catch (error) {
    toast.error("Failed to increment", toastStyle);
  }
};

const decreaseCartItem = async (id, setCart, token) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setCart(response.data.cart);
    toast.success("Product decremented by 1", toastStyle);
  } catch (error) {
    toast.error("Failed to decrement", toastStyle);
  }
};

export {
  addToCartHandler,
  deleteCartItemHandler,
  increaseCartItem,
  decreaseCartItem,
};
