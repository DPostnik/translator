import { AppContext } from 'store/context';

export const getLanguages = (context: AppContext) => {
  return context.languages;
};
