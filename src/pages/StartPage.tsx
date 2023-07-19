import React, { useEffect, useState } from 'react';
import styles from './StartPage.module.scss';
import Logo from 'src/assets/images/изображение1.svg';
import { Link } from 'react-router-dom';
import Lock from 'src/assets/images/solar_lock-outline.svg';

function StartPage() {
  const [showContent1, setShowContent1] = useState(true);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);

  // const { getEntity } = StartContext();

  const handleStartClick = () => {
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(true);
  };

  // useEffect(() => {
  //   getEntity();
  //   console.log('asd');
  // }, []);
  return (
    <div className={styles.header}>
      {showContent1 && (
        <>
          <div className={styles.content1}>
            <div className={styles.languages}>
              <Link
                to={'/'}
                className={styles.start__btn}
                onClick={() => {
                  setShowContent2(true);
                  setShowContent1(false);
                }}
              >
                English
              </Link>
              <Link
                to={'/'}
                className={styles.start__btn}
                onClick={() => {
                  setShowContent2(true);
                  setShowContent1(false);
                }}
              >
                Русский
              </Link>
              <Link
                to={'/'}
                className={styles.start__btn}
                onClick={() => {
                  setShowContent2(true);
                  setShowContent1(false);
                }}
              >
                Кыргыз
              </Link>
            </div>
          </div>
          <Link to={'/terminal/pin'} className={styles.block}>
            <img src={Lock} alt="" className={styles.lock} />
            <p>Блокировка экрана</p>
          </Link>
        </>
      )}
      {showContent2 && (
        <div className={styles.content2}>
          <div className={styles.header__title}>ДОБРО ПОЖАЛОВАТЬ!</div>
          <div className={styles.header__logo}>
            <img src={Logo} alt="" />
          </div>
          <div>
            <Link
              to={'/'}
              className={styles.start__btn}
              onClick={handleStartClick}
            >
              Начать
            </Link>
          </div>
        </div>
      )}
      {showContent3 && (
        <div className={styles.content3}>
          <div className={styles.entity}>
            <Link to={'/terminal/services'} className={styles.entity__btn}>
              Физическое лицо
            </Link>
            <Link to={'/terminal/services'} className={styles.entity__btn}>
              Юридическое лицо
            </Link>
            <Link to={'/terminal/services'} className={styles.entity__btn}>
              Платежные карты
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default StartPage;
