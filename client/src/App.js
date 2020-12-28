import React from 'react';
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";

export default function App() {
  return (
    <ApolloProvider client={ client }>
      <div className="app">
        <h1>Hello World!</h1>
      </div>
    </ApolloProvider>
  );
}


