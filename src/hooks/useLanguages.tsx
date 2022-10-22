import { useEffect } from 'react';
import { parseLanguagesToArray } from 'utils/parse';
import { languageApi } from 'service';
import { useApp } from 'store/context';

export default function useLanguages() {
  const { dispatch } = useApp();

  useEffect(() => {
    async function getLanguages() {
      const { data } = await languageApi.get('');
      const parsedData = parseLanguagesToArray(data.translation);

      dispatch({ type: 'setLanguages', payload: parsedData });
    }

    void getLanguages();
  }, [dispatch]);
}
