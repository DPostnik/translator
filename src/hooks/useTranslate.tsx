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
  isFavourite?: boolean;
};

export default function useTranslate({
  sourceText,
  sourceLanguage,
  targetLanguage,
  isFavourite,
}: TranslateProps) {
  const { dispatch } = useApp();
  const languages = useApp(selectors.getLanguages);
  const selectedUID = useApp(selectors.getSelectedUID);

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

      if (!selectedUID) {
        dispatch({
          type: ActionTypes.ADD_ITEM_TO_HISTORY,
          payload: createTranslationItem(
            sourceLanguage,
            targetLanguage,
            sourceText,
            data,
            languages,
            isFavourite
          ),
        });
      }

      dispatch({
        type: ActionTypes.SET_TARGET_TEXT,
        payload: data,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceText, targetLanguage, sourceLanguage, isFavourite, dispatch]);
}
