import './app.css';

import React from 'react';
import { IntlProvider } from 'react-intl';

import messagesFr from './lib/i18n/fr';
import Routes from './Routes';

function App() {
  return (
    <div className="app">
      <IntlProvider locale="fr" messages={messagesFr}>
        {Routes}
      </IntlProvider>
    </div>
  );
}

export default App;
