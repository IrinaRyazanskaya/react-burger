import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { ModalOverlay } from '../modal-overlay';

import styles from './modal.module.css';

const modalRoot = document.getElementById('react-modals')!;

function Modal({ title, children, isOpen, onClose }: any) {
  const handleEscPress = useCallback(
    (event: any) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [onClose, isOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscPress, false);

    return () => {
      document.removeEventListener('keydown', handleEscPress, false);
    };
  }, [handleEscPress]);

  return createPortal(
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className={`${styles.modal} p-10`}>
        <button
          className={styles.closeButton}
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        >
          <CloseIcon type="primary" />
        </button>
        {title ? (
          <h2 className={`${styles.title} text text_type_main-large`}>
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Modal };
