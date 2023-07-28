import React, { useEffect, useState } from 'react';
import LogoSVG from '../assets/images/RSK_Bank_Logo1.svg';
import styles from './TicketComponent.module.scss';
import QRCode from 'qrcode.react';


const TicketComponent = ({ id }: { id: string }) => {
  const [qrReady, setQrReady] = useState(false);

  useEffect(() => {
    setQrReady(true);
  }, []);

  return (
    <div id={id} className={styles.ticket_header}>
      <div className={styles.ticket_body}>
        <div className={styles.title}>Б201</div>
        <div className={styles.time}>Время выдачи:10:30</div>
        <div className={styles.detail}>Юридическое лицо/<br />Открытие счета</div>
        <div className={styles.window}>Окно:3</div>
        {qrReady && <QRCode value={id} />}
      </div>
    </div>
  );
};

export default TicketComponent;
