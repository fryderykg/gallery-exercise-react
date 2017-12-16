import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <div onClick={props.clicked}>
      {props.children}{props.number}
    </div>
  );
};

Button.propTypes = {
  clicked: PropTypes.func,
  number: PropTypes.number
};

export default Button;
