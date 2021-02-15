import { createClient } from 'graphql-ws';
import { parse } from 'graphql';

const client = createClient({
  url: 'wss://someserver',
  on: {
    closed: () => console.log("closed"),
    connected: () => console.log("connected"),
    connecting: () => console.log("connecting"),
  }
});

client.subscribe({ query: parse(`{ id }`)}, {
  complete: console.log,
  error: console.log,
  next: console.log,
})