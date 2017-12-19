import {createStore,applyMiddleware,compose} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import history from './history'
let router=routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = composeEnhancers(applyMiddleware(router,thunk,promise,logger))(createStore)(reducers);
window.store=store;
export default store
