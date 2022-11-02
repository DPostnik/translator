import { createContext, Dispatch, useContext, useReducer } from 'react';

import { Option, TranslationItem } from 'interfaces';
import { ActionTypes } from 'enums/action-types';
import { Languages } from 'enums/languages';
import { STORAGES } from 'enums/storages';
import {
  getFavourites,
  getHistory,
  getIsFavourite,
  getIsLoading,
  getLanguages,
  getSelectedUID,
  getSourceLanguage,
  getSourceText,
  getTargetLanguage,
  getTargetText,
  getTheme,
  getTranslateState,
} from 'store/selectors';
import {
  clearStorageByKey,
  getFavouritesTranslation,
  getItemByKeyFromLocalStorage,
  removeItemByUID,
  saveTranslationItem,
  updateTranslationField,
} from 'utils/history';
import { Theme } from 'enums/theme';

export interface InitialStateType {
  theme: Theme;
  sourceText: string;
  sourceLanguage: string;
  targetLanguage: string;
  targetText: string;
  isFavourite: boolean;
  languages: Option[];
  history: TranslationItem[];
  favourites: TranslationItem[];
  selectedUID: string;
  isLoading: boolean;
}

const initialValue: InitialStateType = {
  sourceText: '',
  sourceLanguage: Languages.RUSSIAN,
  targetLanguage: Languages.ENGLISH,
  targetText: '',
  isFavourite: false,
  languages: [],
  history: [],
  favourites: [],
  selectedUID: '',
  isLoading: false,
  theme: Theme.LIGHT,
};

const appContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<{ type: ActionTypes; payload: any }>;
}>({ state: initialValue, dispatch: () => null });

function appReducer(
  state: InitialStateType,
  action: { payload: any; type: ActionTypes }
) {
  switch (action.type) {
    case ActionTypes.SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case ActionTypes.SET_SOURCE_LANGUAGE: {
      return {
        ...state,
        sourceLanguage: action.payload,
      };
    }
    case ActionTypes.SET_TARGET_LANGUAGE: {
      return {
        ...state,
        targetLanguage: action.payload,
      };
    }
    case ActionTypes.SET_SOURCE_TEXT: {
      return {
        ...state,
        sourceText: action.payload,
      };
    }
    case ActionTypes.SET_TARGET_TEXT: {
      return {
        ...state,
        targetText: action.payload,
      };
    }
    case ActionTypes.SET_IS_FAVOURITE: {
      return {
        ...state,
        isFavourite: action.payload,
      };
    }
    case ActionTypes.SET_LANGUAGES: {
      return {
        ...state,
        languages: action.payload,
      };
    }
    case ActionTypes.EXCHANGE_LANGUAGES: {
      return {
        ...state,
        sourceLanguage: state.targetLanguage,
        targetLanguage: state.sourceLanguage,
        sourceText: state.targetText,
      };
    }
    case ActionTypes.SET_SELECTED_UID: {
      return {
        ...state,
        selectedUID: action.payload,
      };
    }
    case ActionTypes.GET_HISTORY: {
      return {
        ...state,
        history: getItemByKeyFromLocalStorage(STORAGES.HISTORY),
      };
    }
    case ActionTypes.ADD_ITEM_TO_HISTORY: {
      saveTranslationItem(STORAGES.HISTORY, action.payload);
      return {
        ...state,
        history: getItemByKeyFromLocalStorage(STORAGES.HISTORY),
      };
    }
    case ActionTypes.REMOVE_ITEM_FROM_HISTORY: {
      removeItemByUID(STORAGES.HISTORY, action.payload);
      return {
        ...state,
        history: getItemByKeyFromLocalStorage(STORAGES.HISTORY),
      };
    }
    case ActionTypes.CLEAR_HISTORY: {
      clearStorageByKey(STORAGES.HISTORY);
      return {
        ...state,
        history: [],
      };
    }
    case ActionTypes.GET_FAVOURITES: {
      const favourites = getFavouritesTranslation();
      return {
        ...state,
        favourites,
      };
    }
    case ActionTypes.UPDATE_ITEM_IN_HISTORY: {
      updateTranslationField(action.payload.uid, action.payload.isFavourite);
      const favourites = getFavouritesTranslation();
      const history = getItemByKeyFromLocalStorage(STORAGES.HISTORY);
      return {
        ...state,
        favourites,
        history,
      };
    }
    case ActionTypes.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
}

function AppProvider({ children }: any) {
  const [state, dispatch] = useReducer(appReducer, initialValue);
  const value = { state, dispatch };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

function useApp(selector?: (context: InitialStateType) => any) {
  const context = useContext(appContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider');
  }
  return selector ? selector(context.state) : context;
}

const selectors = {
  getLanguages,
  getSourceText,
  getTargetText,
  getSourceLanguage,
  getTargetLanguage,
  getTranslateState,
  getIsFavourite,
  getFavourites,
  getHistory,
  getSelectedUID,
  getIsLoading,
  getTheme,
};

export { AppProvider, useApp, selectors };
