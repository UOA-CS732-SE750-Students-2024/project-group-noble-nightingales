import React from 'react';
import App from './App';

export const AuthContext = React.createContext(undefined);

function ApplicationContext() {

    const [spotifyAccessToken, setSpotifyAccessToken] = React.useState("1");


    return (
        <>
            <AuthContext.Provider value={{spotifyAccessToken, setSpotifyAccessToken}}>
                <App />
            </AuthContext.Provider>
        </>
    )
}

export default ApplicationContext;
