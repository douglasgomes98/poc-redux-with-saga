import { loggerMiddleware } from "./logger";
import { logRocketMiddleware } from "./logRocket";
import { routerMiddleware } from "./routerMiddleware";
import { sagaMiddleware } from "./sagaMiddleware";

export const middlewares = [
  {
    fn: sagaMiddleware,
    condition: true,
  },
  {
    fn: routerMiddleware,
    condition: true,
  },
  {
    fn: loggerMiddleware,
    condition: process.env.NODE_ENV === "development",
  },
  {
    fn: logRocketMiddleware,
    condition: process.env.NODE_ENV === "development",
  },
]
  .filter((middleware) => middleware.condition)
  .map((middleware) => middleware.fn);
