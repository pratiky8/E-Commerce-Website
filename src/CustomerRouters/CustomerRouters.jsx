import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/products/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Products from "../customer/components/products/Products";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import PaymentSuccess from "../customer/components/payment/PaymentSuccess";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/payments/:orderId" element={<PaymentSuccess />} />
      </Routes>

      

     
  
      {/* <Checkout /> */}
      {/* <Order /> */}
      {/* <OrderDetails /> */}
{/* <ProductDetails /> */}
      <div>
      <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
