import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button onClick={props.do}>{props.label}</button>
);

Button.propTypes = {
  do: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;