import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ActionTypes } from 'enums/action-types';
import { selectors, useApp } from 'store/context';

import ListPageLayout from 'components/list-page-layout';

export default function HistoryPage() {
  const navigate = useNavigate();
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

  const routeClick = (uid: string, link: string) => {
    dispatch({ type: ActionTypes.SET_SELECTED_UID, payload: uid });
    navigate(link);
  };

  return (
    <ListPageLayout
      emptyListText="Список истории переводов пуст"
      onClearList={onClearStorage}
      listSelector={selectors.getHistory}
      onUpdateIsFavourite={onUpdateIsFavourite}
      headerText="История переводов"
      onRemoveItem={onRemoveItem}
      onNavigate={routeClick}
    />
  );
}
