import React from "react";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../redux/cart/Action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
    };
// console.log("data", data.data.quantity)
    dispatch(updateCartItem(data));
  };
  const handleRemoveCartItem = () => {
    console.log(item?.id)
    dispatch(removeCartItem(item?.id));
  };

  // console.log("item",item.product)
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product?.imageUrl}
            alt="imageUrl"
          />
        </div>
        <div className="ml-5 space-y-1">
          {/* <p className="font-semibold">title</p> */}
          <p className="font-semibold"> {item.product?.title}</p>

          <p className="opacity-70">size: {item.size}, color: {item.product?.color}</p>
          <p className="opacity-70 mt-2">Seller: {item.product?.brand}</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹ {item.product?.price}</p>
            <p className="font-semibold text-lg">₹{item.product?.discountedPrice}</p>
            <p className="text-green-600 font-semibold">
              {/* {console.log("item?.discountPercent",item)} */}
              {item.product?.discountPercent}% off
            </p>
          </div>
        </div>
      </div>
      {true && (
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2 ">
            <IconButton
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item?.quantity <= 1}
              color="primary"
              aria-label="add an alarm"
            >
              <RemoveCircleOutlineIcon />
            </IconButton>

            <span className="py-1 px-7 border rounded-sm">{item?.quantity}</span>
            <IconButton
              onClick={() => handleUpdateCartItem(1)}
              color="primary"
              aria-label="add an alarm"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
            <Button
              onClick={handleRemoveCartItem}
              variant="text"
              sx={{ color: "rgb(145 85 253)" }}
            >
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
