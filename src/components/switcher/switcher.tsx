import { ReactNode } from 'react';
import classes from './switcher.module.scss';

type SwitcherProps = {
  value: boolean;
  handleSwitch: () => void;
  children?: ReactNode;
};

export default function Switcher({
  value,
  handleSwitch,
  children,
}: SwitcherProps) {
  return (
    <>
      <div className={classes.switcher__wrapper}>
        <button
          className={`${classes.switcher__button} ${
            value ? classes['switcher__button-active'] : ''
          } `}
          onClick={handleSwitch}
        >
          <div
            className={`
              ${classes.switcher__control} ${
              value ? classes['switcher__control-active'] : ''
            }`}
          >
            {children}
          </div>
        </button>
      </div>
    </>
  );
}
