import React from 'react';
import styles from './Navbar.module.scss';
import LogoSVG from '../assets/images/RSK_Bank_Logo1.svg';

function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <img src={LogoSVG} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
