import { api } from "../../config/apiConfig";
import {
  CREATE_PAYMENT_FAILURE,
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_REQUEST,
} from "./ActionType";

export const createPayment = (orderId) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });
  try {
    const data = await api.post(`/api/payments/${orderId}`);
    console.log("data", data);
    // if(data.payment_link_url){
    //     window.location.href=data.payment_link_url;
    //   }
    if (data.data.payment_link_url) {
      console.log("payment link url :", data.data.payment_link_url);
      window.location.href = data.data.payment_link_url;
      console.log("href",window.location.href)
    }

    dispatch({
      type: CREATE_PAYMENT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
  }
};

export const updatePayment = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYMENT_REQUEST });
  try {
    const data = await api.get(
      `/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`
    );
    // console.log('reqdata : ', reqData.paymentId, reqData.orderId)
    console.log("update payment  ", data);

    // if (data.data.payment_link_url) {
    //   window.location.href = data.payment_link_url;
    // }
  } catch (error) {
    dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
  }
};
