// Saga middleware creator
import createSagaMiddleware from 'redux-saga';
// Methods required to create a store
import { applyMiddleware, compose, createStore } from 'redux';
// Root reducer for store
import rootReducer from '../reducers';
// Root saga for store
import rootSaga from '../sagas';

// Function that creates new store that is then passed onto provider
export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware)
    )
  );
  // Start sagas in the background
  sagaMiddleware.run(rootSaga);
  return store;
}
