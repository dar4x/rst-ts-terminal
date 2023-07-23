import React, { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

import './i18n';
import { Provider } from 'react-redux';
import store from './store/store';

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store} >
            <App/>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
