import { useRef } from 'react';

type Props = {
  handleChange?: (text: string) => void;
  value: string;
  rows: number;
};

export default function TextField({ handleChange, value, rows }: Props) {
  const textRef = useRef<any>(null);

  const onChange = () => {
    if (handleChange) {
      handleChange(textRef?.current?.value);
    }
  };

  const disabled = !handleChange;

  return (
    <textarea
      rows={rows}
      ref={textRef}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
