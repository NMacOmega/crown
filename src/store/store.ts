import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import { loggerMiddleWare } from "./middleware/logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

import logger from "redux-logger";

export type RootState = ReturnType<typeof rootReducer>


//MUCH Prettier third party option to the logger middleware we coded below

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[] // This extended config takes PersistConfig (We download from Redux Persist) and adds on a rule that you can only put in string values that match the possible values already in the Root reducer
}

const persistentConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ['cart']
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistentConfig, rootReducer);

//Only run when we are in development
//const middleWares = [loggerMiddleWare];
const middleWares = [
  process.env.NODE_ENV !== "production" && logger, 
  sagaMiddleware, // thunk,  ←- Do not use Saga and Thunk at the same time.
].filter((middleware): middleware is Middleware => Boolean(middleware));
//This is further Typescript Narrowing to assure that whatever is assessed by this filter will return either a middleware or nothing

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
