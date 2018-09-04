import React from "react";

const EmployeeDetail = props => {
  return (
    <div>
      First name : {props.first_name} <br />
      Last Name : {props.last_name}
      <hr/>
    </div>
  );
};

export default EmployeeDetail;
