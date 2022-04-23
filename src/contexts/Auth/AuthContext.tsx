import { createContext } from "react";
import { User } from "../../types/User";

export type AuthContextType = {
    signin: (email: string, password: string) => void;
    user: User | null;
    signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
