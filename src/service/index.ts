import axios from 'axios';

const headers = {
  'X-RapidAPI-Key': '14bad7261amsh871acc12830dcc0p143ae5jsnb0bd1b6dcc96',
  'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
  'Content-Type': 'application/json',
};

const baseParams = { 'api-version': '3.0', scope: ['translation'] };

const languageApi = axios.create({
  timeout: 10000,
  headers,
  baseURL: 'https://api.cognitive.microsofttranslator.com/languages',
  params: { 'api-version': '3.0', scope: ['translation'] },
});

export { languageApi };

const axiosInstance = axios.create({
  timeout: 10000,
  headers,
  baseURL: 'https://microsoft-translator-text.p.rapidapi.com',
  params: { 'api-version': '3.0', scope: ['translation'] },
});
export const translate = (to: string, from: string, text: string) => {
  return axiosInstance
    .post('translate', [{ Text: text }], {
      params: {
        ...baseParams,
        'to[0]': to,
        from,
      },
    })
    .then((res: any) => {
      return res?.data?.[0]?.translations?.[0]?.text;
    });
};
