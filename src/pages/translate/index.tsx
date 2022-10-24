import { useCallback } from 'react';

import Select from 'components/select';
import TextField from 'components/textField';
import useLanguages from 'hooks/useLanguages';
import { selectors, useApp, ActionTypes } from 'store/context';

import ExchangeIcon from 'assets/icons/exchange.svg';
import classes from './translate.module.scss';

export default function TranslatePage() {
  useLanguages();
  const { dispatch } = useApp();
  const languages = useApp(selectors.getLanguages);
  const sourceLanguage = useApp(selectors.getSourceLanguage);
  const targetLanguage = useApp(selectors.getTargetLanguage);
  const sourceText = useApp(selectors.getSourceText);
  const targetText = useApp(selectors.getTargetText);

  const onChangeLanguage = useCallback(
    (name: string, value: string) => {
      const type =
        name === 'source'
          ? ActionTypes.SET_SOURCE_LANGUAGE
          : ActionTypes.SET_TARGET_LANGUAGE;
      dispatch({ type, payload: value });
    },
    [dispatch]
  );

  const onChangeSourceText = useCallback(
    (value: string) => {
      dispatch({ type: ActionTypes.SET_SOURCE_TEXT, payload: value });
    },
    [dispatch]
  );

  return (
    <>
      <div className={classes.page__wrapper}>
        <div className={classes.select__wrapper}>
          <Select
            options={languages}
            value={sourceLanguage}
            onChange={onChangeLanguage}
            name={'sourceLanguage'}
          />
          <img src={ExchangeIcon} alt="arrow" width={25} height={25} />
          <Select
            options={languages}
            value={targetLanguage}
            onChange={onChangeLanguage}
            name={'targetLanguage'}
          />
        </div>
        <div className={classes.textarea__wrapper}>
          <TextField
            rows={5}
            value={sourceText}
            handleChange={onChangeSourceText}
          />
          <TextField rows={5} value={targetText} />
        </div>
      </div>
    </>
  );
}
