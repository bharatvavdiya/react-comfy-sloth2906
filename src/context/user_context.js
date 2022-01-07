import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
	const { isAuthenticated, user, loginWithRedirect, logout, isLoading } =
		useAuth0();
	const [myUser, setMyUser] = useState(null);
	console.log(myUser);
	useEffect(() => {
		setMyUser(user);
	}, [user]);
	return (
		<UserContext.Provider value={{ loginWithRedirect, myUser, logout }}>
			{children}
		</UserContext.Provider>
	);
};
// make sure use
export const useUserContext = () => {
	return useContext(UserContext);
};
