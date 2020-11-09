import React from 'react';
import style from './LoadMoreButton.module.css'
import PropTypes from 'prop-types';

const LoadMoreButton = ({loadMore,setCurrentPage}) => {
  const handleClick= async ()=>{
    await setCurrentPage()
    loadMore()
  }
    return (
        // <button className={[style.Button,style.Button__load].join(' ')} type="button" onClick={loadMore} >
         <button className={[style.Button,style.Button__load].join(' ')} type="button" onClick={handleClick} >
        Load more
      </button>
    );
};

export default LoadMoreButton;

LoadMoreButton.propTypes = {
    loadMore: PropTypes.func.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
  };