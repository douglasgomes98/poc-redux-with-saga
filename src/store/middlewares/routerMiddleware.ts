import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

export const { routerMiddleware, createReduxHistory, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
    savePreviousLocations: 1,
  });
