import { uid } from 'uid';

import { ROUTES } from 'constants/routes';
import { Option, TranslationItem } from 'interfaces';
import { STORAGES } from 'enums/storages';
import { findLanguageByKey, getSourceLanguages } from 'utils/language';

export function getItemByKeyFromLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

export function setTheme(value: string) {
  localStorage.setItem(STORAGES.THEME, value);
}

export function saveStorage(key: string, history: TranslationItem[]) {
  localStorage.setItem(key, JSON.stringify(history));
}

export function saveTranslationItem(key: string, item: TranslationItem) {
  const history = [...getItemByKeyFromLocalStorage(key), item];
  saveStorage(key, history);
}

export function updateTranslationField(uid: string, isFavourite: boolean) {
  const history = getItemByKeyFromLocalStorage(STORAGES.HISTORY);
  const result = history.map((item: TranslationItem) => {
    if (item.uid === uid) {
      item.isFavourite = isFavourite;
      const [sourceLanguage, targetLanguage] = item.link
        .split('?')[1]
        .split('&')
        .map((item: string) => {
          return item.slice(3);
        });
      item.link = createLink(
        sourceLanguage,
        targetLanguage,
        item.sourceText,
        isFavourite
      );
    }
    return item;
  });
  saveStorage(STORAGES.HISTORY, result);
}

export function getFavouritesTranslation() {
  return getItemByKeyFromLocalStorage(STORAGES.HISTORY).filter(
    (item: TranslationItem) => item.isFavourite
  );
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
  languages: Option[],
  isFavourite?: boolean
): TranslationItem {
  return {
    sourceLanguage:
      findLanguageByKey(getSourceLanguages(languages), sourceLanguage)?.label ||
      '',
    targetLanguage: findLanguageByKey(languages, targetLanguage)?.label || '',
    sourceText: sourceText.trim(),
    targetText,
    link: createLink(
      sourceLanguage,
      targetLanguage,
      sourceText,
      isFavourite || false
    ),
    uid: uid(8),
    isFavourite: isFavourite,
  };
}

function createLink(
  sourceLanguage: string,
  targetLanguage: string,
  text: string,
  isFavourite: boolean
) {
  return `${ROUTES.TRANSLATE}?sl=${sourceLanguage}&tl=${targetLanguage}&text=${text}&saved=${isFavourite}`;
}
