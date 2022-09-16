import { createStore } from "redux";
import Root from "./Combine";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "User",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Root);

export let Store = createStore(persistedReducer);

export let persistor = persistStore(Store);