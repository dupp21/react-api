import React from "react";

const TodoDetail = props => {
  return (
    <div>
      Description : {props.description} <br />
      Done : {JSON.stringify(props.done)} <br /> <br/>
    </div>
  );
};

export default TodoDetail;
