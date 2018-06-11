import React from "react";
import PropTypes from "prop-types";

const Display = props => <p>{props.amount}</p>;

Display.propTypes = {
  amount: PropTypes.number
};

Display.defaultProps = {
  amount: 0
};

export default Display;
