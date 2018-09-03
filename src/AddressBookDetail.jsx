import React from "react";

const AddressBookDetail = props => {
  return (
    <div>
      Name : {props.name} <br />
      Address : {props.address} <br />
      <button onClick={() => props.deletePeople(props.index)}>x</button>
      <br /> <br />
    </div>
  );
};

export default AddressBookDetail;
