import { createStore,compose,applyMiddleware } from "redux";
import Root from "./Combine";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "User",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Root);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers();

export let Store = createStore(persistedReducer, enhancer);

export let persistor = persistStore(Store);
