import React from "react";

const TodoDetail = props => {
  return (
    <div>
      Description : {props.description} <br />
      Done : {props.done} <br/>
    </div>
  );
};

export default TodoDetail;
