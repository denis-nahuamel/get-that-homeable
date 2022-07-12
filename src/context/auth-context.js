import { createContext, useContext, useEffect, useState } from "react";
import { login, logout } from "../services/auth-service";
import { getUser, signupUser } from "../services/user-service";

const AuthContext = createContext();
export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      getUser()
      .then((response)=> {
        setLoading(false);
        setUser(response)
    })
    .catch((e)=> {
        setLoading(false)
        ; console.log(e)})
    }, [])
    const loginAuth = (credentials) => {
        return login(credentials).then(user =>{
            setUser(user)
        })
    }
    const logoutAuth = () => {
        return logout().then(response => {
            setUser(null);
        })
    }
    const signupAuth = (user) => {
        return signupUser(user).then(response => console.log("response", response))
    }
    const value = {
        user,
        loginAuth,
        logoutAuth,
        signupAuth
    }
    if (loading) return <p>Loading...</p>
    return <AuthContext.Provider value={value}  {...props} />
}
export const useAuth = () => {
    return useContext(AuthContext)
}