import React, { useEffect, useState } from 'react';
import { fetchBranches } from 'src/store/features/branchesSlice';
import styles from './BranchesPick.module.scss';
import LogoSVG from '../assets/images/RSK_Bank_Logo1.svg';
import { branchesSavedID } from 'src/functions/SaveIDFunc';
import { useNavigate } from 'react-router-dom';


const BranchesPick = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetchBranches()
  }, []);

  const branches = localStorage.getItem("branches") || '';
  const parsedBranches = JSON.parse(branches);
  
  const navigate = useNavigate();

  return (
    <div>
      <h1 className={styles.pickTitle}>Выбрать Филиал</h1>
      <div className={styles.flexBranches}>
        { parsedBranches.results.reverse().map((item: any) => (
          <div className={styles.branchesItem} key={item.id} onClick={() => {
            branchesSavedID(item.id);
            navigate("/");
          }}>
            <img src={LogoSVG} alt="" />
            <h3>{ item.name }</h3>
            <p>{ item.street }</p>
          </div>
        )) }
      </div>
    </div>
  )
}

export default BranchesPick