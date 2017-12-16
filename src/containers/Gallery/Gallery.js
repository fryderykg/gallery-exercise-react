import React, {Component} from 'react';
import axios from 'axios';
import './gallery.css';

import Controls from '../../components/Controls/Controls';
import Images from '../../components/Images/Images';

class Gallery extends Component {
  state = {
    photos: [],
    allPhotos: 0,
    selectedPhotos: 0

  };

  componentDidMount() {
    axios.get('/assets/data.json')
      .then(response => {
        this.setState({
          ...this.state,
          photos: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  selectAllPhotosHandler = () => {
    console.log("all photos selected");
    console.log(this.state.photos)
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
        <Images images={this.state.photos}/>
      </div>
    );
  }
}

export default Gallery;
