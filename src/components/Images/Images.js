import React from 'react';
import PropTypes from 'prop-types';
import './images.css';

import Image from './Image/Image';

const Images = props => {
  let images = [];
  let selectedCounter = 0;

  for (let i = 0; i < props.images.length; i++) {
    if (props.showSelectedOnly) {
      if (props.images[i].selected) {
        images.push(
          <Image key={props.images[i].id}
                 imgSrc={props.images[i].imageRelativePath}
                 imgAlt={props.images[i].name}
                 title={props.images[i].name}
                 date={props.images[i].timestamp}
                 selected={props.images[i].selected}
                 toggleSelection={() => props.onToggleSelection(props.images[i].id)}
          />
        )
      }

    } else {
      images.push(
        <Image key={props.images[i].id}
               imgSrc={props.images[i].imageRelativePath}
               imgAlt={props.images[i].name}
               title={props.images[i].name}
               date={props.images[i].timestamp}
               selected={props.images[i].selected}
               toggleSelection={() => props.onToggleSelection(props.images[i].id)}
        />
      )
    }
    // Count selected photos
    if (props.images[i].selected) {
      selectedCounter += 1;
    }
  }

  props.setSelectedPhotosCounter(selectedCounter);

  return (
    <div className='Images'>
      {images}
    </div>
  );
};

Images.propTypes = {
  showSelectedOnly: PropTypes.bool,
  images: PropTypes.array,
  onToggleSelection: PropTypes.func,
  setSelectedPhotosCounter: PropTypes.func
};

export default Images;
