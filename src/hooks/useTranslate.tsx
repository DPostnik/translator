import { useEffect } from 'react';
import { translate } from 'service';
import { ActionTypes, useApp } from 'store/context';

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
    if (!sourceText) return;

    (async function translateText() {
      const data = await translate(targetLanguage, sourceLanguage, sourceText);
      dispatch({
        type: ActionTypes.SET_TARGET_TEXT,
        payload: data,
      });
    })();
  }, [sourceText, targetLanguage, sourceLanguage, dispatch]);
}
