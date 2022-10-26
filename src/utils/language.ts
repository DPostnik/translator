import { Option } from 'interfaces';
import { Languages } from 'enums/languages';

export function parseLanguagesToArray(translation: any): never[] {
  const arr: any = [];
  const entries = Object.entries(translation);
  entries.forEach(([key, value]: any) => {
    const obj = {
      label: value.name,
      value: key,
    };
    arr.push(obj);
  });
  return arr;
}

const defaultSourceLanguage: Option = {
  value: Languages.AUTO,
  label: 'Определить язык',
};

export function getSourceLanguages(languages: Option[]) {
  return [defaultSourceLanguage, ...languages];
}

export function getTargetLanguages(languages: Option[], source: string) {
  return languages.filter((language) => language.value !== source);
}

export function checkLanguageIsExist(languages: Option[], language: string) {
  return languages.some((item) => item.value === language);
}
