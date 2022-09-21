import { ApolloLink } from '@apollo/client';

export const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(String('@agentguru/access_token'));

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }));

  return forward(operation);
});
