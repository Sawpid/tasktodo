import React from "react"
import { Link, useOutlet } from "react-router-dom";
import { Modal, Button, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faKey } from '@fortawesome/free-solid-svg-icons'

function AuthPage() {
    const loc = (window.location.pathname === "/auth/signin")?"Вход":"Регистрация"
    const outlet = useOutlet()

    return (
        <Modal show={true} centered={true}>

            <Modal.Header>
                <Modal.Title>{loc}</Modal.Title>
                <Nav variant="pills" defaultActiveKey="signin">
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
                <Button variant="outline-secondary">Забыли пароль</Button>
                <Button as={Link} to="/board" variant="primary">{loc}</Button>
            </Modal.Footer>

        </Modal>
    )
}
export default AuthPage;