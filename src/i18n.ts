import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,

    resources: {
      en: {
        translation: {
          welcome: 'Welcome!',
          start: 'Start',
          lockScreen: 'Lock Screen',
          physicalEntity: 'Physical Entity',
          legalEntity: 'Legal Entity',
          paymentCards: 'Payment Cards',
          back: "Back",
          chooseServiceTitle: "Select the service you are interested in by pressing the corresponding button on the touch screen",
          choosePrivileges: "Please indicate if you have any special needs due to disability, pregnancy or retirement",
          privileges1: "Disability",
          privileges2: "Pregnant",
          privileges3: "Pensioner",
          no: "No",
          operation: "Operation on a",
          requiredDocs: "Required docs",
          next: "Next",
          required: "Required",
          optional: "Optional",
          verification: "Please check the information required to receive the ticket",
          talon: "Get a ticket",
          needDOCS: "No documents needed",
          special: "Special needs",
          services: {
            "Переводы": "Transfers",
            "Обмен валют2": "Money exchange",
            "Оплата коммунальных услуг": "Payment of utility services",
            "Открытие депозита": "Opening a deposit"
          },
          timeToTicket: "Issuing time",
          position: "Position"
        }
      },
      ru: {
        translation: {
          welcome: 'ДОБРО ПОЖАЛОВАТЬ!',
          start: 'Начать',
          lockScreen: 'Блокировка экрана',
          physicalEntity: 'Физическое лицо',
          legalEntity: 'Юридическое лицо',
          paymentCards: 'Платежные карты',
          back: "Назад",
          chooseServiceTitle: "Выберите интересующую вас услугу, нажав соответствующую кнопку на сенсорном экране",
          choosePrivileges: "Пожалуйста, укажите, если у вас есть особые потребности в связи с инвалидностью, беременностью или пенсионерством",
          privileges1: "Инвалидность",
          privileges2: "Беременность",
          privileges3: "Пенсионер",
          no: "Нет",
          operation: "Операция по",
          requiredDocs: "Требуемые документы",
          next: "Далее",
          required: "Обязательные",
          optional: "Необязательные",
          verification: "Пожалуйста, проверьте информацию, необходимую для получения талона",
          talon: "Выдать талон",
          needDOCS: "Никаких документов не нужно",
          special: "Особые потребности",
          services: {
            "Переводы": "Переводы",
            "Обмен валют2": "Обмен валют2",
            "Оплата коммунальных услуг": "Оплата коммунальных услуг",
            "Открытие депозита": "Открытие депозита"
          },
          timeToTicket: "Время выдачи",
          position: "Позиция"
        }
      },
      ky: {
        translation: {
          welcome: 'Кош келиңиз!',
          start: 'Баштоо',
          lockScreen: 'Экранды жабуу',
          physicalEntity: 'Физикалык субъект',
          legalEntity: 'Журналды субъект',
          paymentCards: 'Төлөм карталары',
          back: "Артка",
          chooseServiceTitle: "Сенсордук экрандагы тиешелүү баскычты басып, сизди кызыктырган кызматты тандаңыз",
          choosePrivileges: "Майыптыгыңыз, кош бойлуулугуңуз же пенсияга чыгууңузга байланыштуу өзгөчө муктаждыктарыңыз болсо, көрсөтүңүз",
          privileges1: "Майыптуулук",
          privileges2: "Кош бойлуулук",
          privileges3: "Пенсионер",
          no: "Жок",
          operation: "Операция",
          requiredDocs: "Керектүү документтер",
          next: "Андан ары",
          required: "Керектүү",
          optional: "Зарыл эмес",
          verification: "Билетти алуу үчүн керектүү маалыматты текшериңиз",
          talon: "Талон алуу",
          needDOCS: "Документ кереги жок.",
          special: "Өзгөчө муктаждыктар",
          services: {
            "Переводы": "Акча которуулар",
            "Обмен валют2": "Акча алмаштыруу",
            "Оплата коммунальных услуг": "Коммуналдык кызматтарды төлөө",
            "Открытие депозита": "Депозит ачуу"
          },
          timeToTicket: "Берилген убакыт",
          position: "Позиция"
        }
      }
    },

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
