import { InitialStateType } from 'store/context';

export const getLanguages = (context: InitialStateType) => {
  return context.languages;
};

export const getSourceText = (context: InitialStateType) => {
  return context.sourceText;
};

export const getTargetText = (context: InitialStateType) => {
  return context.targetText;
};

export const getSourceLanguage = (context: InitialStateType) => {
  return context.sourceLanguage;
};

export const getTargetLanguage = (context: InitialStateType) => {
  return context.targetLanguage;
};

export const getIsFavourite = (context: InitialStateType) => {
  return context.isFavourite;
};

export const getFavourites = (context: InitialStateType) => {
  return context.favourites;
};

export const getHistory = (context: InitialStateType) => {
  return context.history;
};

export const getSelectedUID = (context: InitialStateType) => {
  return context.selectedUID;
};

export const getTranslateState = (context: InitialStateType) => {
  return {
    sourceText: context.sourceText,
    targetText: context.targetText,
    sourceLanguage: context.sourceLanguage,
    targetLanguage: context.targetLanguage,
    languages: context.languages,
  };
};
