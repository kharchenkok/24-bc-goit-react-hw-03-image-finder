import React, { Component } from "react";
import getFetch from "../../services/getFetch";
import ImageGallery from "../imageGallery/ImageGallery";
import LoaderSpiner from "../loaderSpiner/LoaderSpiner";
import LoadMoreButton from "../loadMoreButton/LoadMoreButton";
import Searchbar from "../searchbar/Searchbar";

export default class Gallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    currentPage: 0,
    itemsPerPage: 12,
    userQuery: "",
    largeImageUrl: null,
  };
  // componentDidMount() {}
  componentDidUpdate(prevProp, prevState) {
    const { images, userQuery } = this.state;
    if (prevState.userQuery !== userQuery) {
      this.setState({ loading: true });
      this.getImageFetch();
    }
    prevState.images.length !== images.length &&
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
  }

  getImageFetch = () => {
    this.setState({ loading: true });

    const { userQuery, currentPage, itemsPerPage } = this.state;
    getFetch(userQuery, currentPage, itemsPerPage)
      .then((image) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...image],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSubmit = (query) => {
    this.setState({
      images: [],
      userQuery: query,
      page: 1,
    });
  };
  setLargeImage = (url) => {
    this.setState({ largeImageUrl: url });
  };

  render() {
    const { images, loading, error, itemsPerPage,largeImageUrl } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}/>
        {error && <div>Sorry, something went wrong:{error.message}</div>}
        {loading && <LoaderSpiner />}
        {images.length > 0 && <ImageGallery images={images} setLargeImage={this.setLargeImage} />}
        {images.length >= itemsPerPage && <LoadMoreButton />}
      </>
    );
  }
}
