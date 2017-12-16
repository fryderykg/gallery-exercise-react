import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button/Button';

const Controls = props => {
  return (
    <div>
      <Button/>
      <Button/>
      <Button/>
    </div>
  );
};

Controls.propTypes = {

};

export default Controls;
