import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './reducer/auth';
import storageReducer from './reducer/storage';
import movieReducer from './reducer/movie';

import watchSagas from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  store: storageReducer,
  movie: movieReducer,
});

const persistConfig = {
  key: 'store',
  storage: AsyncStorage,
  whitelist: ['store', 'auth'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(watchSagas);

export {persistor, store};
