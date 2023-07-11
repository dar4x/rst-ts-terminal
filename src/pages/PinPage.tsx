import React, { ReactHTMLElement, useEffect, useState } from 'react';
import styles from './PinPage.module.scss';
import Logo from 'src/assets/images/RSK_Bank_Logo1.svg';
import Remove from 'src/assets/images/Remove.svg';
import Edit from 'src/assets/images/fluent_edit-32-regular.svg';
import LockFill from 'src/assets/images/mingcute_lock-fill.svg';
import Lock from 'src/assets/images/solar_lock-outline.svg';
import { useNavigate } from 'react-router';

function PinPage() {
  const [pinCode, setPinCode] = useState(['', '', '', '']);
  const [isScreenBlocked, setIsScreenBlocked] = useState(false);
  const [unlock, setUnlock] = useState(false);

  const navigate = useNavigate();

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

  useEffect(() => {
    if (pinCode.join('') === '4444') {
      setIsScreenBlocked(true);
    } else {
      setIsScreenBlocked(false);
    }
  }, [pinCode]);

  const handleUnlock = () => {
    setUnlock(true);
    setPinCode(['', '', '', '']);

    if (pinCode.join('') === '4444') {
      navigate('/');
    }
  };

  return (
    <div className={styles.container}>
      {isScreenBlocked && (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.header__logo}>
              <img src={Logo} alt="" />
            </div>
            <div className={styles.blocked}>
              <img src={LockFill} alt="" />
              <h1>Экран временно заблокирован</h1>
            </div>
          </div>
          <div className={styles.unlock} onClick={handleUnlock}>
            <img src={Lock} alt="" />
            <p>Разблокировать экран</p>
          </div>
          {unlock && (
            <div className={styles.content}>
              <div className={styles.header__logo}>
                <img src={Logo} alt="" />
              </div>
              <div className={styles.header__title}>Пин код</div>
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
                  <p>Ввод</p>
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
          )}
        </div>
      )}
      {!isScreenBlocked && (
        <div className={styles.content}>
          <div className={styles.header__logo}>
            <img src={Logo} alt="" />
          </div>
          <div className={styles.header__title}>Пин код</div>
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
      )}
      {!isScreenBlocked && (
        <div className={styles.change__pin}>
          <img src={Edit} alt="" />
          <p>Изменить Пин</p>
        </div>
      )}
    </div>
  );
}

export default PinPage;
