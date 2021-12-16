import React, { Component } from 'react';

import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';

export class PhotoInfo extends Component {
  state = {
    photos: [],
    page: 1,
    status: 'idle',
  };

  handleButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.value;
    const nextValue = this.props.value;
    const page = this.state.page;

    if (prevState.page !== page) {
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${nextValue}&page=${page}&key=24005703-1514437038890a8f3813970a7&image_type=photo&orientation=horizontal&per_page=12`,
        )
          .then(responce => responce.json())
          .then(photos =>
            this.setState(prevState => ({
              photos: [...prevState.photos, ...photos.hits],
              status: 'resolved',
            })),
          )
          .finally(() => {
            this.setState({ status: 'resolved' });
          });
      }, 2000);
    }

    if (prevValue !== nextValue) {
      this.setState({ status: 'pending', photos: [], page: 1 });

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${nextValue}&page=${page}&key=24005703-1514437038890a8f3813970a7&image_type=photo&orientation=horizontal&per_page=12`,
        )
          .then(responce => responce.json())
          .then(photos =>
            this.setState(prevState => ({
              photos: [...prevState.photos, ...photos.hits],
              status: 'resolved',
            })),
          )
          .finally(() => {
            this.setState({ status: 'resolved' });
          });
      }, 2000);
    }
  }

  render() {
    const { photos, status } = this.state;

    if (status === 'idle') {
      return <div>Введите</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <div>
          <ImageGallery photos={photos} />
          {photos.length > 0 && (
            <Button onButtonClick={this.handleButtonClick} />
          )}
        </div>
      );
    }
  }
}

export default PhotoInfo;
