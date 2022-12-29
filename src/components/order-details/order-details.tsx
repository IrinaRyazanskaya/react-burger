import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import graphics from '../../images/done.png';

import styles from './order-details.module.css';

function OrderDetails() {
  return (
    <div className={`${styles.content} pt-20 pb-20`}>
      <p className={`${styles.number} text text_type_digits-large`}>034536</p>
      <p className="text text_type_main-medium mt-8 mb-15">
        идентификатор заказа
      </p>
      <div className={styles.imageContainer}>
        <img src={graphics} alt="Градиент" className={styles.image}></img>
        <div className={styles.icon}>
          <CheckMarkIcon type="primary" />
        </div>
      </div>
      <p className="text text_type_main-default mt-15 mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export { OrderDetails };
