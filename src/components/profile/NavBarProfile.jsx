import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlusCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import NavContextUser from "./UserContextMenu";
import SearchContextMenu from "../explore/SearchContextMenu";

function NavBarProfile() {
    return (
        <Navbar bg="primary" variant="dark" fixed="top" >
            <Container>
            <Navbar.Brand href="#desk">TaskToDo</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#tags">
                        <SearchContextMenu/>
                    </Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link href="#tags">
                        Обзор
                    </Nav.Link>
                </Nav>
                {true
                ?
                <>
                    <Button variant="link" className="p-0 mx-3">
                        <FontAwesomeIcon style={{color: "#0043a5"}} size="2x" icon={faPlusCircle}/>
                    </Button>
                    <NavContextUser/>
                </>
                :<Link className="btn btn-warning d-flex shadow-btn rounded-pill" to="/auth/signin">Войти</Link>}
            </Container>
        </Navbar>
    )
}
  
export default NavBarProfile;