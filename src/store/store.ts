import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { createReduxHistory } from "./middlewares/routerMiddleware";
import { sagaMiddleware } from "./middlewares/sagaMiddleware";
import { rootSaga } from "./middlewares/rootSaga";
import { persistReducers } from "./reducers/persistReducer";
import { reducers } from "./reducers/rootReducer";
import { services } from "./services/rootService";
import { middlewares } from "./middlewares/rootMiddleware";

const persistedReducer = persistReducers(reducers) as typeof reducers;

export const store = configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(services.map((service) => service.middleware))
      .concat(middlewares),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
