import ExchangeIcon from 'assets/icons/exchange.svg';

import classes from './translate.module.scss';

export default function TranslatePage() {
  return (
    <>
      <div className={classes.page__wrapper}>
        <div className={classes.select__wrapper}>
          <select className={classes.select__control}>
            <option value="en">English</option>
          </select>
          <img src={ExchangeIcon} alt="arrow" width={25} height={25} />
          <select className={classes.select__control}>
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
        </div>
        <div className={classes.textarea__wrapper}>
          <textarea></textarea>
          <textarea></textarea>
        </div>
      </div>
    </>
  );
}
