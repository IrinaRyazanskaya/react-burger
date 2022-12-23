import { useEffect, useState } from 'react';

import { getIngridients } from '../../api';

import styles from './app.module.css';

function App() {
  const [ingridients, setIngridients] = useState();

  useEffect(() => {
    getIngridients()
      .then((data) => {
        setIngridients(data);
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  console.log(ingridients);

  return (
    <div className={styles.app}>
    
    </div>
  );
}

export { App };
