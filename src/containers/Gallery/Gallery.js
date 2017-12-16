import React, {Component} from 'react';
import axios from 'axios';
import './gallery.css';

import Controls from '../../components/Controls/Controls';
import Images from '../../components/Images/Images';

class Gallery extends Component {
  state = {
    allPhotos: [],
    allPhotosCounter: 0,
    selectedPhotosCounter: 0,
    showSelectedOnly: false
  };

  componentWillMount() {
    axios.get('/assets/data.json')
      .then(response => {
        const updatedPhotos = response.data.map(image => {
          return {
            ...image,
            selected: false
          }
        });

        this.setState({
          ...this.state,
          allPhotos: updatedPhotos
        })
      })
      .catch(error => {
        console.log(error)
      });
  }

  selectAllPhotosHandler = () => {
    const updatedPhotos = this.state.allPhotos
      .map(photo => {
        return {
          ...photo,
          selected: true
        }
      });

    this.setState({
      ...this.state,
      allPhotos: updatedPhotos,
      selectedPhotosCounter: this.state.allPhotos.length
    });
  };

  resetSelectedPhotosHandler = () => {
    const updatedPhotos = this.state.allPhotos
      .map(photo => {
        return {
          ...photo,
          selected: false
        }
      });

    this.setState({
      ...this.state,
      allPhotos: updatedPhotos,
      selectedPhotosCounter: 0
    });
  };

  showSelectedPhotosHandler = () => {
    const updatedShowSelectedOnly = !this.state.showSelectedOnly;

    this.setState({
      ...this.state,
      showSelectedOnly: updatedShowSelectedOnly
    })
  };

  togglePhotoSelectionHandler = (id) => {
    let updatedSelectedPhotosCounter = this.state.selectedPhotosCounter;
    const updatedPhotos = this.state.allPhotos
      .map(photo => {
        if (photo.id === id) {
          if (photo.selected) {
            updatedSelectedPhotosCounter -= 1;
            return {
              ...photo,
              selected: false
            }
          } else {
            updatedSelectedPhotosCounter += 1;
            return {
              ...photo,
              selected: true
            }
          }
        } else {
          return photo
        }
      });

    this.setState({
      ...this.state,
      allPhotos: updatedPhotos,
      selectedPhotosCounter: updatedSelectedPhotosCounter
    });
  };

  render() {
    return (
      <div className="Gallery">
        <Controls
          allPhotos={this.state.allPhotos.length}
          selectedPhotos={this.state.selectedPhotosCounter}
          onSelectAllPhotos={this.selectAllPhotosHandler}
          onResetSelectedPhotos={this.resetSelectedPhotosHandler}
          onShowSelectedPhotos={this.showSelectedPhotosHandler}
        />
        <Images images={this.state.allPhotos}
                selectedImages={this.state.selectedPhotos}
                showSelectedOnly={this.state.showSelectedOnly}
                onToggleSelection={this.togglePhotoSelectionHandler}
        />
      </div>
    );
  }
}

export default Gallery;
