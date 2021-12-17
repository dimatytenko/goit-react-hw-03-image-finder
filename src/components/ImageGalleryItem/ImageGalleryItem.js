import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ webformatURL, alt, onClick }) {
  return (
    <div>
      <li>
        <img
          className={styles.ImageGalleryItem_image}
          src={webformatURL}
          alt={alt}
          onClick={onClick}
        />
      </li>
    </div>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
