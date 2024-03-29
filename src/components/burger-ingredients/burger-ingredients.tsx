import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import { Modal } from '../modal';
import { BurgerIngredient } from '../../components/ingredient';
import { IngredientDetails } from '../ingredient-details';

import styles from './burger-ingredients.module.css';

function BurgerIngredients({
  ingredients,
  modalState,
  setModalState,
  modalClose,
}: any) {
  const [current, setCurrent] = useState('buns');
  const buns: any[] = [];
  const sauces: any[] = [];
  const main: any[] = [];

  ingredients.forEach((ingredient: any) => {
    if (ingredient.type === 'bun') {
      buns.push(ingredient);
    } else if (ingredient.type === 'sauce') {
      sauces.push(ingredient);
    } else if (ingredient.type === 'main') {
      main.push(ingredient);
    }
  });

  const openModal = (content: any) => {
    setModalState({
      ...modalState,
      content,
      isOpen: true,
      title: 'Детали ингредиента',
      type: 'ingredient-details',
    });
  };

  return (
    <section className={`${styles.ingredients} mr-10`}>
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h1>
      <div className={styles.tabs}>
        <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.ingredientsContainer} mt-10`}>
        <h2 className={`${styles.subtitle} text text_type_main-medium mb-6`}>
          Булки
        </h2>
        <ul className={`${styles.ingredientType} mb-10 ml-4`}>
          {buns.map((bun: any) => {
            return (
              <BurgerIngredient
                key={bun._id}
                ingredient={bun}
                onClick={() => openModal(bun)}
              />
            );
          })}
        </ul>
        <h2 className={`${styles.subtitle} text text_type_main-medium mb-6`}>
          Соусы
        </h2>
        <ul className={`${styles.ingredientType} mb-10 ml-4`}>
          {sauces.map((sauce: any) => {
            return (
              <BurgerIngredient
                key={sauce._id}
                ingredient={sauce}
                onClick={() => openModal(sauce)}
              />
            );
          })}
        </ul>
        <h2 className={`${styles.subtitle} text text_type_main-medium mb-6`}>
          Основное
        </h2>
        <ul className={`${styles.ingredientType} ml-4`}>
          {main.map((main: any) => {
            return (
              <BurgerIngredient
                key={main._id}
                ingredient={main}
                onClick={() => openModal(main)}
              />
            );
          })}
        </ul>
      </div>
      <Modal
        title={modalState.title}
        isOpen={modalState.isOpen && modalState.type === 'ingredient-details'}
        onClose={modalClose}
      >
        {modalState.isOpen && modalState.type === 'ingredient-details' ? (
          <IngredientDetails
            image={modalState.content.image_large}
            title={modalState.content.name}
            calories={modalState.content.calories}
            proteins={modalState.content.proteins}
            fat={modalState.content.fat}
            carbohydrates={modalState.content.carbohydrates}
          />
        ) : null}
      </Modal>
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
  modalState: PropTypes.shape({
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    content: PropTypes.object,
    type: PropTypes.string,
  }).isRequired,
  setModalState: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
};

export { BurgerIngredients };
