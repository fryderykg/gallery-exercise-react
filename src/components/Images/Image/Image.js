import React from 'react';
import PropTypes from 'prop-types';
import './image.css';

const Image = props => {
  let classNames = ['Image'];

  if (props.selected) {
    classNames.push('selected')
  }

  const dateConvert = () => {
    const tempDate = new Date(props.date);
    const year = tempDate.getFullYear();
    const month = tempDate.getMonth() + 1;
    let date = tempDate.getDate();
    date = date < 10 ? '0' + date : date;
    let hour = tempDate.getHours();
    let min = tempDate.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    min = min < 10 ? '0' + min : min;
    return date + '-' + month + '-' + year + ' ' + hour + ':' + min + ampm;
  };


  return (
    <div className={classNames.join(' ')}>
      <div className="Image__photo">
        <div className="Image__selector"
             onClick={props.toggleSelection}/>
        <img src={props.imgSrc}
             alt={props.imgAlt}/>
      </div>
      <div className="Image__description">
        <div className="Image__title">{props.title}</div>
        <div className="Image__date">
          <span className="bold">Modified: </span>
          {dateConvert()}
        </div>
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
