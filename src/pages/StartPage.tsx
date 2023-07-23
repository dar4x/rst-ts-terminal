  import React, { useEffect, useState } from 'react';
  import { useTranslation } from 'react-i18next';
  import styles from './StartPage.module.scss';
  import Logo from 'src/assets/images/изображение1.svg';
  import { Link } from 'react-router-dom';
  import Lock from 'src/assets/images/solar_lock-outline.svg';
  import i18n from '../i18n'; // Import i18n;
  import { useAppDispatch, useAppSelector } from 'src/store/store';
  import { fetchServiceTypes } from 'src/store/features/branchesSlice';
import { SaveIDFunc } from 'src/functions/SaveIDFunc';
  
  function StartPage() {
    const { t } = useTranslation();
    const [showContent1, setShowContent1] = useState(true);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);

    const changeLanguage = (lng: any) => {
      i18n.changeLanguage(lng);
    };

    const handleStartClick = () => {
      setShowContent1(false);
      setShowContent2(false);
      setShowContent3(true);
    };

    const dispatch = useAppDispatch();
    const serviceTypes = useAppSelector((state) => state.branches);

    useEffect(() => {
      dispatch(fetchServiceTypes());
    }, [dispatch]);

    return (
      <div className={styles.header}>
        {showContent1 && (
          <>
            <div className={styles.content1}>
              <div className={styles.languages}>
                <button
                  className={styles.start__btn}
                  onClick={() => {
                    changeLanguage('en'); // Change language to English
                    setShowContent2(true);
                    setShowContent1(false);
                  }}
                >
                  English
                </button>
                <button
                  className={styles.start__btn}
                  onClick={() => {
                    changeLanguage('ru'); // Change language to Russian
                    setShowContent2(true);
                    setShowContent1(false);
                  }}
                >
                  Русский
                </button>
                <button
                  className={styles.start__btn}
                  onClick={() => {
                    changeLanguage('ky'); // Change language to Kyrgyz
                    setShowContent2(true);
                    setShowContent1(false);
                  }}
                >
                  Кыргыз
                </button>
              </div>
            </div>
            <Link to={'/terminal/pin'} className={styles.block}>
              <img src={Lock} alt="" className={styles.lock} />
              <p>{t('lockScreen')}</p>
            </Link>
          </>
        )}
        {showContent2 && (
          <div className={styles.content2}>
            <div className={styles.header__title}>{t('welcome')}</div>
            <div className={styles.header__logo}>
              <img src={Logo} alt="" />
            </div>
            <div style={{position: "relative"}} >
              <button className={styles.start__btn} onClick={handleStartClick}>
                {t('start')}
              </button>
            </div>
            <div className={styles.back__btn} onClick={() => {
              setShowContent2(false);
              setShowContent1(true);
              setShowContent3(false);
            }}>{ t('back') }</div>
          </div>
        )}
        {showContent3 && (
          <div className={styles.content3}>
            <div className={styles.entity}>
              { serviceTypes?.map((service: any) => (
                <Link to={'/terminal/services'} className={styles.entity__btn} key={service.id} onClick={() => SaveIDFunc(service.id)} >
                  { service.name === 'payment cards' ? t("paymentCards") : service.name === 'individuals' ? t("legalEntity") : service.name === 'legal entities' ? t("physicalEntity") : "Неизвестно" }
                </Link>
              )) }
              <div className={styles.back__btn2} onClick={() => {
                setShowContent2(true);
                setShowContent1(false);
                setShowContent3(false);
              }}>{ t('back') }</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  export default StartPage;
