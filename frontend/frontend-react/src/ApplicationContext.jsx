import React from 'react';
import App from './App';
import { useState } from 'react';

export const AuthContext = React.createContext(undefined);

function ApplicationContext() {

    function useLocalStorage(key, initialValue) {

        const [storedValue, setStoredValue] = useState(() => {
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                console.error("Error reading from local storage", error);
                return initialValue;
            }
        });
    
        const setValue = (value) => {
            try {
                const valueToStore = value instanceof Function ? value(storedValue) : value;
                setStoredValue(valueToStore);
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) {
                console.error("Error writing to local storage", error);
            }
        };
    
        return [storedValue, setValue];
    }

    const [spotifyAccessToken, setSpotifyAccessToken] = useState("1");
    const [userToken, setUserToken] = useLocalStorage('userToken-uoamedia', '');
    const [isAuthenticated, setIsAuthenticated] = useLocalStorage('isAuthenticated-uoamedia', false);
    const [userId, setUserId] = useLocalStorage('userId-uoamedia', '');
    


    return (
        <>
            <AuthContext.Provider value={[spotifyAccessToken, setSpotifyAccessToken, userToken, setUserToken, isAuthenticated, setIsAuthenticated, userId, setUserId]}>
                <App />
            </AuthContext.Provider>
        </>
    )
}

export default ApplicationContext;
