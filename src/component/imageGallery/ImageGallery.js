import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './ImageGallery.module.css'
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

import PropTypes from 'prop-types';

const ImageGallery = ({ images, setLargeImage }) => {
    return (
        <ul className={style.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={uuidv4()}
            image={image}
            setLargeImage={setLargeImage}
          />
        ))}
      </ul>
    );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ).isRequired,
  setLargeImage: PropTypes.func.isRequired,
};