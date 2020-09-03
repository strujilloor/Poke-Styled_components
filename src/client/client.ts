import { ApolloClient, InMemoryCache } from '@apollo/client';

export type ExchangeRate = {currency : string, name: string, rate:string};

export const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
});
