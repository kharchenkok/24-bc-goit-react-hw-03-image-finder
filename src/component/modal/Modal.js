import React, { Component } from 'react'
import style from './Modal.module.css'

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKey);
      }
    
      handleClick = event => {
        if (event.target.dataset.name !== 'overlay') {
          return;
        }
        this.props.onClose();
      };
    
      handleKey = event => {
        if (event.code === 'Escape') {
          this.props.onClose();
        }
      };
    render() {
        return (
            <div
          className={style.Overlay}
          data-name="overlay"
          onClick={this.handleClick}
        >
          <div className={style.Modal} data-name="modal">
              <img src={this.props.src} alt="large"/>

          </div>
        </div>
        )
    }
}
