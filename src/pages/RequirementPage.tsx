import React from 'react';
import styles from './Requirement.module.scss';
import { Link } from 'react-router-dom';
import Note from 'src/assets/images/ph_note-thin.svg';
import { useTranslation } from 'react-i18next';
import { getSavedQUEUE } from 'src/functions/SaveIDFunc';

function RequirementPage() {
  const { t } = useTranslation();

  const savedQueue = getSavedQUEUE();

  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>{ t("operation") } { savedQueue.name }</h1>
      </div>
      <div className={styles.header__content}>
        <div className={styles.btns}>
          <Link to={'/terminal/documentation'} className={styles.btn}>
            <img src={Note} alt="" />
            { t("requiredDocs") }
          </Link>
          <Link to={'/terminal/privileges'} className={styles.btn}>
            { t("next") }
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RequirementPage;
