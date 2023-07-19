import React, { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onModalClose();
    }
  };

  onKeyDown = event => {
    if (event.keyCode === 27) {
      this.props.onModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    return (
      <Overlay onClick={this.onOverlayClick}>
        <ModalWindow>
          <img src={this.props.largeImageURL} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.any.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
