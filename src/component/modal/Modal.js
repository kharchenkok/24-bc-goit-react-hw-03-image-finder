import React, { Component } from "react";
import style from "./Modal.module.css";

import PropTypes from "prop-types";

export default class Modal extends Component {
  
  componentDidMount() {
    
    window.addEventListener("keydown", this.handleKey);
  }
  componentWillUnmount() {
    
    window.removeEventListener('keydown', this.handleKey);
  }

  handleClick = (e) => {
    if (e.target.dataset.name !== "overlay") {
      return;
    }
    this.props.onClose(null);
  };

  handleKey = (e) => {
    if (e.code === "Escape") {
      this.props.onClose(null);
    }
  };
  render() {
    // console.log(this.props);
    return (
      <div
        className={style.Overlay}
        data-name="overlay"
        onClick={this.handleClick}
      >
        <div className={style.Modal} data-name="modal">
          <img src={this.props.src} alt="large" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
