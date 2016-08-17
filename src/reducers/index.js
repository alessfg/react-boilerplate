// Combine reducers
import { combineReducers } from 'redux';
// Ensures new navigations events are synched with the store
import { routerReducer } from 'react-router-redux';

// Combine reducers
const rootReducer = combineReducers({
  routing: routerReducer,
});

// Export root reducer
export default rootReducer;
