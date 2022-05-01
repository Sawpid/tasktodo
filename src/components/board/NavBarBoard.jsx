import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap"
import ConfigBoard from "./ConfigBoard"

function NavBarBoard() {
    return (
        <Navbar bg="primary" variant="dark" fixed="top">
            <Container>
            <Navbar.Brand href="#desk">TaskToDo</Navbar.Brand>
                <Nav className="me-auto">
                    <ConfigBoard/>
                </Nav>
                <Link className="btn btn-warning d-flex shadow-btn rounded-pill" to="/auth/signin">Войти</Link>
            </Container>
        </Navbar>
    )
}
  
export default NavBarBoard;