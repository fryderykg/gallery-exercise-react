import React from 'react';
import PropTypes from 'prop-types';
import './images.css';

import Image from './Image/Image';

const Images = props => {
  const returnImageComponent = (key, imgSrc, imgAlt, title, date, selected, toggleSelection) => {
    return (
      <Image key={key}
             imgSrc={imgSrc}
             imgAlt={imgAlt}
             title={title}
             date={date}
             selected={selected}
             toggleSelection={toggleSelection}
      />
    )
  };

  let images = [];

  for (let i = 0; i < props.images.length; i++) {
    if (props.showSelectedOnly) {
      if (props.images[i].selected) {
        images.push(
          returnImageComponent(
            props.images[i].id,
            props.images[i].imageRelativePath,
            props.images[i].name,
            props.images[i].name,
            props.images[i].timestamp,
            props.images[i].selected,
            () => props.onToggleSelection(props.images[i].id)
          )
        )
      }

    } else {
      images.push(
        returnImageComponent(
          props.images[i].id,
          props.images[i].imageRelativePath,
          props.images[i].name,
          props.images[i].name,
          props.images[i].timestamp,
          props.images[i].selected,
          () => props.onToggleSelection(props.images[i].id)
        )
      )
    }
  }

  return (
    <div className='Images'>
      {images}
    </div>
  );
};

Images.propTypes = {
  showSelectedOnly: PropTypes.bool,
  images: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      imageRelativePath: PropTypes.string,
      name: PropTypes.string,
      timestamp: PropTypes.number,
      selected: PropTypes.bool
    }
  )),
  onToggleSelection: PropTypes.func,
  setSelectedPhotosCounter: PropTypes.func
};

export default Images;
