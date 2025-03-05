import React from "react";

const AddressCard = ({address}) => {
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold ">{address?.firstName+" " +address?.lastName}</p>
        <p> {address?.state}, {address?.city}, {address?.zipCode}</p>
        <p>{address?.streetAddress}</p>
      </div>
      <div className="space-y-1">
        <p>Phone Number</p>
        <p>{address?.mobile}</p>
      </div>
    </div>
  );
};

export default AddressCard;
