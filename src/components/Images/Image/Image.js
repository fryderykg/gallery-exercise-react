import React from 'react';
import PropTypes from 'prop-types';
import './image.css';

const Image = props => {
  let classNames = ['Image'];

  if (props.selected) {
    classNames.push('selected')
  }

  return (
    <div className={classNames.join(' ')}>
      <div className="Image__photo">
        <div className="Image__selector"
             onClick={props.toggleSelection}/>
        <img src={props.imgSrc}
             alt={props.imgAlt}/>
      </div>
      <div className="Image__description">
        <div>{props.title}</div>
        <div>{props.date}</div>
      </div>
    </div>
  );
};

Image.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.number,
  toggleSelection: PropTypes.func
};

export default Image;
