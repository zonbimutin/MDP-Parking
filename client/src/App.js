import React, { useEffect, useState, useMemo } from 'react';

//GraphQL - Apollo
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";

// Contexts
import AuthContext from "./context/AuthContext";

// Token manager
import { getToken, removeToken, decodeToken } from "./utils/token";

//UI Components
import { Container } from 'semantic-ui-react';
import { ToastContainer } from "react-toastify";

// Compopnets
import Auth from "./components/Auth";


export default function App() {

	const [auth, setAuth] = useState(undefined);

	useEffect(() => {
		const token = getToken();
		if (!token) {
			setAuth(null);
		} else {
			setUser(token);
			console.log(auth);
		}
	}, []);

	const logout = () => {
		removeToken();
		setAuth(null);
	};

	const setUser = (userToken) => {
		setAuth(decodeToken(userToken));
	};

	const authData = useMemo(() => ({
		auth,
		logout,
		setUser,
	}), [auth]);

  return (
    <ApolloProvider client={ client }>
		<AuthContext.Provider value={ authData }>
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
		</AuthContext.Provider>
    </ApolloProvider>
  );
}


