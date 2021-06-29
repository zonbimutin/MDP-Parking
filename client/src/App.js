import React, { useEffect, useState, useMemo } from 'react';

//GraphQL - Apollo
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";


// Contexts
import AuthContext from "./context/AuthContext";
import SearchContext from "./context/SearchContext";

// Token manager
import { getToken, removeToken, decodeToken } from "./utils/token";

//UI Components
import { ToastContainer } from "react-toastify";

// Navigation
import Navigation from './routes/Navigation';

// Main Style

export default function App() {

	const [auth, setAuth] = useState(undefined);
	const [search, setSearch] = useState(undefined);

	useEffect(() => {
		const token = getToken();
		token ? setUser(token) : setAuth(null)

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

	const searchData = useMemo(() => ({
		search,
		setSearch
	}), [search])

  return (
    <ApolloProvider client={ client }>
		<AuthContext.Provider value={ authData }>
			<SearchContext.Provider value={ searchData }>
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
			</SearchContext.Provider>
		</AuthContext.Provider>
    </ApolloProvider>
  );
}


