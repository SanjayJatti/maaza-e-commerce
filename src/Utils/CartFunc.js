import axios from "axios";

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
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
  }
};

export {
  addToCartHandler,
  deleteCartItemHandler,
  increaseCartItem,
  decreaseCartItem,
};
