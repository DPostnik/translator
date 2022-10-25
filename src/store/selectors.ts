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

export const getTranslateState = (context: InitialStateType) => {
  return {
    sourceText: context.sourceText,
    targetText: context.targetText,
    sourceLanguage: context.sourceLanguage,
    targetLanguage: context.targetLanguage,
    languages: context.languages,
  };
};
