import {createBrowserHistory} from 'history';
import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore} from 'redux-persist';
import {routerMiddleware} from 'connected-react-router';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import createRootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), ...middlewares))
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
