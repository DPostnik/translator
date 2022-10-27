import { uid } from 'uid';

import { Option, TranslationItem } from 'interfaces';
import { findLanguageByKey, getSourceLanguages } from 'utils/language';

export function getItemByKeyFromLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

export function saveStorage(key: string, history: TranslationItem[]) {
  localStorage.setItem(key, JSON.stringify(history));
}

export function saveTranslationItem(key: string, item: TranslationItem) {
  const history = [...getItemByKeyFromLocalStorage(key), item];
  saveStorage(key, history);
}

export function clearStorageByKey(key: string) {
  localStorage.removeItem(key);
}

export function removeItemByUID(key: string, uid: string) {
  const history = getItemByKeyFromLocalStorage(key).filter(
    (item: TranslationItem) => item.uid !== uid
  );
  saveStorage(key, history);
}

export function createTranslationItem(
  sourceLanguage: string,
  targetLanguage: string,
  sourceText: string,
  targetText: string,
  languages: Option[]
): TranslationItem {
  return {
    sourceLanguage: findLanguageByKey(
      getSourceLanguages(languages),
      sourceLanguage
    )?.label,
    targetLanguage: findLanguageByKey(languages, targetLanguage)?.label,
    sourceText: sourceText.trim(),
    targetText,
    link: `/translate?sl=${sourceLanguage}&tl=${targetLanguage}&text=${sourceText}`,
    uid: uid(8),
  };
}
