import React from "react";

const AddressBookDetail = props => {
  return (
    <div>
      Name : {props.name} <br />
      Address : {props.address} <br/> <br/>
    </div>
  );
};

export default AddressBookDetail;
