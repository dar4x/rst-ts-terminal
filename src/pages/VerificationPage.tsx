import React from 'react';
import styles from './Verification.module.scss';
import { Link } from 'react-router-dom';

const VerificationPage: React.FC = () => {
  const handleClick = (): void => {
    window.history.back();
  };
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>
          Пожалуйста, проверьте информацию, необходимую для получения талона
        </h1>
      </div>
      <div className={styles.header__content}>
        <p>Юридическое лицо/Открытие счета</p>
        <p>Особые потребности/Пенсионер</p>

        <div className={styles.btns}>
          <Link to={'/terminal/verification'} className={styles.btn}>
            Выдать талон
          </Link>
          <Link to={'#'} onClick={handleClick} className={styles.btn}>
            Назад
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
