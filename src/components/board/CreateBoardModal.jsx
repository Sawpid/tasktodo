import React, {useState,useContext} from "react"
import Select from 'react-select';
import { ToggleButton, Card, Badge, Stack, OverlayTrigger, Popover, Nav, ListGroup, Modal, Row, Col,  Button, ButtonGroup, Form, FloatingLabel, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faUserCircle, faTrash, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { templateBoard, viewAccessLevel, headBoard } from "../../model/boardData"
import { useAjax } from "../../hooks/ajax.hook";
import { MessageContext } from "../../hooks/context.hook";

function CreateBoardModal({children}) {
    const msgContext = useContext(MessageContext)
    const  {loading, error, request}  = useAjax()
    // show modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // data board
    const [newId, newIdState] = useState(1);
    const [board, setBoard] = useState(headBoard(newId));
    const updateBoard = (e) => {
        e.persist();
        setBoard(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const updateSelectBoard = (e, key) => {
        setBoard(prev => ({ ...prev, [key]: e.value }));
    }
    const submitBoard = (e) => {
        e.preventDefault()
        console.log(e)
    }

    const sendRequest = async () => {
        const url = '/api/project/create'
        const bodyData = {
            name: board.name, 
            title: board.description, 
            access: board.access_level, 
            template: board.board_template
        }

        try {
            
            const data = await request(url, 'POST', bodyData)
            console.log( data.name)
            msgContext.showToast(data.message)
            // authContext.login(data.token, data.id, data.name)
        } catch (err) {
            console.log( err)
            
        }
    }

    return(
        <>
            <div 
                // className={className} 
                onClick={()=>setShow(true)}
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
                    <Form onSubmit={submitBoard}>
                <Modal.Body>
                        <Form.Group className="mb-3">
                            <FloatingLabel label="Название проекта">
                                <Form.Control 
                                    placeholder="Введите название проекта"
                                    type="text" 
                                    name="name"
                                    value={board.name}
                                    onChange={updateBoard}
                                />
                            </FloatingLabel>
                            <Form.Text muted>
                                Введите короткое и запоминающееся название проекта.
                                Только латинские буквы символы <kbd>_</kbd> <kbd>-</kbd> и цифры.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <FloatingLabel label="Описание проекта">
                                <Form.Control
                                    style={{ height: '100px' }}
                                    placeholder="Введите краткое описание проекта"
                                    as="textarea"
                                    name="description"
                                    value={board.description}
                                    onChange={updateBoard}
                                />
                            </FloatingLabel>
                            <Form.Text muted>
                                Введите краткое описание проекта.
                                Минимальное количество символов <kbd>10</kbd> максимальное <kbd>250</kbd>.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <ListGroup className="w-100 mb-2">
                                {viewAccessLevel.map( item => 
                                    <>
                                        <input 
                                            id={"access_level"+item.value}
                                            className="btn-check"
                                            value={item.value}
                                            type="radio"
                                            name="access_level"
                                            onChange={updateBoard}
                                        />
                                        <ListGroup.Item 
                                            key={item.value}
                                            as="label"
                                            action 
                                            htmlFor={"access_level"+item.value}
                                            active={board.access_level == item.value}
                                        >
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">{item.label}</div>
                                                {item.description}
                                            </div>
                                        </ListGroup.Item>
                                    </>
                                )}
                            </ListGroup>
                            <Form.Text muted>
                                Выберите уровень доступа для просмотр и нахождение вашего проекта.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Select
                                className="mb-2"
                                defaultValue={templateBoard[0]}
                                options={templateBoard}
                                onChange={(e) => updateSelectBoard(e, "board_template")}
                            />
                            <Form.Text muted>
                                Выберите шаблон проекта
                            </Form.Text>
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="rounded-pill" onClick={handleClose}>
                        Отменить
                    </Button>
                    <Button variant="success" className="rounded-pill ms-auto" type="submit" onClick={sendRequest}>
                        Создать
                    </Button>
                </Modal.Footer>
                    </Form>
            </Modal>
        </>
    )

}

export default CreateBoardModal;