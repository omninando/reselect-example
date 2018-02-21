import React from "react";
import { connect } from "react-redux";
import { getMatchedVisibleTodos } from "../selectors";

let MatchedTodos = ({ matchedTodos }) => (
  <p>Matched Todos - {matchedTodos.length}</p>
);

const mapStateToProps = state => ({
  matchedTodos: getMatchedVisibleTodos(state)
});

export default connect(mapStateToProps)(MatchedTodos);
