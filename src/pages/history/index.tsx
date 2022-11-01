import { useEffect } from 'react';

import HistoryItem from 'components/translation-item';
import { useApp } from 'store/context';
import { ActionTypes } from 'enums/action-types';

import classes from './history.module.scss';

export default function HistoryPage() {
  const historyItems = useApp((state) => state.history);
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

  return (
    <div className={classes.history__wrapper}>
      <button onClick={onClearStorage}>clear history</button>
      <div className={classes.history__content}>
        {historyItems?.reverse().map((item: any, index: number) => (
          <HistoryItem
            onAddToFavourites={onUpdateIsFavourite}
            onRemoveItem={onRemoveItem}
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
