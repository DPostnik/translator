import { useEffect } from 'react';

import { ActionTypes } from 'enums/action-types';
import { Languages } from 'enums/languages';
import { translate } from 'service';
import { selectors, useApp } from 'store/context';
import { createTranslationItem } from 'utils/history';

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
  const languages = useApp(selectors.getLanguages);

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

      dispatch({
        type: ActionTypes.ADD_ITEM_TO_HISTORY,
        payload: createTranslationItem(
          sourceLanguage,
          targetLanguage,
          sourceText,
          data,
          languages
        ),
      });

      dispatch({
        type: ActionTypes.SET_TARGET_TEXT,
        payload: data,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceText, targetLanguage, sourceLanguage, dispatch]);
}
