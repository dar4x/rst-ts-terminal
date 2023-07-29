import { useEffect, useState, useTransition } from 'react';
import LogoSVG from '../assets/images/RSK_Bank_Logo1.svg';
import styles from './TicketComponent.module.scss';
import QRCode from 'qrcode.react';
import $axios from 'src/utils/axios';
import { BASE_URL } from 'src/utils/const';
import { useTranslation } from 'react-i18next';



const TicketComponent = ({ id }: { id: string }) => {
  const [qrReady, setQrReady] = useState(false);

  useEffect(() => {
    setQrReady(true);
  }, []);

  
  const [talonForPrinting, setTalonForPrinting] = useState<any>(null);

  useEffect(() => {
    setQrReady(true);
    getPrintingTalonDATA();
  }, []);

  const getPrintingTalonDATA = async () => {
    try {
      const response = await $axios.get(`${BASE_URL}/customers/printing/${id}`);
      setTalonForPrinting(response.data);
      console.log(talonForPrinting)
    } catch (error) {
      console.log(error);
    }
  };

  const convertTime = (dateString: string) => {
    const dateObject = new Date(dateString);
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const { t } = useTranslation();

  return (
    talonForPrinting && (
      <div id={id} className={styles.ticket_header}>
      <div className={styles.logo}>
        <img src={LogoSVG} alt="" />
      </div>
      <div className={styles.ticket_body}>
        <div className={styles.title}>{ talonForPrinting["Номер талона"] }</div>
        <div className={styles.time}>{t("timeToTicket")}:{ convertTime(talonForPrinting["Выдано"]) }</div>
        <div className={styles.detail}>{ talonForPrinting["Тип услуги"] === "legal entities" ? t("legalEntity") : talonForPrinting["Тип услуги"] === "individual" ? t("physicalEntity") : talonForPrinting["Тип услуги"] === "payment cards" ? t("paymentCards") :talonForPrinting["Тип услуги"]  }/<br />{ t(`services.${talonForPrinting["Очередь"]}`) }</div>
        <div className={styles.window}>{t("position")}:{talonForPrinting["Позиция"]}</div>
        {qrReady && <QRCode value={id} />}
      </div>
    </div>
    )
  );
};

export default TicketComponent;
