import { Outlet } from 'react-router-dom';

import Navigation from 'components/navigation';
import ThemeSwitcher from 'components/switcher/theme-switcher';
import { Theme } from 'enums/theme';
import { selectors, useApp } from 'store/context';

import colors from 'styles/utils/colors.module.scss';
import classes from './layout.module.scss';
import { useEffect } from 'react';
import { ActionTypes } from 'enums/action-types';

export default function Index() {
  const theme = useApp(selectors.getTheme);
  const { dispatch } = useApp();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    dispatch({
      type: ActionTypes.SET_THEME,
      payload: theme ? theme : Theme.LIGHT,
    });
  }, [dispatch]);

  return (
    <div
      className={`${classes.content__layout} ${
        theme === Theme.LIGHT ? colors.light : colors.dark
      }`}
    >
      <ThemeSwitcher />
      <Outlet />
      <Navigation />
    </div>
  );
}
