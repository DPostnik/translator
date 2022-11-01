import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import Layout from 'components/layout';
import ErrorPage from 'pages/error';
import HistoryPage from 'pages/history';
import TranslatePage from 'pages/translate';
import FavouritesPage from 'pages/favourites';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={<Navigate to={ROUTES.TRANSLATE} />}
        />
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route path={ROUTES.TRANSLATE} element={<TranslatePage />} />
          <Route path={ROUTES.HISTORY} element={<HistoryPage />} />
          <Route path={ROUTES.FAVOURITE} element={<FavouritesPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
