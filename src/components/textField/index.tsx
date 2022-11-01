import { ReactNode, useRef } from 'react';

import classes from './textField.module.scss';

type Props = {
  handleChange?: (text: string) => void;
  value: string;
  rows: number;
  children?: ReactNode;
};

export default function TextField({ handleChange, value, children }: Props) {
  const textRef = useRef<any>(null);

  const onChange = () => {
    if (handleChange) {
      handleChange(textRef?.current?.value);
    }
  };

  const disabled = !handleChange;

  return (
    <div className={classes.textField__wrapper}>
      <input
        ref={textRef}
        className={classes.textField__input}
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <div className={classes.textField__icons}>{children}</div>
    </div>
  );
}
