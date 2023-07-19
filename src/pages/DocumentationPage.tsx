import React from 'react';
import styles from './Documentation.module.scss';
import { Link } from 'react-router-dom';

function DocumentationPage() {
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>Список требуемых документов</h1>
      </div>
      <div className={styles.obligatory}>
        <h4 className={styles.obligatory__title}>Обязательные:</h4>
        <ul>
          <li className={styles.obligatory__item}>-ID паспорт</li>
          <li className={styles.obligatory__item}>-ID паспорт</li>
          <li className={styles.obligatory__item}>-ID паспорт</li>
        </ul>
      </div>
      <div className={styles.optional}>
        <h4 className={styles.optional__title}>Необязательные:</h4>
        <ul>
          <li className={styles.obligatory__item}>-ID паспорт</li>
          <li className={styles.obligatory__item}>-ID паспорт</li>
          <li className={styles.obligatory__item}>-ID паспорт</li>
        </ul>
      </div>
      <Link to={'/terminal/privileges'} className={styles.btn}>
        Далее
      </Link>
    </div>
  );
}

export default DocumentationPage;
