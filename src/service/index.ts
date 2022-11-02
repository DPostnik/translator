import axios from 'axios';

const headers = {
  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
  'Content-Type': 'application/json',
};

const baseParams = { 'api-version': '3.0', scope: ['translation'] };

const languageApi = axios.create({
  timeout: 10000,
  headers,
  baseURL: `${process.env.REACT_APP_MICROSOFT_API_HOST}/languages`,
  params: baseParams,
});

export { languageApi };

const axiosInstance = axios.create({
  timeout: 10000,
  headers,
  baseURL: process.env.REACT_APP_RAPID_API_HOST,
  params: { 'api-version': '3.0', scope: ['translation'] },
});

export const translate = (to: string, text: string, from: string) => {
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

export const detectLanguage = (text: string) => {
  return axiosInstance
    .post('Detect', [{ Text: text }], {
      params: baseParams,
    })
    .then((res: any) => {
      return res.data[0];
    });
};
