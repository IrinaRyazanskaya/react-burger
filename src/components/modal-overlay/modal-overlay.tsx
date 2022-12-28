import { createPortal } from 'react-dom';

import { Modal } from '../modal/modal';

import styles from './modal-overlay.module.css';

const modalRoot = document.getElementById('react-modals')!;

function ModalOverlay({ isOpen, title, content, onClose }: any) {
  let overlayClasses = styles.overlay;

  if (isOpen) {
    overlayClasses += ` ${styles.overlayIsOpen}`;
  }

  return createPortal(
    <div className={overlayClasses}>
      <Modal
        title={title}
        content={content}
        onClose={onClose}
      />
    </div>,
    modalRoot
  );
}

export { ModalOverlay };
