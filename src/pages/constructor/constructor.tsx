import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { BurgerIngredients } from '../../components/burger-ingredients';
import { BurgerConstructor } from '../../components/burger-constructor';

import styles from './constructor.module.css';

function ConstructorPage({ ingredients }: any) {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    content: {},
    type: '',
  });

  const modalClose = useCallback(() => {
    setModalState({
      ...modalState,
      isOpen: false,
      title: '',
      content: {},
      type: '',
    });
  }, [modalState]);

  return (
    <main className={styles.main}>
      <BurgerIngredients
        ingredients={ingredients}
        modalState={modalState}
        setModalState={setModalState}
        modalClose={modalClose}
      />
      <BurgerConstructor
        modalState={modalState}
        setModalState={setModalState}
        modalClose={modalClose}
      />
    </main>
  );
}

ConstructorPage.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export { ConstructorPage };
