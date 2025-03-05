import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import { mens_kurta } from '../../../data/Men/Mens_kurta'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../redux/order/Action'
import { useLocation } from 'react-router-dom'
import { HandymanOutlined } from '@mui/icons-material'
import { createPayment } from '../../../redux/payment/Action'

const OrderSummary = () => {
  const dispach = useDispatch()
  const location = useLocation()
  const {order} = useSelector(store=>store)
  const searchParams = new URLSearchParams(location.search)
  const orderId= searchParams.get("order_id")

  useEffect(()=>{
    dispach(getOrderById(orderId))
  },[orderId])

  const handleCheckOut = ()=>{
    console.log("handle checkout clicked : orderId" , orderId)
    dispach(createPayment(orderId))
}
  return (
    <div>
      <div className='p-5 shadow-lg roundeds-md border'>
          <AddressCard address = {order.order?.shippingAddress}/>
      </div>
      <div className="">
      {true && <div className="lg:grid grid-cols-3  relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
        <div className=" space-y-3">
          { order.order?.orderItems.map((item,index) => (
            <>
              <CartItem item={item} key={index} showButton={true}/>
            </>
          ))} 
        </div>
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
        <div className="border p-5 bg-white shadow-lg rounded-md">
          <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
          <hr />

          <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black ">
            
              <span>Price {order.order?.totalItem} item</span>
              <span>₹{order.order?.totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-700">-₹{order.order?.discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-700">₹{order.order?.totalDiscountedPrice}</span>
            </div>
          </div>

          <Button
            variant="contained"
            type="submit"
            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            onClick={handleCheckOut}
          >
            Check Out
          </Button>
        </div>
      </div>
      </div>}
      
    </div>
    </div>
  )
}

export default OrderSummary
