import PropTypes from 'prop-types';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredient.module.css';

function BurgerIngredient({ ingredient, onClick }: any) {
  return (
    <li className={styles.card} onClick={onClick}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img className={styles.image} src={ingredient.image} alt={ingredient.name} />
      <div className={`${styles.price} text text_type_digits-default mt-1 mb-1`}>
        <span className="mr-2">{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.text} text text_type_main-default`}>{ingredient.name}</p>
    </li>
  );
}

BurgerIngredient.propTypes = {
  ingredient: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export { BurgerIngredient };
