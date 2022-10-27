import { Link } from 'react-router-dom';

import { TranslationItem } from 'interfaces';

import classes from './translation-item.module.scss';
import RemoveIcon from 'assets/icons/remove.svg';

export default function TranslationItemComponent({
  sourceLanguage,
  sourceText,
  targetLanguage,
  targetText,
  link,
  uid,
  onRemoveItem,
}: TranslationItem & { onRemoveItem: (uid: string) => void }) {
  const onRemove = () => {
    onRemoveItem(uid);
  };

  return (
    <li className={classes.item__wrapper}>
      <img
        className={classes.item__image}
        src={RemoveIcon}
        alt="close"
        width={25}
        height={25}
        onClick={onRemove}
      />
      <Link to={link}>
        <div className={classes.item__content}>
          <span className={classes.item__languages}>
            {sourceLanguage} &rarr; {targetLanguage}
          </span>
          <span>{sourceText}</span>
          <span className={classes['item__target-text']}>{targetText}</span>
        </div>
      </Link>
    </li>
  );
}

// todo truncate
