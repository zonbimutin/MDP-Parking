import React, { useEffect, useState, useMemo } from 'react';

//GraphQL - Apollo
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";

// Contexts
import AuthContext from "./context/AuthContext";

// Token manager
import { getToken, removeToken, decodeToken } from "./utils/token";

//UI Components
import { ToastContainer } from "react-toastify";

// Navigation
import Navigation from './routes/Navigation';

// Main Style

export default function App() {

	const [auth, setAuth] = useState(undefined);

	useEffect(() => {
		const token = getToken();
		if (!token) {
			setAuth(null);
		} else {
			setUser(token);
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
			<Navigation/>
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


