import React, { Component } from "react";

import style from "./Searchbar.module.css";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  handleInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearchFormSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={style.SearchForm__button}>
            <span className={style.SearchForm__buttonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleInput}
            className={style.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}


Searchbar.propTypes = {
  handleSearchFormSubmit: PropTypes.func.isRequired,
};
