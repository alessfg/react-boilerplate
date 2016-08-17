// Polyfill to support new ES6 functions
import 'babel-polyfill';
// React
import React from 'react';
// React DOM renderer
import ReactDOM from 'react-dom';
// Container to enable hot reloading
import { AppContainer } from 'react-hot-loader';
// React router browser history for use with react hot loader
import { browserHistory } from 'react-router';
// Allows synchronising nagivation events with the store
import { syncHistoryWithStore } from 'react-router-redux';
// Store configuration
import configureStore from './store/configureStore';
// Root application manager
import Root from './containers/Root';

// Create store
const store = configureStore();
// Create enhanced history that synchronises navigation events with store
const history = syncHistoryWithStore(browserHistory, store);

// Render hot reloading app container
ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

// Rerender components if a change is detected
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require, import/newline-after-import
    const NewRoot = require('./containers/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
    document.getElementById('root')
    );
  });
}
