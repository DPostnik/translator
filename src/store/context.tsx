import { createContext, useContext, useReducer } from 'react';
import { getLanguages } from 'store/selectors';

export interface AppContext {
  sourceText: string;
  sourceLanguage: string;
  targetLanguage: string;
  targetText: string;
  languages: { label: string; value: string }[];
}

const initialValue: AppContext = {
  sourceText: '',
  sourceLanguage: '',
  targetLanguage: '',
  targetText: '',
  languages: [],
};

const appContext = createContext<AppContext>(initialValue);

function appReducer(state: AppContext, action: any) {
  switch (action.type) {
    case 'setSourceLanguage': {
      return {
        ...state,
        sourceLanguage: action.payload,
      };
    }
    case 'setTargetLanguage': {
      return {
        ...state,
        targetLanguage: action.payload,
      };
    }
    case 'setSourceText': {
      return {
        ...state,
        sourceText: action.payload,
      };
    }
    case 'setTargetText': {
      return {
        ...state,
        targetText: action.payload,
      };
    }
    case 'setLanguages': {
      return {
        ...state,
        languages: action.payload,
      };
    }
    default:
      return state;
  }
}

function AppProvider({ children }: any) {
  const [state, dispatch] = useReducer(appReducer, initialValue);

  const value = { ...state, dispatch };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

function useApp(selector?: (context: AppContext) => any) {
  const context = useContext(appContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider');
  }
  return selector ? selector(context) : context;
}

const selectors = {
  getLanguages,
};

export { AppProvider, useApp, selectors };
