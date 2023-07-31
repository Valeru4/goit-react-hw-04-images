import React, { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ onModalClose, largeImageURL }) => {
  const onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };

  useEffect(() => {
    const onKeyDown = e => {
      if (e.keyCode === 27) {
        onModalClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onModalClose]);

  return (
    <Overlay onClick={onOverlayClick}>
      <ModalWindow>
        <img src={largeImageURL} alt="" />
      </ModalWindow>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.any.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
