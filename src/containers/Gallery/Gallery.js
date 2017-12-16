import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Controls from '../../components/Controls/Controls';
import Images from '../../components/Images/Images';

class Gallery extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <Controls/>
        <Images/>
      </div>
    );
  }
}

Gallery.propTypes = {};

export default Gallery;
