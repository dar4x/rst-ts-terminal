import React from 'react';
import styles from './ServicesPage.module.scss';
import ServicesCard from './ServicesCard';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function ServicesPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>
          { t("chooseServiceTitle") }
        </h1>
      </div>
      <div className={styles.cards}>
        <ServicesCard />
      </div>
      <div className={styles.d_f}>
        <div className={styles.backBTN} onClick={() => navigate("/")} >{ t("back") }</div>
      </div>
    </div>
  );
}

export default ServicesPage;
