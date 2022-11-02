import { TranslationItem } from 'interfaces';
import { Colors } from 'enums/colors';
import { truncate } from 'utils/truncate';

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
  const onRemove = (e: MouseEvent) => {
    e.stopPropagation();
    onRemoveItem && onRemoveItem(uid);
  };

  const onAddToFavouritesHandler = (e: MouseEvent) => {
    e.stopPropagation();
    onAddToFavourites(uid, !isFavourite);
  };

  const routeClick = () => {
    onRouteClick && onRouteClick(uid, link);
  };

  return (
    <li className={classes.item__wrapper} onClick={routeClick}>
      <div className={classes.item__image}>
        <EmptyStarIcon
          fill={isFavourite ? Colors.ORANGE : Colors.LIGHT_GRAY}
          onClick={onAddToFavouritesHandler}
          className={classes.icon}
        />
        {onRemoveItem && (
          <RemoveIcon className={classes.icon} onClick={onRemove} />
        )}
      </div>
      <div>
        <div className={classes.item__content}>
          <span className={classes.item__languages}>
            {sourceLanguage} &rarr; {targetLanguage}
          </span>
          <span>{truncate(sourceText, 40)}</span>
          <span className={classes['item__target-text']}>
            {truncate(targetText, 40)}
          </span>
        </div>
      </div>
    </li>
  );
}
