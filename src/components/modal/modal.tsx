import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { ModalOverlay } from '../modal-overlay';

import styles from './modal.module.css';

function Modal({ title, children, isOpen, onClose }: any) {
  return (
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
    </ModalOverlay>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  isOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Modal };
