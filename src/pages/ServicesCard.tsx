import { AnyAction } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { getIDFunc, SaveQUEUE } from 'src/functions/SaveIDFunc';
import { fetchBranchesQueue } from 'src/store/features/branchesSlice';
import { RootState, useAppSelector } from 'src/store/store';
import styles from './ServicesCard.module.scss';

function ServicesCard() {
  
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch(); // Specify ThunkDispatch type
  const serviceID = getIDFunc();

  useEffect(() => {
    dispatch(fetchBranchesQueue(serviceID.id));
  }, []);

  const servicesQueue = useAppSelector((state) => state.branches);

  const { t } = useTranslation();

  console.log(servicesQueue)

  return (
    <div className={styles.card}>
      { servicesQueue?.map(( services: any ) => (
        <Link to={'/terminal/requirement'} className={styles.card__btn} onClick={ () => {
          SaveQUEUE(services.id, services.name, services.documents, services.optional_documents, services.symbol, services.services)
        } }>
          {t(`services.${services.name}`)}
        </Link>
      )) }
    </div>
  );
}

export default ServicesCard;
