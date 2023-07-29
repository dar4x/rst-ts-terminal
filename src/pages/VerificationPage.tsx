import React, { useState } from 'react';
import styles from './Verification.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getIDFunc, getSavedCategory, getSavedQUEUE } from 'src/functions/SaveIDFunc';
import { fetchCustomersAdd } from 'src/store/features/branchesSlice';
import TicketComponent from 'src/components/TicketComponent';
import { useReactToPrint } from 'react-to-print';
import $axios from 'src/utils/axios';
import { BASE_URL } from 'src/utils/const';

const VerificationPage = () => {
  const handleClick = (): void => {
    window.history.back();
  };
  const { t } = useTranslation();

  const savedCategory = getSavedCategory();
  const savedData = getSavedQUEUE();
  const savedServices = getIDFunc();

  const componentRef = React.useRef(null); // Создаем ref для компонента TicketComponent

  const handlePrint = useReactToPrint({
    content: () => componentRef.current, // Указываем элемент для печати
  });

  const handlePrintClick = () => {
    handlePrint(); // Вызываем функцию печати из хука useReactToPrint
    fetchCustomersAdd(savedCategory, savedData.id);
    getPrintingTalonDATA()
  }

  const talonDATA: any = localStorage.getItem("printTALON");
  const modifiedTalonDATA = JSON.parse(talonDATA);

  let talonForPrinting: any = [];

  const getPrintingTalonDATA = async () => {
    try {
      const response = await $axios.get(`${BASE_URL}/customers/printing/${modifiedTalonDATA.customer_id}`);
      talonForPrinting = response.data;
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>
          { t("verification") }
        </h1>
      </div>
      <div className={styles.header__content}>
        <p>{ savedServices.name === "payment cards" ? t("paymentCards") : savedServices.name === "legal entities" ? t("legalEntity") : savedServices.name === "individual" ? t("physicalEntity") : ""}/{ t(`services.${savedData.name}`) }</p>
        <p>{t("special")}/{ savedCategory === "pensioner" ? t("privileges3") : savedCategory === "pregnant" ? t("privileges2") : savedCategory === "disabled person" ? t("privileges1") : "Нет"}</p>
        <div className={styles.white_block}></div>
        <div className={styles.btns}>
          <button className={styles.btn} onClick={handlePrintClick}>
            { t("talon") }
          </button>
           <div className={styles.talon} ref={componentRef}>
             <TicketComponent id={savedData.id} />
           </div>
          <Link to={'#'} onClick={handleClick} className={styles.btn}>
            { t("back") }
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
