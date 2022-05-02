import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap"
import ConfigBoard from "./ConfigBoard"

function NavBarBoard() {
    return (
        <Navbar bg="primary" variant="dark" fixed="top" >
            <Container>
            <Navbar.Brand href="#desk">TaskToDo</Navbar.Brand>
                <Nav>
                    <ConfigBoard/>
                </Nav>
                <Nav>
                    <Nav.Link href="#tags">
                        Метки
                    </Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link href="#members" className="position-relative">
                        Участники
                        <Badge bg="danger" className="position-absolute botton-0 start-100 translate-middle rounded-pill">
                            1
                        </Badge>
                    </Nav.Link>
                </Nav>
                <Link className="btn btn-warning d-flex shadow-btn rounded-pill" to="/auth/signin">Войти</Link>
            </Container>
        </Navbar>
    )
}
  
export default NavBarBoard;