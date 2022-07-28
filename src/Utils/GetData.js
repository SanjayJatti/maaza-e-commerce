import axios from "axios";
import { GET_DATA_ERROR, GET_PRODUCTS } from "../Constants/ProductsConstants";

   const getProducts = async (dispatch) => {
    try {
      const response = await axios.get("/api/products");
      dispatch({
        type: GET_PRODUCTS,
        payload: response.data.products,
      });
    } catch (error) {
      dispatch({
        type: GET_DATA_ERROR,
        payload: error,
      });
    }
  };

export { getProducts }