import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
} from "./ActionType";
import { api,publicApi } from "../../config/apiConfig";

export const findProducts = (reqData) => async (dispatch) => {
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
// console.log( "reqData", reqData)
  try {
    dispatch({ type: FIND_PRODUCTS_REQUEST });

    const { data } = await publicApi.get(
      `/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

  //   console.log("get product by category - ", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

// ✅ Fetch a single product by ID
export const findProductsById = (reqData) => async (dispatch) => {
  // console.log("findProductsById reqdata: ", reqData)
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

  try {
    const { productId } = reqData; // Extract productId from request data
    const { data } = await publicApi.get(`/products/id/${productId}`);
  //   console.log("findProductById", data)

    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
