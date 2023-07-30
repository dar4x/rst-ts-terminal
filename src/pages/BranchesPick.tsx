import React, { useEffect, useState } from 'react';
import { fetchBranches } from 'src/store/features/branchesSlice';
import styles from './BranchesPick.module.scss';
import LogoSVG from '../assets/images/RSK_Bank_Logo1.svg';
import { branchesSavedID } from 'src/functions/SaveIDFunc';
import { useNavigate } from 'react-router-dom';

const BranchesPick = () => {
  const [parsedBranches, setParsedBranches] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const branches = await fetchBranches();
        setParsedBranches(branches.results.reverse());
      } catch (error) {
        console.log("Error fetching branches:", error);
        // Handle the error appropriately, if needed.
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className={styles.pickTitle}>Выбрать Филиал</h1>
      <div className={styles.flexBranches}>
        {parsedBranches.map((item: any) => (
          <div
            className={styles.branchesItem}
            key={item.id}
            onClick={() => {
              branchesSavedID(item.id);
              navigate("/");
            }}
          >
            <img src={LogoSVG} alt="" />
            <h3>{item.name}</h3>
            <p>{item.street}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchesPick;
