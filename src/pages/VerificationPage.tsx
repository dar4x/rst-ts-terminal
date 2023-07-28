import React from 'react';
import styles from './Verification.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getIDFunc, getSavedCategory, getSavedQUEUE } from 'src/functions/SaveIDFunc';
import { fetchCustomersAdd } from 'src/store/features/branchesSlice';
import TicketComponent from 'src/components/TicketComponent';

const VerificationPage = () => {
  const handleClick = (): void => {
    window.history.back();
  };
  const { t } = useTranslation();

  const savedCategory = getSavedCategory();
  const savedData = getSavedQUEUE();
  const savedServices = getIDFunc();

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Ticket</title></head><body>'); // Открываем HTML документ в новом окне для печати
      printWindow.document.write('<div style="margin: 20px;">');
      printWindow.document.write('<h1>Талон</h1>');
      printWindow.document.write('<hr />');
      printWindow.document.write('<div>');
      const ticketContent = document.getElementById(savedData.id); // Получаем содержимое талона по переданному ID
      if (ticketContent) {
        printWindow.document.write(ticketContent.innerHTML); // Вставляем содержимое талона в новое окно для печати
      }
      printWindow.document.write('</div>');
      printWindow.document.write('</div>');
      printWindow.document.write('</body></html>');
      setTimeout(() => {
        printWindow.print(); // Вызываем печать после задержки
        printWindow.document.close(); // Закрываем документ после печати
      }, 500); // Задержка в 500 миллисекунд (может потребоваться регулировка)
    }
    fetchCustomersAdd(savedCategory, savedData.id);
  }

  return (
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h1>
          { t("verification") }
        </h1>
      </div>
      <div className={styles.header__content}>
        <p>{ savedServices.name === "payment cards" ? t("paymentCards") : savedServices.name === "legal entities" ? t("legalEntity") : savedServices.name === "individual" ? t("physicalEntity") : ""}/{ savedData.name }</p>
        <p>{t("special")}/{ savedCategory === "pensioner" ? t("privileges3") : savedCategory === "pregnant" ? t("privileges2") : savedCategory === "disabled person" ? t("privileges1") : ""}</p>

        <div className={styles.btns}>
          <button className={styles.btn} onClick={handlePrint}>
            { t("talon") }
          </button>
          <div className={styles.talon} >
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
