import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { history, persistor, store } from "./store/store";
import { HistoryRouter } from "redux-first-history/rr6";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { apolloClient } from "./apollo";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </HistoryRouter>
      </Provider>
    </ApolloProvider>,
  </React.StrictMode>
);
