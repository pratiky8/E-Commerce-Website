import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../redux/order/Action";
import { updatePayment } from "../../../redux/payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();
  const dispach = useDispatch();
  const { order } = useSelector((store) => store);

  console.log(" orderId ", orderId)

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    console.log("urlParam",urlParam)
    // setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentId(urlParam.get("razorpay_payment_link_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if(paymentId){
      const data = { orderId, paymentId };

      dispach(getOrderById(orderId));
      dispach(updatePayment(data));
    }
    
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order Get Placed
        </Alert>
      </div>
      <OrderTracker activeStep={1} />
      <Grid container className="space-y-5 py-5 pt-20">
        {order.order?.orderItems.map((item,index) => (
          <Grid
          key={index}
            container
            item
            className="shadow-xl rounded-md p-5"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                {/* {console.log({order})} */}
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item.product?.imageUrl}
                  alt=""
                />

                <div className="ml-5 space-y-2">
                  <p>{item.product.title}</p>
                  <div className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color:{item.product?.color}</span>
                    <span>Size:{item?.size}</span>
                  </div>
                  <p>Seller: {item.product?.brand}</p>
                  <p>₹ {item.product?.discountedPrice}</p>
                </div>
              </div>
            </Grid>
           <Grid>
            <AddressCard address={order.order?.shippingAddress}/>
           </Grid>

          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
