import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import { AuthProvider } from './providers/auth-provider/auth-provider';
import { OffscreenProvider, ModalProvider } from './providers';
import store from './redux/store';
import App from './App';
import './assets/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <HelmetProvider>
      <Provider store={store}>
        <ModalProvider>
          <OffscreenProvider>
            <App />
          </OffscreenProvider>
        </ModalProvider>
      </Provider>
    </HelmetProvider>
  </Router>  
);