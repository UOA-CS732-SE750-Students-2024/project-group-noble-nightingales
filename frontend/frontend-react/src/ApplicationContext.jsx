import React from 'react';
import App from './App';

export const AuthContext = React.createContext(undefined);

function ApplicationContext() {

    return (
        <>
            <AuthContext.Provider value={undefined}>
                <App />
            </AuthContext.Provider>
        </>
    )
}

export default ApplicationContext;
