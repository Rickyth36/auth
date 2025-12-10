import { useState } from "react";
import { AppContext } from "./AppContext";

export const AppContextProvider = ({ children }) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(false);

    return (
        <AppContext.Provider value={{
            backendUrl,
            isLoggedIn, setIsLoggedIn,
            userData, setUserData
        }}>
            {children}
        </AppContext.Provider>
    );
};
