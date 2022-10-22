import ExchangeIcon from 'assets/icons/exchange.svg';

import Select from 'components/select';
import useLanguages from 'hooks/useLanguages';
import { selectors, useApp } from 'store/context';

import classes from './translate.module.scss';

export default function TranslatePage() {
  useLanguages();

  const languages = useApp(selectors.getLanguages);

  return (
    <>
      <div className={classes.page__wrapper}>
        <div className={classes.select__wrapper}>
          <Select
            options={languages}
            value={'ru'}
            onChange={() => {}}
            name={'321'}
          />
          <img src={ExchangeIcon} alt="arrow" width={25} height={25} />
          <Select
            options={languages}
            value={'ru'}
            onChange={() => {}}
            name={'321'}
          />
        </div>
        <div className={classes.textarea__wrapper}>
          <textarea></textarea>
          <textarea></textarea>
        </div>
      </div>
    </>
  );
}
