import React, {useContext} from "react"
import { Navigate } from "react-router-dom";
import { LoginContext } from "../../hooks/context.hook";

function LogOutPage() {
    const authContext = useContext(LoginContext)
    authContext.logout()
    return (<Navigate to="/auth" replace={true} />)
}

export default LogOutPage;