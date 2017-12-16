import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './gallery.css';

import Controls from '../../components/Controls/Controls';
import Images from '../../components/Images/Images';

class Gallery extends Component {
  state = {
    allPhotos: 0,
    selectedPhotos: 0

  };

  selectAllPhotosHandler = () => {
    console.log("all photos selected")
  };

  resetSelectedPhotosHandler = () => {
    console.log("reset selected photos")
  };

  showSelectedPhotosHandler = () => {
    console.log("show selected photos")
  };

  render() {
    return (
      <div className="Gallery">
        <Controls
          allPhotos={this.state.allPhotos}
          selectedPhotos={this.state.selectedPhotos}
          onSelectAllPhotos={this.selectAllPhotosHandler}
          onResetSelectedPhotos={this.resetSelectedPhotosHandler}
          onShowSelectedPhotos={this.showSelectedPhotosHandler}
        />
        <Images/>
      </div>
    );
  }
}

Gallery.propTypes = {};

export default Gallery;
