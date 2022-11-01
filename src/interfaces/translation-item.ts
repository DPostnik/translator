export interface TranslationItem {
  sourceLanguage: string;
  targetLanguage: string;
  sourceText: string;
  targetText: string;
  link: string;
  uid: string;
  isFavourite?: boolean;
}
