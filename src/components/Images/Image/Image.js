import React from 'react';
import PropTypes from 'prop-types';
import './image.css';

const Image = props => {
  return (
    <div className='Image'>
      <img src={props.imgSrc}
           alt={props.imgAlt}/>
      <div className="Image__description">
        <div>{props.title}</div>
        <div>{props.date}</div>
      </div>
    </div>
  );
};

Image.propTypes = {
  key: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string

};

export default Image;
