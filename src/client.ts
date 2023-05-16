import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from 'apollo-link-ws';
import { AUTH } from './constants';

const httpUri = process.env.REACT_APP_GRAPHQL_ENDPOINT!;
const httpLink = new HttpLink({
  uri: httpUri,
});

const getToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem(AUTH.token);

    return token ? `Bearer ${token}` : '';
  }
};

const authLink = setContext((_, { headers }) => {
  const token = getToken();

  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const wsUri = httpUri.replace(/^https?/, 'wss');
const wsLink = new WebSocketLink({
  uri: wsUri,
  options: {
    reconnect: true,
    connectionParams: () => {
      const token = getToken();
      return token ? { Authorization: token } : {};
    },
  },
});

const terminatingLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    // If this is a subscription query, use wsLink, otherwise use httpLink
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink as any,
  authLink.concat(httpLink)
);

const link = ApolloLink.from([terminatingLink]);
const inMemoryCache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache: inMemoryCache,
});

export default client;
