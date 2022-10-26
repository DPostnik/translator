import { useEffect } from 'react';

import { translate } from 'service';
import { useApp } from 'store/context';
import { ActionTypes } from 'enums/action-types';
import { Languages } from 'enums/languages';

type TranslateProps = {
  targetLanguage: string;
  sourceLanguage: string;
  sourceText: string;
};

export default function useTranslate({
  sourceText,
  sourceLanguage,
  targetLanguage,
}: TranslateProps) {
  const { dispatch } = useApp();

  useEffect(() => {
    if (!sourceText) {
      dispatch({ type: ActionTypes.SET_TARGET_TEXT, payload: '' });
      return;
    }

    (async function translateText() {
      const data = await translate(
        targetLanguage,
        sourceText,
        sourceLanguage === Languages.AUTO ? '' : sourceLanguage
      );
      if (data.error) {
        dispatch({
          type: ActionTypes.SET_ERROR,
          payload: data.error,
        });
        return;
      }
      dispatch({
        type: ActionTypes.SET_TARGET_TEXT,
        payload: data,
      });
    })();
  }, [sourceText, targetLanguage, sourceLanguage, dispatch]);
}
