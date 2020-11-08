import React from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, setLargeImage }) => {
    return (
        <ul className="ImageGallery">
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