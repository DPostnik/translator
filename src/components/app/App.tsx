import React from 'react';

import Router from 'components/router';
import { AppProvider } from 'store/context';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppProvider>
          <Router />
        </AppProvider>
      </header>
    </div>
  );
}

export default App;
