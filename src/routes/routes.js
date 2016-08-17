// React
import React from 'react';
// Routes for react router
import { Route, IndexRoute } from 'react-router';
// App wrapper component
import App from '../components/App';
// HomePage component
import HomePage from '../components/HomePage';

// Create the routes for the application
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);
