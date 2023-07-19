import React from 'react';
import styles from './ServicesPage.module.scss';
import ServicesCard from './ServicesCard';

function ServicesPage() {
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>
          Выберите интересующую вас услугу, нажав на соответствующую кнопку на
          сенсорном экране
        </h1>
      </div>
      <div className={styles.cards}>
        <ServicesCard />
      </div>
    </div>
  );
}

export default ServicesPage;
