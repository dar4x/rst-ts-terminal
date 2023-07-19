import React from 'react';
import styles from './Priveleges.module.scss';
import { Link } from 'react-router-dom';

function PrivilegesPage() {
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>
          Пожалуйста, укажите, если у вас есть особые потребности в связи с
          инвалидностью, беременностью или пенсионерством
        </h1>
      </div>
      <div className={styles.header__content}>
        <div className={styles.btns}>
          <Link to={'/terminal/verification'} className={styles.btn}>
            Инвалидность
          </Link>
          <Link to={'/terminal/verification'} className={styles.btn}>
            Беременность
          </Link>
          <Link to={'/terminal/verification'} className={styles.btn}>
            Пенсионер
          </Link>
          <Link to={'/terminal/verification'} className={styles.btn}>
            Нет
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrivilegesPage;
