import { createPortal } from 'react-dom';

import { Modal } from '../modal/modal';

import styles from './modal-overlay.module.css';

const modalRoot = document.getElementById('react-modals')!;

function ModalOverlay({ isOpen, title, content, onClose }: any) {
  let overlayClasses = styles.overlay;

  if (isOpen) {
    overlayClasses += ` ${styles.overlayIsOpen}`;
  }

  function onOverlayClick(event: any) {
    if (event.target.classList.contains(styles.overlay)) {
      onClose();
    }
  }

  return createPortal(
    <div className={overlayClasses} onClick={onOverlayClick}>
      <Modal title={title} content={content} onClose={onClose} />
    </div>,
    modalRoot
  );
}

export { ModalOverlay };
