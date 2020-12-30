import { React, useState } from 'react';
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";

import { Container } from 'semantic-ui-react';
import { ToastContainer } from "react-toastify";

import Auth from "./components/Auth";

export default function App() {

  return (
    <ApolloProvider client={ client }>
        <Container>
          <Auth></Auth>
        </Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </ApolloProvider>
  );
}


