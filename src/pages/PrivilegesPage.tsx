import React from 'react';
import styles from './Priveleges.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function PrivilegesPage() {
  const { t } = useTranslation();
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>
          { t("choosePrivileges") }
        </h1>
      </div>
      <div className={styles.header__content}>
        <div className={styles.btns}>
          <Link to={'/terminal/verification'} className={styles.btn}>
            { t("privileges1") }
          </Link>
          <Link to={'/terminal/verification'} className={styles.btn}>
          { t("privileges2") }
          </Link>
          <Link to={'/terminal/verification'} className={styles.btn}>
          { t("privileges3") }
          </Link>
          <Link to={'/terminal/verification'} className={styles.btn}>
            { t("no") }
          </Link>
          <Link to={'/terminal/services'} className={styles.btn}>
            { t("back") }
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrivilegesPage;
