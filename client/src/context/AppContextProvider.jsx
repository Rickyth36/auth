import { useState } from "react";
import { AppContext } from "./AppContext";
import { toast } from "react-toastify";
import axios from 'axios';
import { useEffect } from "react";

export const AppContextProvider = ({ children }) => {

    axios.defaults.withCredentials = true;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(false);

    const getAuthState = async() => {
        try {
            const {data} = await axios.get(backendUrl+'/api/auth/is-auth');
            if(data.success) {
                setIsLoggedIn(true);
                getUserData();
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
 
    const getUserData = async() => {
        try {
            const {data} = await axios.get(backendUrl+'/api/user/data', {
                withCredentials: true
            });
            data.success ? setUserData(data.userData) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }



useEffect(() => {
    const fetchAuth = async () => {
        await getAuthState();
    };
    fetchAuth();
}, []);




    return (
        <AppContext.Provider value={{
            backendUrl,
            isLoggedIn, setIsLoggedIn,
            userData, setUserData,
            getUserData
        }}>
            {children}
        </AppContext.Provider>
    );
};
