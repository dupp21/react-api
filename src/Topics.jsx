import React from "react";

const Topics = props => {
  return (
    <div>
      Topics Page
      {props.match.url}
    </div>
  );
};

export default Topics;
