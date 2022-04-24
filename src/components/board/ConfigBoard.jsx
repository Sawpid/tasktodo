import React, { useState } from "react";
import { Offcanvas, Nav, FloatingLabel, Form, ButtonGroup } from "react-bootstrap";

function ConfigBoard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Nav.Link href="#settings" onClick={handleShow}>Настроить</Nav.Link>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Доска #</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <FloatingLabel label="Название" className="mb-3">
                        <Form.Control type="text" placeholder="Название" />
                    </FloatingLabel>
                    <FloatingLabel label="Описание" className="mb-3">
                        <Form.Control as="textarea" placeholder="Описание" />
                    </FloatingLabel>
                    <ButtonGroup className="w-100" aria-label="access level">
                        <input type="radio" className="btn-check" name="level-access" id="access-public" autocomplete="off" checked/>
                        <label className="btn btn-outline-primary" for="access-public">Публичный</label>
                        <input type="radio" className="btn-check" name="level-access" id="access-link" autocomplete="off"/>
                        <label className="btn btn-outline-primary" for="access-link">По ссылке</label>
                        <input type="radio" className="btn-check" name="level-access" id="access-private" autocomplete="off"/>
                        <label className="btn btn-outline-primary" for="access-private">Приватный</label>
                    </ButtonGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default ConfigBoard;