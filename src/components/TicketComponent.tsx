import React, { useEffect, useState } from 'react';
import LogoSVG from '../assets/images/RSK_Bank_Logo1.svg';
import styles from './TicketComponent.module.scss';
import QRCode from 'qrcode.react';
import { getIDFunc, getSavedCategory, getSavedQUEUE } from 'src/functions/SaveIDFunc';
import $axios from 'src/utils/axios';
import { BASE_URL } from 'src/utils/const';


const TicketComponent = ({ id }: { id: string }) => {
  const [qrReady, setQrReady] = useState(false);

  const savedCategory = getSavedCategory();
  const savedData = getSavedQUEUE();
  const savedServices = getIDFunc();

  const talonDATA: any = localStorage.getItem("printTALON");
  const modifiedTalonDATA = JSON.parse(talonDATA);

  let talonForPrinting: any[] = [];

  const getPrintingTalonDATA = async () => {
    try {
      const response = await $axios.get(`${BASE_URL}/customers/printing/${modifiedTalonDATA.customer_id}`);
      talonForPrinting = response.data;
    } catch (error) {
      console.log(error)
    }
  }
  console.log(talonForPrinting)

  useEffect(() => {
    setQrReady(true);
    getPrintingTalonDATA()
  }, []);

  return (
    <div id={id} className={styles.ticket_header}>
      <div className={styles.logo}>
        <img src={LogoSVG} alt="" />
      </div>
      <div className={styles.ticket_body}>
        <div className={styles.title}></div>
        <div className={styles.time}>Время выдачи:10:30</div>
        <div className={styles.detail}>Юридическое лицо/<br />Открытие счета</div>
        <div className={styles.window}>Окно:3</div>
        {qrReady && <QRCode value={id} />}
      </div>
    </div>
  );
};

export default TicketComponent;
