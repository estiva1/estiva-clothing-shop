import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
//import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";

import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducer";
// import { loggerMiddleware } from "./middleware/logger";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
  //blackList: ["user"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean); //or loggerMiddleware

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
