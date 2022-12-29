import { useCallback, useEffect, useState } from 'react';
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

  const handleEscPress = useCallback(
    (event: any) => {
      if (event.key === 'Escape') {
        modalClose();
      }
    },
    [modalClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscPress, false);

    return () => {
      document.removeEventListener('keydown', handleEscPress, false);
    };
  }, [handleEscPress]);

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
