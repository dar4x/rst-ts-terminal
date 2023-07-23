import React from 'react';
import styles from './Verification.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getSavedCategory, getSavedQUEUE } from 'src/functions/SaveIDFunc';
import { fetchCustomersAdd } from 'src/store/features/branchesSlice';

const VerificationPage: React.FC = () => {
  const handleClick = (): void => {
    window.history.back();
  };
  const { t } = useTranslation();

  const savedCategory = getSavedCategory();
  const savedData = getSavedQUEUE();

  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>
          { t("verification") }
        </h1>
      </div>
      <div className={styles.header__content}>
        <p>{ savedData.services === 1 ? t("paymentCards") : savedData.services === 2 ? t("legalEntity") : savedData.services === 3 ? t("physicalEntity") : ""}/{ savedData.name }</p>
        <p>{t("special")}/{ savedCategory === "pensioner" ? t("privileges3") : savedCategory === "pregnant" ? t("privileges2") : savedCategory === "disabled person" ? t("privileges1") : ""}</p>

        <div className={styles.btns}>
          <button className={styles.btn} onClick={() => {
            fetchCustomersAdd({
              category: savedCategory,
              queue: savedData.services
            })
          }}>
            { t("talon") }
          </button>
          <Link to={'#'} onClick={handleClick} className={styles.btn}>
            { t("back") }
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
