import React from 'react';
import styles from './Documentation.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getSavedQUEUE } from 'src/functions/SaveIDFunc';

function DocumentationPage() {
  const { t } = useTranslation();

  const savedQueue = getSavedQUEUE();

  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>{ t("requiredDocs") }</h1>
      </div>
      <div className={styles.obligatory}>
        <h4 className={styles.obligatory__title}>{ t("required") }:</h4>
        <ul>
          <li className={styles.obligatory__item}>{ savedQueue.documents === "" ? t("needDOCS") : savedQueue.documents }</li>
        </ul>
      </div>
      <div className={styles.optional}>
        <h4 className={styles.optional__title}>{ t("optional") }:</h4>
        <ul>
          <li className={styles.obligatory__item}>{ savedQueue.optional_documents === "" ? t("needDOCS") : savedQueue.optional_documents }</li>
        </ul>
      </div>
      <Link to={'/terminal/privileges'} className={styles.btn}>
        { t("next") }
      </Link>
    </div>
  );
}

export default DocumentationPage;
