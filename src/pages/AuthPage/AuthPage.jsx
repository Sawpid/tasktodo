import React from "react"
import { Link, useOutlet, useLocation } from "react-router-dom";
import { Modal, Button, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faKey } from '@fortawesome/free-solid-svg-icons'

function AuthPage() {

    // const loc = (window.location.pathname === "/auth/signin")?"Вход":"Регистрация"
    const loc = useLocation()
    const locPath = loc.pathname.split("/")
    const outlet = useOutlet()
    const locName = {signin:"Вход", signup:"Регистрация", forgot:"Восстановить пароль"}
    let title = locName[locPath[2]]

    return (
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
                {outlet}
            </Modal.Body>

            <Modal.Footer>
                {locPath[2]!=="forgot" && 
                    <Button as={Link} to="forgot" variant="outline-secondary">
                        Забыли пароль
                    </Button>
                }
                <Button as={Link} to="/board" variant="primary">{title}</Button>
            </Modal.Footer>

        </Modal>
    )
}
export default AuthPage;