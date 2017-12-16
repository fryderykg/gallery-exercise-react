import React from 'react';
import PropTypes from 'prop-types';
import './images.css';

import Image from './Image/Image';

const Images = props => {
  let images = [];

  for (let i = 0; i < props.images.length; i++) {
    images.push(
      <Image key={props.images[i].id}
             imgSrc={props.images[i].imageRelativePath}
             imgAlt={props.images[i].name}
             title={props.images[i].name}
             date={props.images[i].timestamp}
      />
    )
  }


  return (
    <div className='Images'>
      {images}
    </div>
  );
};

Images.propTypes = {
  images: PropTypes.array
};

export default Images;
