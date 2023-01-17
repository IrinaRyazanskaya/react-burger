import PropTypes from 'prop-types';

import styles from './modal-overlay.module.css';

function ModalOverlay({ isOpen, onClose, children }: any) {
  let overlayClasses = styles.overlay;

  if (isOpen) {
    overlayClasses += ` ${styles.overlayIsOpen}`;
  }

  function onOverlayClick(event: any) {
    if (event.target.classList.contains(styles.overlay)) {
      onClose();
    }
  }

  return (
    <div className={overlayClasses} onClick={onOverlayClick}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { ModalOverlay };
