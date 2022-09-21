import { HttpLink } from '@apollo/client';

export const httpLink = new HttpLink({
  uri: "https://bff-controlpanel.dev.agent.guru",
  credentials: 'include',
});
