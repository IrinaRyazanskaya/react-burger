import { useEffect, useState } from 'react';

import { getIngredients } from '../api';
import { AppHeader } from '../components/app-header';
import { ConstructorPage } from '../pages/constructor';

import styles from './app.module.css';

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients()
      .then((data) => {
        setIngredients(data);
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  console.log(ingredients);

  return (
    <div className={styles.app}>
      <AppHeader />
      <ConstructorPage ingredients={ingredients} />
    </div>
  );
}

export { App };
