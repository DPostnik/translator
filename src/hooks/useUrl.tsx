import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import { ActionTypes } from 'enums/action-types';
import { selectors, useApp } from 'store/context';
import { checkLanguageIsExist, getSourceLanguages } from 'utils/language';

export default function useUrl() {
  const languagesDownloaded = useRef(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const { dispatch } = useApp();
  const { sourceLanguage, targetLanguage, sourceText, languages } = useApp(
    selectors.getTranslateState
  );

  useEffect(() => {
    if (!languages.length) return;
    languagesDownloaded.current = true;
    const sl = searchParams.get('sl');
    const tl = searchParams.get('tl');
    const text = searchParams.get('text');
    if (sl && tl) {
      if (checkLanguageIsExist(getSourceLanguages(languages), sl)) {
        dispatch({
          type: ActionTypes.SET_SOURCE_LANGUAGE,
          payload: sl,
        });
      }
      if (checkLanguageIsExist(languages, tl)) {
        dispatch({
          type: ActionTypes.SET_TARGET_LANGUAGE,
          payload: tl,
        });
      }
      dispatch({
        type: ActionTypes.SET_SOURCE_TEXT,
        payload: text,
      });
      return;
    }

    setSearchParams({
      sl: sourceLanguage,
      tl: targetLanguage,
      text: sourceText,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languages]);

  useEffect(() => {
    if (!languagesDownloaded.current) return;

    setSearchParams({
      sl: sourceLanguage,
      tl: targetLanguage,
      text: sourceText,
    });
  }, [sourceLanguage, targetLanguage, sourceText, setSearchParams]);
}
