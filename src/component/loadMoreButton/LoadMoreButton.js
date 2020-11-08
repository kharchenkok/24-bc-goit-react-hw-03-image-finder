import React from 'react';
import style from './LoadMoreButton.module.css'
import PropTypes from 'prop-types';

const LoadMoreButton = () => {
    return (
        <button className={[style.Button,style.Button__load].join(' ')} type="button">
        Load more
      </button>
    );
};

export default LoadMoreButton;

// LoadMoreButton.propTypes = {
//     loadMore: PropTypes.func.isRequired,
//   };