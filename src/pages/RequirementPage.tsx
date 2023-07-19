import React from 'react';
import styles from './Requirement.module.scss';
import { Link } from 'react-router-dom';
import Note from 'src/assets/images/ph_note-thin.svg';

function RequirementPage() {
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>Операция по корпоративному счету</h1>
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
            Требуемые документы
          </Link>
          <Link to={'/terminal/privileges'} className={styles.btn}>
            Далее
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RequirementPage;
