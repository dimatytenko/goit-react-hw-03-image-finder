import React, { Component } from 'react';
import styles from './PhotoInfo.module.css';
import PropTypes from 'prop-types';

import photosAPI from 'API/photos-api';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Background from 'components/Background';
import NotFound from 'components/NotFound';

import scroll from 'react-scroll';
const scrollToBottom = scroll.animateScroll.scrollToBottom;

export class PhotoInfo extends Component {
  state = {
    photos: [],
    page: 1,
    status: 'idle',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.value;
    const nextValue = this.props.value;
    const nextPage = this.state.page;

    if (prevValue !== nextValue) {
      this.setState({ status: 'pending' });

      this.updateState();
      this.requestPhotos(nextValue, nextPage);
      scrollToBottom();
    }

    if (prevState.page !== nextPage) {
      this.requestPhotos(nextValue, nextPage);
      scrollToBottom();
    }
  }

  requestPhotos = (value, page) => {
    photosAPI
      .fetchPhotos(value, page)
      .then(photos => {
        if (photos.hits.length === 0) {
          return Promise.reject(new Error(`${value} nothing to display`));
        }
        this.setState(prevState => ({
          photos: [...prevState.photos, ...photos.hits],
          status: 'resolved',
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  updateState = () => {
    this.setState({ photos: [], page: 1 });
  };

  handleButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { photos, status, error } = this.state;

    if (status === 'idle') {
      return (
        <div className={styles.Container}>
          <Background />
        </div>
      );
    }

    if (status === 'pending') {
      return (
        <div className={styles.Container}>
          <Loader />;
        </div>
      );
    }
    if (status === 'rejected') {
      return (
        <div className={styles.Container}>
          <NotFound error={error.message} />
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery photos={photos} />
          <div className={styles.Container}>
            {photos.length > 0 && <Button onClick={this.handleButtonClick} />}
          </div>
        </>
      );
    }
  }
}
PhotoInfo.propTypes = {
  value: PropTypes.string,
};

export default PhotoInfo;
