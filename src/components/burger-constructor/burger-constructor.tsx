import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from '../modal-overlay';
import { OrderDetails } from '../order-details';

import styles from './burger-constructor.module.css';

function BurgerConstructor({ modalState, setModalState, modalClose }: any) {
  return (
    <section className={`${styles.constructor} mt-25 pl-4`}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        extraClass="ml-8"
      />
      <ul className={styles.items}>
        <li className={`${styles.item} mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail="https://code.s3.yandex.net/react/code/sauce-03.png"
          />
        </li>
        <li className={`${styles.item} mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Мясо бессмертных моллюсков Protostomia"
            price={300}
            thumbnail="https://code.s3.yandex.net/react/code/meat-02.png"
          />
        </li>
        <li className={`${styles.item} mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Плоды Фалленианского дерева"
            price={50}
            thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
          />
        </li>
        <li className={`${styles.item} mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Хрустящие минеральные кольца 80"
            price={50}
            thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
          />
        </li>
        <li className={`${styles.item} mr-2`}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Хрустящие минеральные кольца 80"
            price={50}
            thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
          />
        </li>
      </ul>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        extraClass="ml-8"
      />
      <div className={`${styles.orderWrap} mt-10 mr-4`}>
        <p className={`${styles.cost} text text_type_digits-medium`}>610</p>
        <div className={`${styles.iconWrap} ml-2 mr-10`}>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            setModalState({
              ...modalState,
              isOpen: true,
              type: 'order-details',
            });
          }}
        >
          Оформить заказ
        </Button>
      </div>
      <ModalOverlay
        isOpen={modalState.isOpen && modalState.type === 'order-details'}
        title={modalState.title}
        content={<OrderDetails />}
        onClose={modalClose}
      />
    </section>
  );
}

export { BurgerConstructor };
