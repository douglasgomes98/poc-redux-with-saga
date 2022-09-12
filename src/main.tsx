import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { history, persistor, store } from "./store/store";
import { HistoryRouter } from "redux-first-history/rr6";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
