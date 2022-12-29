import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './modal.module.css';

function Modal({ title, children, onClose }: any) {
  return (
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
        <h2 className={`${styles.title} text text_type_main-large`}>{title}</h2>
      ) : null}
      {children}
    </div>
  );
}

export { Modal };
