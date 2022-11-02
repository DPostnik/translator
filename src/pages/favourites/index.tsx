import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ActionTypes } from 'enums/action-types';
import { selectors, useApp } from 'store/context';
import ListPageLayout from 'components/list-page-layout';

export default function FavouritesPage() {
  const navigate = useNavigate();
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

  return (
    <ListPageLayout
      emptyListText="Список избранных переводов пуст"
      listSelector={selectors.getFavourites}
      onUpdateIsFavourite={onUpdateIsFavourite}
      headerText="Избранные переводы"
      onNavigate={routeClick}
    />
  );
}
