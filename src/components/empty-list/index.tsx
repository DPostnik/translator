import classes from './empty-list.module.scss';

type Props = {
  text: string;
};

export default function EmptyList({ text }: Props) {
  return (
    <div className={classes.error__message}>
      <h1>{text}</h1>
    </div>
  );
}
