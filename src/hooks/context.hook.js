import { createContext } from "react";

export const LoginContext = createContext({
    id:null, token:null, name:null, login: () => {}, logout: () => {}, isLogin: false
})

export const MessageContext = createContext({
    toast:{type:0, message:"", status:false}, showToast:()=>{}, hideToast:()=>{}
})

