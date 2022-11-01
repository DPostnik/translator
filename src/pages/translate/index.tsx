import { useCallback, useEffect, useMemo } from 'react';

import Select from 'components/select';
import TextField from 'components/textField';
import Warning from 'components/warning';
import { ActionTypes } from 'enums/action-types';
import { Languages } from 'enums/languages';
import { Colors } from 'enums/colors';
import useLanguages from 'hooks/useLanguages';
import useDebounce from 'hooks/useDebounce';
import useTranslate from 'hooks/useTranslate';
import useUrl from 'hooks/useUrl';
import { useApp, selectors } from 'store/context';
import { getSourceLanguages, getTargetLanguages } from 'utils/language';

import classes from './translate.module.scss';
import ExchangeIcon from 'icons/exchange-icon';
import RemoveIcon from 'icons/remove-icon';
import EmptyStarIcon from 'icons/empty-star-icon';

export default function TranslatePage() {
  useLanguages();
  const { dispatch } = useApp();
  const { languages, sourceLanguage, targetLanguage, sourceText, targetText } =
    useApp(selectors.getTranslateState);
  const isFavourite = useApp(selectors.getIsFavourite);
  const selectedUID = useApp(selectors.getSelectedUID);

  const debouncedValue = useDebounce(sourceText, 500);

  useTranslate({
    sourceLanguage,
    sourceText: debouncedValue,
    targetLanguage,
    isFavourite,
  });

  useUrl();

  useEffect(() => {
    if (selectedUID) {
      dispatch({
        type: ActionTypes.UPDATE_ITEM_IN_HISTORY,
        payload: { uid: selectedUID, isFavourite: isFavourite },
      });
      return;
    }
  }, [selectedUID, isFavourite, dispatch]);

  const clearIsFavourite = useCallback(() => {
    dispatch({ type: ActionTypes.SET_SELECTED_UID, payload: '' });
    dispatch({ type: ActionTypes.SET_IS_FAVOURITE, payload: false });
  }, [dispatch]);

  const onChangeLanguage = useCallback(
    (name: string, value: string) => {
      clearIsFavourite();
      const type =
        name === 'sourceLanguage'
          ? ActionTypes.SET_SOURCE_LANGUAGE
          : ActionTypes.SET_TARGET_LANGUAGE;
      dispatch({ type, payload: value });
    },
    [clearIsFavourite, dispatch]
  );

  const onChangeSourceText = useCallback(
    (value: string) => {
      clearIsFavourite();
      dispatch({ type: ActionTypes.SET_SOURCE_TEXT, payload: value });
    },
    [clearIsFavourite, dispatch]
  );

  const onChangeLanguages = () => {
    clearIsFavourite();
    dispatch({ type: ActionTypes.EXCHANGE_LANGUAGES });
  };

  const canChangeLanguages = useMemo(() => {
    return languages.length > 0 && sourceLanguage !== Languages.AUTO;
  }, [languages, sourceLanguage]);

  const sourceLanguages = useMemo(() => {
    return getSourceLanguages(languages);
  }, [languages]);

  const targetLanguages = useMemo(() => {
    return getTargetLanguages(languages, sourceLanguage);
  }, [languages, sourceLanguage]);

  const onClear = () => {
    dispatch({ type: ActionTypes.SET_SOURCE_TEXT, payload: '' });
    clearIsFavourite();
  };

  const onAddToFavourites = () => {
    dispatch({ type: ActionTypes.SET_IS_FAVOURITE, payload: !isFavourite });
  };

  return (
    <>
      <div className={classes.page__wrapper}>
        <div className={classes.select__wrapper}>
          <Select
            options={sourceLanguages}
            value={sourceLanguage}
            onChange={onChangeLanguage}
            name="sourceLanguage"
          />
          <ExchangeIcon
            stroke={canChangeLanguages ? Colors.BLACK : Colors.LIGHT_GRAY}
            fill={Colors.WHITE}
            size={{ width: 50, height: 50 }}
            onClick={canChangeLanguages ? onChangeLanguages : undefined}
          />
          <Select
            options={targetLanguages}
            value={targetLanguage}
            onChange={onChangeLanguage}
            name="targetLanguage"
          />
        </div>
        <div className={classes.textarea__wrapper}>
          <TextField
            rows={5}
            value={sourceText}
            handleChange={onChangeSourceText}
          >
            {sourceText && (
              <RemoveIcon size={{ width: 20, height: 20 }} onClick={onClear} />
            )}
          </TextField>
          <TextField rows={5} value={targetText}>
            {targetText.trim() && (
              <EmptyStarIcon
                size={{ width: 20, height: 20 }}
                fill={isFavourite ? Colors.ORANGE : Colors.WHITE}
                onClick={onAddToFavourites}
              />
            )}
          </TextField>
        </div>
        <Warning sourceLanguage={sourceLanguage} sourceText={debouncedValue} />
      </div>
    </>
  );
}
