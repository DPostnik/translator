import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

import { navigationLinks } from 'constants/navigationLinks';

import classes from './navigation.module.scss';

export default function Navigation() {
  return (
    <ul className={classes.navigation__wrapper}>
      {navigationLinks.map((link) => (
        <NavigationLink
          iconPath={link.iconPath}
          label={link.label}
          to={link.to}
          key={link.label}
        />
      ))}
    </ul>
  );
}
type NavigationLinkProps = {
  iconPath: ReactNode;
  label: string;
  to: string;
};

function NavigationLink({ to, label, iconPath }: NavigationLinkProps) {
  return (
    <Link to={to}>
      <li className={classes.link__wrapper}>
        <button className={classes.link__button}>{iconPath}</button>
        <span className={classes.link__text}>{label}</span>
      </li>
    </Link>
  );
}
