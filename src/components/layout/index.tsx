import classes from './layout.module.scss';
import { Outlet } from 'react-router-dom';

export default function Index() {
  return (
    <div className={classes.content__layout}>
      <Outlet />
    </div>
  );
}
