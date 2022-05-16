import React, {useState, useContext} from "react"
import { Link, useOutlet, Outlet, useLocation } from "react-router-dom";
import { Modal, Button, Nav, Spinner, ToastContainer, Toast } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faKey, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import {useAuth} from "../../hooks/auth.hook"
import {useAjax} from "../../hooks/ajax.hook"
import { LoginContext } from "../../hooks/context.hook";

function AuthPage() {

    // const loc = (window.location.pathname === "/auth/signin")?"Вход":"Регистрация"
    const authContext = useContext(LoginContext)
    const loc = useLocation()
    const locPath = loc.pathname.split("/")
 
    const [user, update] = useAuth()
    const  {loading, error, request}  = useAjax()
    
    const locName = {signin:"Вход", signup:"Регистрация", forgot:"Восстановить пароль"}
    let title = locName[locPath[2]]

    const [toast, setToast] = useState({type:0, message:"", status:false});

    const hideToast = () => {
        setToast(prew => ({
            ...prew, status: false
        }))
    }

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
            console.log( data.name)
            setToast({type:0, message:data.message, status:true})
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
        <ToastContainer position="top-end" className="p-3" style={{zIndex:1055}}>
    <Toast onClose={hideToast} show={toast.status} delay={6000} autohide>
      <Toast.Header>
        <FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>
        <strong className="me-auto">Сообщение</strong>
        <small className="text-muted">Прямо сейчас</small>
      </Toast.Header>
      <Toast.Body>{toast.message}</Toast.Body>
    </Toast>
  </ToastContainer>
        </>
    )
}
export default AuthPage;