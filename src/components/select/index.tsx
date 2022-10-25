import { useRef } from 'react';

import { Option } from 'interfaces';

import classes from './select.module.scss';

type Props = {
  options: Option[];
  value: string | null;
  onChange: (name: string, value: string) => void;
  name: string;
};

export default function Select({ options, value, onChange, name }: Props) {
  const selectRef = useRef<any>(null);

  const onChangeSelect = (event: any) => {
    onChange(name, event.target.value);
  };

  return (
    <select
      ref={selectRef}
      value={value || undefined}
      onChange={onChangeSelect}
      className={classes.select__control}
    >
      {options?.map((option: any) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}
