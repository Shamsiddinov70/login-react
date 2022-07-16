import { AuthContext } from "../contexts/auth";
import { useContext } from "react";

export const useAuth = () => {

    const {token, setToken} = useContext(AuthContext);

    return [token, setToken];
}