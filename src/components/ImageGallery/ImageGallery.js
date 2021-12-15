import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
// import PropTypes from 'prop-types'

function ImageGallery({ photos }) {
  return (
    <div>
      <ul className={styles.ImageGallery}>
        {photos.map(({ id, webformatURL, user, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            alt={user}
          />
        ))}
      </ul>
    </div>
  );
}

ImageGallery.propTypes = {};

export default ImageGallery;
