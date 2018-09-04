import React from "react";
import { Link, Route } from "react-router-dom";
import TopicDetail from "./TopicDetail"
const Topics = ({ match }) => {
  return (
    <div>
      <nav>
        <Link to={`${match.url}/topic1`}>Topic 1</Link>|
        <Link to={`${match.url}/topic2`}>Topic 2</Link>|
        <Link to={`${match.url}/topic3`}>Topic 3</Link>
      </nav>

      <hr />

      <Route path={`${match.url}/:topicId`} component={TopicDetail} />
    </div>
  );
};

export default Topics;
