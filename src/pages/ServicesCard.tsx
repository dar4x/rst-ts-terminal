import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesCard.module.scss';

function ServicesCard() {
  return (
    <div className={styles.card}>
      <Link to={'/terminal/requirement'} className={styles.card__btn}>
        Открытие корпоративного счета
      </Link>
      <Link to={'/terminal/requirement'} className={styles.card__btn}>
        Открытие корпоративного счета
      </Link>
      <Link to={'/terminal/requirement'} className={styles.card__btn}>
        Открытие корпоративного счета
      </Link>
      <Link to={'/terminal/requirement'} className={styles.card__btn}>
        Открытие корпоративного счета
      </Link>
      <Link to={'/terminal/requirement'} className={styles.card__btn}>
        Открытие корпоративного счета
      </Link>
      <Link to={'/terminal/requirement'} className={styles.card__btn}>
        Открытие корпоративного счета
      </Link>
    </div>
  );
}

export default ServicesCard;
