import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = props => {
  let text = props.children;

  if (props.number !== undefined) {
    text = props.children  + ' (' + props.number +')';
  }

  return (
    <div className="Button"
         onClick={props.clicked}>
      {text}
    </div>
  );
};

Button.propTypes = {
  clicked: PropTypes.func,
  number: PropTypes.number || undefined
};

export default Button;
