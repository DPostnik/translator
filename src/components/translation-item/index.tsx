import { Link } from 'react-router-dom';

import classes from './translation-item.module.scss';

type Props = {
  sourceLanguage: string;
  targetLanguage: string;
  sourceText: string;
  targetText: string;
  link: string;
};

export default function TranslationItem({
  sourceLanguage,
  sourceText,
  targetLanguage,
  targetText,
  link,
}: Props) {
  return (
    <li className={classes.item__wrapper}>
      <Link to={link}>
        <span className={classes.item__languages}>
          {sourceLanguage} &rarr; {targetLanguage}
        </span>
        <span>{sourceText}</span>
        <span className={classes['item__target-text']}>{targetText}</span>
      </Link>
    </li>
  );
}

// todo truncate
