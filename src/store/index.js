import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "./reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  // eslint-disable-next-line prettier/prettier
  applyMiddleware(promiseMiddleware, logger)
);
const persistor = persistStore(store);

export default { store, persistor };
