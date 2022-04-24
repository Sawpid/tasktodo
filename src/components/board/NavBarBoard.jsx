import React from "react"
import { Navbar, Nav, Button, Container } from "react-bootstrap"
import ConfigBoard from "./ConfigBoard"

function NavBarBoard() {
    return (
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container>
            <Navbar.Brand href="#desk">TaskToDo</Navbar.Brand>
                <Nav className="me-auto">
                    <ConfigBoard/>
                </Nav>
                <Button variant="warning" className="d-flex shadow-btn rounded-pill">Войти</Button>
            </Container>
        </Navbar>
    )
}
  
export default NavBarBoard;