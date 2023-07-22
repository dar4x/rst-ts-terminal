import React from 'react';
import styles from './Verification.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const VerificationPage: React.FC = () => {
  const handleClick = (): void => {
    window.history.back();
  };
  const { t } = useTranslation();
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>
          { t("verification") }
        </h1>
      </div>
      <div className={styles.header__content}>
        <p>Юридическое лицо/Открытие счета</p>
        <p>Особые потребности/Пенсионер</p>

        <div className={styles.btns}>
          <Link to={'/terminal/verification'} className={styles.btn}>
            { t("talon") }
          </Link>
          <Link to={'#'} onClick={handleClick} className={styles.btn}>
            { t("back") }
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
