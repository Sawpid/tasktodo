import React, {useState} from "react"
import Select from 'react-select';
import { Card, Badge, Stack, OverlayTrigger, Popover, Nav, ListGroup, Modal, Row, Col,  Button, ButtonGroup, Form, FloatingLabel, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faUserCircle, faTrash, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { templateBoard, defaultTaskData } from "../../model/boardData"

function CreateBoardModal({children}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <div 
                // className={className} 
                onClick={handleShow}
            >
                {children}
            </div>

            <Modal 
                size="lg" 
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Создание нового проекта</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <FloatingLabel
                                label="Название проекта"
                                className="mb-2"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <Form.Text muted>
                                Введите короткое и запоминающееся название проекта.
                                Только латинские буквы символы <kbd>_</kbd> <kbd>-</kbd> и цифры.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <FloatingLabel label="Описание проекта">
                                <Form.Control
                                    className="mb-2"
                                    as="textarea"
                                    placeholder="Введите краткое описание проекта"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Form.Text muted>
                                Введите краткое описание проекта.
                                Минимальное количество символов <kbd>10</kbd> максимальное <kbd>250</kbd>.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <ListGroup className="w-100 mb-2">
                                <ListGroup.Item action active>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Публичный</div>
                                        Разрешить всем пользователям просматривать ваш проект
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">По ссылке</div>
                                        Проект не будет отображаться в поиске и вашем профиле
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Приватный</div>
                                        Только участники вашего проекта могут просматривать ваш проект
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                            <Form.Text muted>
                                Выберите уровень доступа для просмотр и нахождение вашего проекта.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Select
                                className="mb-2"
                                dropdownIndicator={false}
                                defaultValue={templateBoard[0]}
                                closeMenuOnSelect={false}
                                options={templateBoard}
                            />
                            <Form.Text muted>
                                Выберите шаблон проекта
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="rounded-pill" onClick={handleClose}>
                        Отменить
                    </Button>
                    <Button variant="success" className="rounded-pill ms-auto">
                        Создать
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default CreateBoardModal;