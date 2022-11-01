import { Outlet } from 'react-router-dom';

import Navigation from 'components/navigation';
import ThemeSwitcher from 'components/switcher/theme-switcher';

import classes from './layout.module.scss';

export default function Index() {
  return (
    <div className={classes.content__layout}>
      <ThemeSwitcher />
      <Outlet />
      <Navigation />
    </div>
  );
}
