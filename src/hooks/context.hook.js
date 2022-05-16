import { createContext } from "react";

export const LoginContext = createContext({
    id:null, token:null, name:null, login: () => {}, logout: () => {}, isLogin: false
})