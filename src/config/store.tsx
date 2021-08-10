import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../containers/rootReducer';
import rootSaga from '../containers/rootSaga';

export default function createStoreWithMiddleware() {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const enhancers = compose(
        applyMiddleware(...middleware)
    );
    const store = createStore(rootReducer, enhancers);
    sagaMiddleware.run(rootSaga);
    return store;
}