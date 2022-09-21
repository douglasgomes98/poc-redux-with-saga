import { ApolloClient, from, InMemoryCache } from '@apollo/client';

import { authMiddleware } from './middlewares/authMiddleware';
import { httpLink } from './middlewares/httpLinkMiddleware';
import { sessionMiddleware } from './middlewares/sessionMiddleware';

export const apolloClient = new ApolloClient({
  uri:`https://bff-controlpanel.dev.agent.guru/`,
  link: from([authMiddleware, sessionMiddleware, httpLink]),
  cache: new InMemoryCache(),
  queryDeduplication: false,
  headers: {
    'Content-Encoding': 'gzip',
  },
});
