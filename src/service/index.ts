import axios from 'axios';

const headers = {
  'X-RapidAPI-Key': '14bad7261amsh871acc12830dcc0p143ae5jsnb0bd1b6dcc96',
  'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
  'Content-Type': 'application/json',
};

const languageApi = axios.create({
  timeout: 10000,
  headers,
  baseURL: 'https://api.cognitive.microsofttranslator.com/languages',
  params: { 'api-version': '3.0', scope: ['translation'] },
});

export { languageApi };
