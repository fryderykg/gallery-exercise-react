import React from 'react';
import PropTypes from 'prop-types';
import './controls.css';

import Button from './Button/Button';

const Controls = props => {
  return (
    <div className="Controls">
      <header className="Controls__header">
        Media library
      </header>
      <div className="Controls__buttons">
        <Button number={props.allPhotos}
                clicked={props.onSelectAllPhotos}>
          Select All
        </Button>
        <Button clicked={props.onResetSelectedPhotos}>
          Reset Selection
        </Button>
        <Button number={props.selectedPhotos}
                clicked={props.onShowSelectedPhotos}>
          Show selected
        </Button>
      </div>
    </div>
  );
};

Controls.propTypes = {
  allPhotos: PropTypes.number,
  selectedPhotos: PropTypes.number,
  onSelectAllPhotos: PropTypes.func,
  onResetSelectedPhotos: PropTypes.func,
  onShowSelectedPhotos: PropTypes.func
};

export default Controls;
