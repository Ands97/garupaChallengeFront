import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const api = useApi();
    const [user, setUser] = useState<User | null>(null);

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data.token && data.user) {
            setUser(data.user);
            setToken(data.token);
        }
    };

    const signout = () => {
        setUser(null);
        setToken("");
    };

    const validateToken = async () => {
        const storageData = localStorage.getItem("authToken");
        if (storageData) {
            const data = await api.validateToken(storageData);
            if (data.user) {
                setUser(data.user);
            }
        }
    };

    const setToken = (token: string) => {
        localStorage.setItem("authToken", token);
    };

    useEffect(() => {
        validateToken();
    }, []);

    return (
        <AuthContext.Provider value={{ signin, signout, user }}>
            {children}
        </AuthContext.Provider>
    );
};
