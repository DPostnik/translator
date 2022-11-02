import { useCallback } from 'react';

import { useApp, selectors } from 'store/context';
import { Theme } from 'enums/theme';
import { ActionTypes } from 'enums/action-types';
import Switcher from './switcher';

import MoonIcon from 'icons/moon-icon';
import SunIcon from 'icons/sun-icon';

export default function ThemeSwitcher() {
  const { dispatch } = useApp();
  const theme = useApp(selectors.getTheme);

  const isLight = theme === Theme.LIGHT;

  const handleSwitchTheme = useCallback(() => {
    dispatch({
      type: ActionTypes.SET_THEME,
      payload: isLight ? Theme.DARK : Theme.LIGHT,
    });
  }, [dispatch, isLight]);

  return (
    <Switcher handleSwitch={handleSwitchTheme} value={isLight}>
      {isLight ? <SunIcon /> : <MoonIcon />}
    </Switcher>
  );
}
