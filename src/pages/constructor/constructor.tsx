import { BurgerIngredients } from '../../components/burger-ingredients';
import { BurgerConstructor } from '../../components/burger-constructor';

import styles from './constructor.module.css';

function ConstructorPage({ ingredients }: any) {
  return (
    <main className={styles.main}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor />
    </main>
  );
}

export { ConstructorPage };
