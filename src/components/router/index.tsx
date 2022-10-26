import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from 'components/layout';
import ErrorPage from 'pages/error';
import HistoryPage from 'pages/history';
import TranslatePage from 'pages/translate';
import React from 'react';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/translator" />} />
        <Route path="/" element={<Layout />}>
          <Route path="translator" element={<TranslatePage />} />
          <Route path="history" element={<HistoryPage />} />
          {/*<Route path="favourites" element={<FavouritesPage />} />*/}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
