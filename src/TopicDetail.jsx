import React from "react";

const TopicDetail = props => {
  return <div>{props.match.params.topicId}</div>;
};

export default TopicDetail;
