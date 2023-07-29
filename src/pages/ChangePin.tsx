import React, { useState } from 'react';
import styles from './ChangePin.module.scss';
import Remove from 'src/assets/images/Remove.svg';
import Cookies from 'js-cookie'; // Импортируем Cookies
import { useNavigate } from 'react-router-dom';

function ChangePin() {
  const [pinCode, setPinCode] = useState<string[]>(['', '', '', '']);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    setPinCode((prevState) => {
      const newPinCode = [...prevState];
      newPinCode[index] = value;
      return newPinCode;
    });
  };

  const handleButtonClick = (value: string) => {
    const emptyIndex = pinCode.findIndex((code) => code === '');
  
    if (emptyIndex !== -1) {
      setPinCode((prevState) => {
        const newPinCode = [...prevState];
        if (value === '') {
          const lastNonEmptyIndex = newPinCode.findLastIndex((code: string) => code !== '');
          if (lastNonEmptyIndex !== -1) {
            newPinCode[lastNonEmptyIndex] = '';
          }
        } else {
          newPinCode[emptyIndex] = value;
        }
  
        if (emptyIndex === 3 && currentStep === 0) {
          const enteredPin = newPinCode.join('');
          const oldPINFromStorage = localStorage.getItem('newPin');
  
          if (oldPINFromStorage !== null) {
            const oldPIN = JSON.parse(oldPINFromStorage);
  
            if (enteredPin === oldPIN) {
              setError('');
              setCurrentStep(1);
            } else {
              setError('Неверный текущий ПИН код');
            }
          }
        } else if (emptyIndex === 3 && currentStep === 1) {
          const newPin = newPinCode.join('');
          localStorage.setItem('newPin', JSON.stringify(newPin));
          Cookies.set('newPin', newPin);
          setCurrentStep(2);
          navigate('/terminal/branches');
        }
  
        return newPinCode;
      });
    }
  };
     
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.header__title}>
          {currentStep === 0
            ? 'Введите текущий ПИН код'
            : currentStep === 1
            ? 'Введите новый ПИН код'
            : 'Повторите новый ПИН код'}
        </div>
        <div className={styles.pincode}>
          {pinCode.map((value, index) => (
            <input
              key={index}
              className={styles.number}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        {error && <div className={`${styles.errorBlock} ${error ? styles.show : ''}`}>{error}</div>}
      <div className={styles.numpad}>
        <div className={`${styles.numbers} ${error && styles.error}`} onClick={() => handleButtonClick('1')}>
          1
        </div>
        <div
            className={`${styles.numbers} ${error && styles.error}`}
            onClick={() => handleButtonClick('2')}
          >
            2
          </div>
          <div
            className={`${styles.numbers} ${error && styles.error}`}
            onClick={() => handleButtonClick('3')}
          >
            3
          </div>
          <div
            className={`${styles.numbers} ${error && styles.error}`}
            onClick={() => handleButtonClick('4')}
          >
            4
          </div>
          <div
            className={`${styles.numbers} ${error && styles.error}`}
            onClick={() => handleButtonClick('5')}
          >
            5
          </div>
          <div
            className={`${styles.numbers} ${error && styles.error}`}
            onClick={() => handleButtonClick('6')}
          >
            6
          </div>
          <div
            className={`${styles.numbers} ${error && styles.error}`}
            onClick={() => handleButtonClick('7')}
          >
            7
          </div>
          <div
            className={`${styles.numbers} ${error && styles.error}`}
            onClick={() => handleButtonClick('8')}
          >
            8
          </div>
          <div
            className={`${styles.numbers} ${error && styles.error}`}
            onClick={() => handleButtonClick('9')}
          >
            9
          </div>
          <div
            className={`${styles.numbers} ${error && styles.error}`}
            onClick={() => handleButtonClick('.')}
          >
            .
          </div>
          <div
            className={`${styles.numbers} ${error && styles.error}`}
            onClick={() => handleButtonClick('0')}
          >
            0
          </div>
          <div
            className={`${styles.numbers} ${error && styles.error}`}
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
