import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    // console.log('submite');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // console.log('unsubmite');
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handlBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handlBackdrop}>
      <div className="Modal">{children}</div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = { onClose: PropTypes.func };
