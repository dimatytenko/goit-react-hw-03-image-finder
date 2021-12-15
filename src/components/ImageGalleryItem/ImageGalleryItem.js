import React from 'react';
import styles from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types'

function ImageGalleryItem({ webformatURL, largeImageURL, alt }) {
  return (
    <div>
      <li className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItem_image}
          src={webformatURL}
          srcSet={largeImageURL}
          alt={alt}
        />
      </li>
    </div>
  );
}

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
