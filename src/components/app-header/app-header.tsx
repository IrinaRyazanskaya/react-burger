import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={`${styles.header} text text_type_main-default pt-10`}>
      <div className={`${styles.content} pt-4 pb-4`}>
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            <li className={`${styles.navigationItem} mr-2 pl-5 pr-5`}>
              <a
                className={styles.link}
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BurgerIcon type="primary" />
                <span className={`${styles.text} ml-2`}>Конструктор</span>
              </a>
            </li>
            <li className={`${styles.navigationItem} pl-5 pr-5`}>
              <a
                className={`${styles.link} ${styles.linkInactive}`}
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListIcon type="secondary" />
                <span className={`${styles.text} ml-2`}>Лента заказов</span>
              </a>
            </li>
          </ul>
        </nav>
        <Logo />
        <div className={styles.wrap}>
          <a
            className={`${styles.link} ${styles.linkInactive} pl-5 pr-5`}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProfileIcon type="secondary" />
            <span className={`${styles.text} ml-2`}>Личный кабинет</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export { AppHeader };
