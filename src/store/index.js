/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';

/*
 * Local import
 */
// Reducer
import reducer from 'src/store/reducer';

const appliedMiddlewares = (applyMiddleware(promise));

/*
 * Code
 */
const devTools = [];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(appliedMiddlewares);

// createStore
const store = createStore(reducer, enhancers);
/*
 * Export
 */
export default store;
