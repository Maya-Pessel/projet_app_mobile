import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore } from "redux";

import AppReducer from "../reducers";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
};

const persistedAppReducers = persistReducer(persistConfig, AppReducer);

export const store = createStore(persistedAppReducers);
export const persistor = persistStore(store);
