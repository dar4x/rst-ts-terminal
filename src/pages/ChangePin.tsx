import React, { useState } from 'react';
import styles from './ChangePin.module.scss';
import Remove from 'src/assets/images/Remove.svg';
import { log } from 'console';

function ChangePin() {
  const [pinCode, setPinCode] = useState<string[]>(['', '', '', '']);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    setPinCode((prevState) => {
      const newPinCode = [...prevState];
      newPinCode[index] = value;
      return newPinCode;
    });
  };

  const handleButtonClick = (value: string) => {
    if (value === '') {
      setPinCode((prevState) => {
        const newPinCode = [...prevState];
        const lastNonEmptyIndex = newPinCode.findLastIndex(
          (code: string) => code !== ''
        );
        if (lastNonEmptyIndex !== -1) {
          newPinCode[lastNonEmptyIndex] = '';
        }
        return newPinCode;
      });
    } else {
      const emptyIndex = pinCode.findIndex((code) => code === '');
      if (emptyIndex !== -1) {
        setPinCode((prevState) => {
          const newPinCode = [...prevState];
          newPinCode[emptyIndex] = value;
          return newPinCode;
        });
      }
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.enter}>
        <h4>Введите ПИН код</h4>
        <input type="text" />
      </div>
      <div className={styles.newpin}>
        <h4>Введите новый ПИН код</h4>
        <input type="text" />
      </div>
      <div className={styles.repeat}>
        <h4>Повторите новый ПИН код</h4>
        <input type="text" />
      </div>
      <div className={styles.content}>
        <div className={styles.header__title}>Введите ПИН код</div>
        <div className={styles.pincode}>
          <input
            className={styles.number}
            type="text"
            maxLength={1}
            value={pinCode[0]}
            onChange={(e) => handleChange(e, 0)}
          />
          <input
            className={styles.number}
            type="text"
            maxLength={1}
            value={pinCode[1]}
            onChange={(e) => handleChange(e, 1)}
          />
          <input
            className={styles.number}
            type="text"
            maxLength={1}
            value={pinCode[2]}
            onChange={(e) => handleChange(e, 2)}
          />
          <input
            className={styles.number}
            type="text"
            maxLength={1}
            value={pinCode[3]}
            onChange={(e) => handleChange(e, 3)}
          />
        </div>
        <div className={styles.numpad}>
          <div
            className={styles.numbers}
            onClick={() => handleButtonClick('1')}
          >
            1
          </div>
          <div
            className={styles.numbers}
            onClick={() => handleButtonClick('2')}
          >
            2
          </div>
          <div
            className={styles.numbers}
            onClick={() => handleButtonClick('3')}
          >
            3
          </div>
          <div
            className={styles.numbers}
            onClick={() => handleButtonClick('4')}
          >
            4
          </div>
          <div
            className={styles.numbers}
            onClick={() => handleButtonClick('5')}
          >
            5
          </div>
          <div
            className={styles.numbers}
            onClick={() => handleButtonClick('6')}
          >
            6
          </div>
          <div
            className={styles.numbers}
            onClick={() => handleButtonClick('7')}
          >
            7
          </div>
          <div
            className={styles.numbers}
            onClick={() => handleButtonClick('8')}
          >
            8
          </div>
          <div
            className={styles.numbers}
            onClick={() => handleButtonClick('9')}
          >
            9
          </div>
          <div
            className={styles.numbers}
            onClick={() => handleButtonClick('.')}
          >
            .
          </div>
          <div
            className={styles.numbers}
            onClick={() => handleButtonClick('0')}
          >
            0
          </div>
          <div
            className={styles.numbers}
            onClick={() => {
              handleButtonClick('');
            }}
          >
            <img src={Remove} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePin;
