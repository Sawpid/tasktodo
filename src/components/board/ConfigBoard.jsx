import React, { useState } from "react";
import { Offcanvas, Nav, FloatingLabel, Form, ButtonGroup, ListGroup, Badge } from "react-bootstrap";
import {useBoard} from "../../hooks/board.hook"

function ConfigBoard() {
    const [show, setShow] = useState(false);
    const {boardData} = useBoard();

    return(
        <>
            <Nav.Link href="#settings" onClick={() => setShow(true)}>Настроить</Nav.Link>

            <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
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
                    <ButtonGroup className="w-100 mb-3" aria-label="access level">
                        <input type="radio" className="btn-check" name="level-access" id="access-public" autoComplete="off" defaultChecked/>
                        <label className="btn btn-outline-primary" htmlFor="access-public">Публичный</label>
                        <input type="radio" className="btn-check" name="level-access" id="access-link" autoComplete="off"/>
                        <label className="btn btn-outline-primary" htmlFor="access-link">По ссылке</label>
                        <input type="radio" className="btn-check" name="level-access" id="access-private" autoComplete="off"/>
                        <label className="btn btn-outline-primary" htmlFor="access-private">Приватный</label>
                    </ButtonGroup>
                    <ListGroup as="ol" numbered>
                        {boardData.map((item) => (
                            <ListGroup.Item
                                as="li" key={item.id}
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">
                                        {item.name}
                                    </div>
                                    {item.description}
                                </div>
                                <Badge bg="primary" pill>
                                    {item.data.length}
                                </Badge>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default ConfigBoard;