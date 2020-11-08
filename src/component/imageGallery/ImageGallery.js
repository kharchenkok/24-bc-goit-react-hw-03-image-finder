import React from 'react';
import { uuid } from 'uuidv4';
import style from './ImageGallery.module.css'
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

import PropTypes from 'prop-types';

const ImageGallery = ({ images, setLargeImage }) => {
    return (
        <ul className={style.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={uuid()}
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