import axios from "axios";

const addToCartHandler = async (product, setCart, token) => {
  if (token) {
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
  } 
};

const deleteCartItemHandler = async (id, setCart) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: token,
      },
    });
    console.log(response);
    setCart(response.data.cart);
  } catch (error) {
    console.log(error);
  }
};

const increaseCartItem = async (id, setCart, token, navigator) => {
  console.log(token)
  if (token) {
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
  } else {
    navigator("/login");
  }
};

const decreaseCartItem = async (id, setCart, token, navigator) => {
  if (token) {
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
  } else {
    navigator("/login");
  }
};
export {
  addToCartHandler,
  deleteCartItemHandler,
  increaseCartItem,
  decreaseCartItem,
};
