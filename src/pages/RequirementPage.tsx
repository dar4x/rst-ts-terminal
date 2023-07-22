import React from 'react';
import styles from './Requirement.module.scss';
import { Link } from 'react-router-dom';
import Note from 'src/assets/images/ph_note-thin.svg';
import { useTranslation } from 'react-i18next';

function RequirementPage() {
  const { t } = useTranslation();
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>{ t("operation") }</h1>
      </div>
      <div className={styles.header__content}>
        <p>
          Операции по корпоративному счету включают финансовые транзакции:
          открытие/закрытие счета, банковские переводы, операции с валютой,
          платежи, документы.
        </p>
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
