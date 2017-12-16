import React, {PureComponent} from 'react';
import axios from 'axios';
import './gallery.css';

import Controls from '../../components/Controls/Controls';
import Images from '../../components/Images/Images';

class Gallery extends PureComponent {
  state = {
    allPhotos: [],
    allPhotosCounter: 0,
    selectedPhotosCounter: 0,
    showSelectedOnly: false
  };

  componentDidMount() {
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
      })
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
      allPhotos: updatedPhotos
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
      allPhotos: updatedPhotos
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
    const updatedPhotos = this.state.allPhotos
      .map(photo => {
        if (photo.id === id) {
          return {
            ...photo,
            selected: !photo.selected
          }
        } else {
          return photo
        }
      });

    this.setState({
      ...this.state,
      allPhotos: updatedPhotos,
    });
  };

  setSelectedPhotosHandler = (number) => {
    this.setState({
      ...this.state,
      selectedPhotosCounter: number
    })
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
                showSelectedOnly={this.state.showSelectedOnly}
                onToggleSelection={this.togglePhotoSelectionHandler}
                setSelectedPhotosCounter={this.setSelectedPhotosHandler}/>
      </div>
    );
  }
}

export default Gallery;
