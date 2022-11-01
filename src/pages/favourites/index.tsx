import { useEffect } from 'react';

import HistoryItem from 'components/translation-item';
import { selectors, useApp } from 'store/context';
import { ActionTypes } from 'enums/action-types';
import classes from 'pages/history/history.module.scss';

export default function FavouritesPage() {
  const favouritesItems = useApp(selectors.getFavourites);
  const { dispatch } = useApp();

  useEffect(() => {
    dispatch({ type: ActionTypes.GET_FAVOURITES });
  }, [dispatch]);

  const onRemoveItem = (uid: string, isFavourites: boolean) => {
    dispatch({
      type: ActionTypes.UPDATE_ITEM_IN_HISTORY,
      payload: { uid, isFavourite: isFavourites },
    });
  };

  if (!favouritesItems.length) {
    return (
      <div>
        <h1>Favourites is empty</h1>
      </div>
    );
  }

  return (
    <div className={classes.history__wrapper}>
      <div className={classes.history__content}>
        {favouritesItems?.reverse().map((item: any, index: number) => (
          <HistoryItem
            onAddToFavourites={onRemoveItem}
            key={index}
            sourceLanguage={item.sourceLanguage}
            targetLanguage={item.targetLanguage}
            sourceText={item.sourceText}
            targetText={item.targetText}
            link={item.link}
            uid={item.uid}
            isFavourite={item.isFavourite}
          />
        ))}
      </div>
    </div>
  );
}
