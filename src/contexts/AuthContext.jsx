import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const [logado, setLogado] = useState(false);
    const context = useMemo({
        logado,
        setLogado
    });

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export default AuthProvider;