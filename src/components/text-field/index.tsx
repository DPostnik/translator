import { ReactNode, useRef } from 'react';

import SkeletonLoader from 'components/loader/skeleton-loader';
import useAutosizeTextArea from 'hooks/useAutosizeTextArea';
import { classnames } from 'utils/classnames';

import classes from './text-field.module.scss';

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

  useAutosizeTextArea(textRef.current, value);

  const onChange = () => {
    if (handleChange) {
      handleChange(textRef?.current?.value);
    }
  };

  const disabled = !handleChange;

  return (
    <div className={classes.textField__wrapper}>
      <div
        className={classnames(
          classes.textField_new,
          loader?.loading && classes.textField__loading
        )}
      >
        <textarea
          ref={textRef}
          className={classes.textField__input}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        <div className={classes.textField__icons}>{children}</div>
      </div>
      {loader?.loading && (
        <div className={classes.loader__wrapper}>
          <SkeletonLoader />
        </div>
      )}
    </div>
  );
}
