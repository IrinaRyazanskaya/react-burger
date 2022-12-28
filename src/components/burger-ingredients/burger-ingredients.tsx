import { useState } from 'react';

import { ModalOverlay } from '../modal-overlay';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIngredient } from '../../components/ingredient';
import { IngredientDetails } from '../ingredient-details';

import styles from './burger-ingredients.module.css';

function BurgerIngredients({
  ingredients,
  modalState,
  setModalState,
  modalClose,
}: any) {
  const [current, setCurrent] = useState('one');
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

  return (
    <section className={`${styles.ingredients} mr-10`}>
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h1>
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          One
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Two
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Three
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
                onClick={() => {
                  setModalState({
                    ...modalState,
                    isOpen: true,
                    title: 'Детали ингредиента',
                    content: bun,
                    type: 'ingredient-details',
                  });
                }}
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
                onClick={() => {
                  setModalState({
                    ...modalState,
                    isOpen: true,
                    title: 'Детали ингредиента',
                    content: sauce,
                    type: 'ingredient-details',
                  });
                }}
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
                onClick={() => {
                  setModalState({
                    ...modalState,
                    isOpen: true,
                    title: 'Детали ингредиента',
                    content: main,
                    type: 'ingredient-details',
                  });
                }}
              />
            );
          })}
        </ul>
      </div>
      <ModalOverlay
        isOpen={modalState.isOpen && modalState.type === 'ingredient-details'}
        title={modalState.title}
        content={
          <IngredientDetails
            image={modalState.content.image_large}
            title={modalState.content.name}
            calories={modalState.content.calories}
            proteins={modalState.content.proteins}
            fat={modalState.content.fat}
            carbohydrates={modalState.content.carbohydrates}
          />
        }
        onClose={modalClose}
      />
    </section>
  );
}

export { BurgerIngredients };
