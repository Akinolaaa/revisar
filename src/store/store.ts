import { configureStore, Middleware } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
// import logger from '@types/redux-logger';
import logger from 'redux-logger'

const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter((middleware): middleware is Middleware => Boolean(middleware));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(middlewares)
})