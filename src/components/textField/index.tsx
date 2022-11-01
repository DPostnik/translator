import { ReactNode, useRef } from 'react';

import classes from './textField.module.scss';
import Loader from 'components/loader';

type Props = {
  handleChange?: (text: string) => void;
  value: string;
  loader?: {
    loading: boolean;
  } | null;
  children?: ReactNode;
};

export default function TextField({
  handleChange,
  value,
  children,
  loader = null,
}: Props) {
  const textRef = useRef<any>(null);

  const onChange = () => {
    if (handleChange) {
      handleChange(textRef?.current?.value);
    }
  };

  const disabled = !handleChange;

  return (
    <div className={classes.textField__wrapper}>
      {loader?.loading ? (
        <Loader />
      ) : (
        <div className={classes.textField_new}>
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
      )}
    </div>
  );
}
