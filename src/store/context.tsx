import { createContext, Dispatch, useContext, useReducer } from 'react';

import { Option } from 'interfaces/option';
import { ActionTypes } from 'enums/action-types';
import { Languages } from 'enums/languages';
import {
  getLanguages,
  getSourceLanguage,
  getSourceText,
  getTargetLanguage,
  getTargetText,
  getTranslateState,
} from 'store/selectors';

export interface InitialStateType {
  sourceText: string;
  sourceLanguage: string;
  targetLanguage: string;
  targetText: string;
  languages: Option[];
  error: string;
}

const initialValue: InitialStateType = {
  sourceText: '',
  sourceLanguage: Languages.RUSSIAN,
  targetLanguage: Languages.ENGLISH,
  targetText: '',
  languages: [],
  error: '',
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
    case ActionTypes.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
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
};

export { AppProvider, useApp, selectors };
