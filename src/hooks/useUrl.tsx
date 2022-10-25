import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import { ActionTypes, selectors, useApp } from 'store/context';
import { checkLanguageIsExist } from 'utils/language';

export default function useUrl() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { dispatch } = useApp();
  const { sourceLanguage, targetLanguage, sourceText, languages } = useApp(
    selectors.getTranslateState
  );

  useEffect(() => {
    const sl = searchParams.get('sl');
    const tl = searchParams.get('tl');
    const text = searchParams.get('text');
    if (sl && tl) {
      if (checkLanguageIsExist(languages, sl)) {
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

    const params = new URLSearchParams({
      sl: sourceLanguage,
      tl: targetLanguage,
      text: sourceText,
    });
    navigate(`?${params}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSearchParams({
      sl: sourceLanguage,
      tl: targetLanguage,
      text: sourceText,
    });
  }, [sourceLanguage, targetLanguage, sourceText, setSearchParams]);
}
