import React, {useState, useContext} from "react"
import { Link, useOutlet, Outlet, useLocation } from "react-router-dom";
import { Modal, Button, Nav, Spinner, ToastContainer, Toast } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faKey, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import {useAuth} from "../../hooks/auth.hook"
import {useAjax} from "../../hooks/ajax.hook"
import { LoginContext, MessageContext } from "../../hooks/context.hook";
import ToastUi from "../../components/ui/ToastUi";

function AuthPage() {

    // const loc = (window.location.pathname === "/auth/signin")?"Вход":"Регистрация"
    const authContext = useContext(LoginContext)
    const msgContext = useContext(MessageContext)
    const loc = useLocation()
    const locPath = loc.pathname.split("/")
 
    const [user, update] = useAuth()
    const  {loading, error, request}  = useAjax()
    
    const locName = {signin:"Вход", signup:"Регистрация", forgot:"Восстановить пароль"}
    let title = locName[locPath[2]]



    const sendRequest = async () => {
        let bodyData
        let url =  ""

        switch(title) {
            case locName.signin:
                url = '/api/auth/signin'
                bodyData =  {
                    username: user.username.value, 
                    password: user.password.value
                }
              break
            case locName.signup:
                url = '/api/auth/signup'
                bodyData =  {
                    last_name: user.last_name.value, 
                    first_name: user.first_name.value, 
                    email: user.email.value, 
                    username: user.username.value, 
                    password: user.password.value
                }
              break
        }

        try {
            
            const data = await request(url, 'POST', bodyData)
            msgContext.showToast(data.message)
            console.log( data.name)
            authContext.login(data.token, data.id, data.name)
        } catch (err) {
            console.log( err)
            
        }
    }
    
    return (
        <>
        <Modal show={true} centered={true}>

            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
                <Nav variant="pills" defaultActiveKey="signin" activeKey={locPath[2]}>
                    <Nav.Item>
                        <Nav.Link as={Link} href="signin" to="signin">
                            <FontAwesomeIcon icon={faKey}/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="signup" to="signup">
                            <FontAwesomeIcon icon={faUserPlus}/>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Modal.Header>

            <Modal.Body>
                <Outlet context={[user, update]} />
            </Modal.Body>

            <Modal.Footer>
                {locPath[2]!=="forgot" && 
                    <Button as={Link} to="forgot" variant="outline-secondary">
                        Забыли пароль
                    </Button>
                }
                <Button 
                    disabled={loading}
                    variant="primary" 
                    onClick={sendRequest}
                    >
                    <Spinner 
                        size="sm" 
                        animation="border" 
                        className="me-2"
                        hidden={!loading} 
                        />
                    {title}
                </Button>
            </Modal.Footer>

        </Modal>
        <ToastUi/>
        </>
    )
}
export default AuthPage;