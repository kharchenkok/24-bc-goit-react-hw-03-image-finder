import React, { Component } from "react";
import getFetch from "../../services/getFetch";
import ImageGallery from "../imageGallery/ImageGallery";
import LoaderSpiner from "../loaderSpiner/LoaderSpiner";
import LoadMoreButton from "../loadMoreButton/LoadMoreButton";
import Modal from "../modal/Modal";

import Searchbar from "../searchbar/Searchbar";

export default class Gallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    currentPage: 1,
    // currentPage: 0,
    itemsPerPage: 12,
    userQuery: "",
    largeImageUrl: null,
  };

   componentDidUpdate(prevProp, prevState) {
  

    const { images, userQuery } = this.state;
    
    if (prevState.userQuery !== userQuery) {
      this.setState({ loading: true });
      // await this.setState(prev=>({currentPage:prev.currentPage+1}))
      this.getImageFetch();
    }
    prevState.images.length !== images.length &&
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
  }
  
  getImageFetch = () => {


    const { userQuery, currentPage, itemsPerPage } = this.state;

    getFetch(userQuery, currentPage, itemsPerPage)
      .then((image) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...image],
          
          // currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
     
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({
      images: [],
      userQuery: query,
      currentPage: 1,
      // currentPage: 0,
    });
  };
  setLargeImage = (url) => {
    this.setState({ largeImageUrl: url });
  };

  setCurrentPage=()=>{
    this.setState(prev=>({
      currentPage: prev.currentPage + 1

    }))
  }

  render() {
    const { images, loading, error, itemsPerPage, largeImageUrl } = this.state;
    return (
      <>
        <Searchbar handleSearchFormSubmit={this.handleSearchFormSubmit} />
        {error && <div>Sorry, something went wrong:{error.message}</div>}
        {loading && <LoaderSpiner />}
        {images.length > 0 && (
          <ImageGallery images={images} setLargeImage={this.setLargeImage} />
        )}
        {images.length >= itemsPerPage && (
          // <LoadMoreButton loadMore={this.getImageFetch}/>
          <LoadMoreButton loadMore={this.getImageFetch} setCurrentPage={this.setCurrentPage}/>
        )}
        {largeImageUrl && (
          <Modal onClose={this.setLargeImage} src={largeImageUrl} />
        )}
      </>
    );
  }
}
