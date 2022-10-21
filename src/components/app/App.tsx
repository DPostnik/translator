import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import ErrorPage from 'pages/error';
import TranslatePage from 'pages/translate';
import Layout from 'components/layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/translator" />} />
            <Route path="/" element={<Layout />}>
              <Route path="translator" element={<TranslatePage />} />
              {/*<Route path="favourites" element={<FavouritesPage />} />*/}
              {/*<Route path="history" element={<HistoryPage />} />*/}
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
