import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HistoryItem from 'components/translation-item';
import { TranslationItem } from 'interfaces';
import { ActionTypes } from 'enums/action-types';
import { selectors, useApp } from 'store/context';

import classes from './history.module.scss';

export default function HistoryPage() {
  const navigate = useNavigate();
  const historyItems = useApp(selectors.getHistory);
  const { dispatch } = useApp();

  useEffect(() => {
    dispatch({ type: ActionTypes.GET_HISTORY });
  }, [dispatch]);

  const onRemoveItem = (uid: string) => {
    dispatch({ type: ActionTypes.REMOVE_ITEM_FROM_HISTORY, payload: uid });
  };

  const onClearStorage = () => {
    dispatch({ type: ActionTypes.CLEAR_HISTORY });
  };

  const onUpdateIsFavourite = (uid: string, isFavourites: boolean) => {
    dispatch({
      type: ActionTypes.UPDATE_ITEM_IN_HISTORY,
      payload: { uid, isFavourite: isFavourites },
    });
  };

  if (!historyItems.length) {
    return (
      <div className={classes.empty}>
        <h1>History is empty</h1>
      </div>
    );
  }

  const routeClick = (uid: string, link: string) => {
    dispatch({ type: ActionTypes.SET_SELECTED_UID, payload: uid });
    navigate(link);
  };

  return (
    <div className={classes.history__wrapper}>
      <button onClick={onClearStorage}>clear history</button>
      <div className={classes.history__content}>
        {historyItems?.reverse().map((item: TranslationItem) => (
          <HistoryItem
            onRouteClick={routeClick}
            onAddToFavourites={onUpdateIsFavourite}
            onRemoveItem={onRemoveItem}
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
