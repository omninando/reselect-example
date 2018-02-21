import React from "react";
import { connect } from "react-redux";
import { countDown, countUp } from "../actions";

let Counter = ({ counter, countDown, countUp }) => (
  <p>
    <button type="button" onClick={() => countDown()}>
      -
    </button>
    <span style={{ margin: "0 10px 0" }}>{counter}</span>
    <button type="button" onClick={() => countUp()}>
      +
    </button>
  </p>
);

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(mapStateToProps, {
  countUp,
  countDown
})(Counter);
