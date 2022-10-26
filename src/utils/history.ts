import { Option, TranslationItem } from 'interfaces';
import { findLanguageByKey } from 'utils/language';

export function getItemByKeyFromLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

function saveHistory(history: any[]) {
  localStorage.setItem('history', JSON.stringify(history));
}

export function saveTranslationItem(key: string, item: TranslationItem) {
  const history = [...getItemByKeyFromLocalStorage(key), item];
  saveHistory(history);
}

export function createTranslationItem(
  sourceLanguage: string,
  targetLanguage: string,
  sourceText: string,
  targetText: string,
  languages: Option[]
): TranslationItem {
  return {
    sourceLanguage: findLanguageByKey(languages, sourceLanguage)?.label,
    targetLanguage: findLanguageByKey(languages, targetLanguage)?.label,
    sourceText,
    targetText,
    link: `/translator?sl=${sourceLanguage}&tl=${targetLanguage}&text=${sourceText}`,
  };
}
