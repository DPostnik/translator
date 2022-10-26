import { useEffect } from 'react';

import { ActionTypes } from 'enums/action-types';
import { languageApi } from 'service';
import { useApp } from 'store/context';
import { parseLanguagesToArray } from 'utils/language';

export default function useLanguages() {
  const { dispatch } = useApp();

  useEffect(() => {
    async function getLanguages() {
      const { data } = await languageApi.get('');
      const parsedData = parseLanguagesToArray(data.translation);

      dispatch({ type: ActionTypes.SET_LANGUAGES, payload: parsedData });
    }

    void getLanguages();
  }, [dispatch]);
}
