import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HistoryItem from 'components/translation-item';
import { ActionTypes } from 'enums/action-types';
import { selectors, useApp } from 'store/context';

import classes from './favourites.module.scss';

export default function FavouritesPage() {
  const navigate = useNavigate();
  const favouritesItems = useApp(selectors.getFavourites);
  const { dispatch } = useApp();

  useEffect(() => {
    dispatch({ type: ActionTypes.GET_FAVOURITES });
  }, [dispatch]);

  const onUpdateIsFavourite = (uid: string, isFavourites: boolean) => {
    dispatch({
      type: ActionTypes.UPDATE_ITEM_IN_HISTORY,
      payload: { uid, isFavourite: isFavourites },
    });
  };

  const routeClick = (uid: string, link: string) => {
    dispatch({ type: ActionTypes.SET_SELECTED_UID, payload: uid });
    navigate(link);
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
        {favouritesItems?.reverse().map((item: any) => (
          <HistoryItem
            onRouteClick={routeClick}
            onAddToFavourites={onUpdateIsFavourite}
            key={item.uid}
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
