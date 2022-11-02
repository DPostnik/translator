import { TranslationItem } from 'interfaces';
import { Colors } from 'enums/colors';

import classes from './translation-item.module.scss';
import EmptyStarIcon from 'icons/empty-star-icon';
import RemoveIcon from 'icons/remove-icon';

export default function TranslationItemComponent({
  sourceLanguage,
  sourceText,
  targetLanguage,
  targetText,
  link,
  uid,
  isFavourite,
  onRemoveItem,
  onAddToFavourites,
  onRouteClick,
}: TranslationItem & {
  onRemoveItem?: (uid: string) => void;
  onRouteClick?: (uid: string, link: string) => void;
  onAddToFavourites: (uid: string, isFavourite: boolean) => void;
}) {
  const onRemove = () => {
    onRemoveItem && onRemoveItem(uid);
  };

  const onAddToFavouritesHandler = () => {
    onAddToFavourites(uid, !isFavourite);
  };

  const routeClick = () => {
    onRouteClick && onRouteClick(uid, link);
  };

  return (
    <li className={classes.item__wrapper}>
      <div className={classes.item__image}>
        <EmptyStarIcon
          fill={isFavourite ? Colors.ORANGE : Colors.WHITE}
          onClick={onAddToFavouritesHandler}
          className={classes.icon}
        />
        {onRemoveItem && <RemoveIcon className={classes.icon} onClick={onRemove} />}
      </div>
      <div onClick={routeClick}>
        <div className={classes.item__content}>
          <span className={classes.item__languages}>
            {sourceLanguage} &rarr; {targetLanguage}
          </span>
          <span>{sourceText}</span>
          <span className={classes['item__target-text']}>{targetText}</span>
        </div>
      </div>
    </li>
  );
}

// todo truncate
