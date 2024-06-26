import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider } from '@mantine/core';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
