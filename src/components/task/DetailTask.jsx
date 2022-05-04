import React, {useState} from "react"
import Select from 'react-select';
import { Card, Badge, Stack, OverlayTrigger, Popover, Nav, Modal, Row, Col,  Button, ButtonGroup, Form, FloatingLabel, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faUserCircle, faTrash, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { baseTags, sampleMembers } from "../../model/boardData"
import {useBoard} from "../../hooks/board.hook"

function DetailTask({children, className, data, updateTask, deleteTask}) {
    const [show, setShow] = useState(false);
    const {boardData,} = useBoard();
    const colStateOptions = boardData.map(el => ({value:el.id, label:el.name}))

    const getTagOption = data.tags.map(el => (baseTags[el]))
    const getMemberOption = data.members.map(el => (sampleMembers[el]))
    const getStateOption = colStateOptions.find(x => x.value === data.status)
    
    // console.log(data.status)
    const item = data

    const popover = (
        <Popover>
          <Popover.Header as="h3">Вы уверенны?</Popover.Header>
          <Popover.Body>
            <Stack direction="horizontal" gap={2}>
                <Button 
                    variant="success" 
                    onClick={() => {deleteTask(0, data.id)}} 
                >
                    Да
                </Button>
                <Button variant="primary">Нет</Button>
            </Stack>
          </Popover.Body>
        </Popover>
      );

    return(
        <>
            <div className={className} onClick={() => {setShow(true)}}>
                {children}
            </div>

            <Modal size="lg" show={show} onHide={() => {setShow(false)}}>

                <Modal.Header closeButton>
                    <Modal.Title>
                    Задача #{item.id}  {item.name}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row>
                        <Col sm={9}>
                            <Nav fill variant="pills" defaultActiveKey="#d" className="mb-3">
                                <Nav.Item>
                                    <Nav.Link href="#d">Описание</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Коментарии</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">История</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Название</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="" 
                                        name="name"
                                        onChange={(e) => {updateTask(e, 0, data.id)}}
                                        />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Описание</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={3} 
                                        value={data.text} 
                                        name="text"
                                        onChange={(e) => {updateTask(e, 0, data.id)}}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Метки</Form.Label>
                                    <Select
                                        defaultValue={getTagOption}
                                        options={baseTags}
                                        onChange={(e)=> data.tags = e.map(el => el.value)}
                                        isMulti
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Участники</Form.Label>
                                    <Select
                                        defaultValue={getMemberOption}
                                        options={sampleMembers}
                                        isMulti
                                    />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={3}>
                            <Row className="gx-1">
                                <Col sm={6} lg={12} className="mb-3">
                                    <Button className="w-100 rounded-pill" variant="success">
                                        <span className="d-inline d-sm-none d-lg-inline">Редактировать</span>
                                        <FontAwesomeIcon 
                                            className="d-none d-sm-inline d-lg-none" 
                                            icon={faPenToSquare}  
                                        />
                                    </Button>
                                </Col>
                                <Col sm={6} lg={12} className="mb-3">
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                        <Button className="w-100 rounded-pill" variant="danger">
                                            <span className="d-inline d-sm-none d-lg-inline">Удалить</span>
                                            <FontAwesomeIcon 
                                                className="d-none d-sm-inline d-lg-none"  
                                                icon={faTrash}
                                            />
                                        </Button>
                                    </OverlayTrigger>
                                </Col>
                                <Col sm={12} className="mb-3">
                                    <Button className="w-100 rounded-pill" variant="primary">
                                        <span className="d-inline d-sm-none d-lg-inline">Поделиться</span>
                                        <FontAwesomeIcon 
                                            className="d-none d-sm-inline d-lg-none" 
                                            icon={faShareNodes}  
                                        />
                                    </Button>
                                </Col>
                                <Col className="col-12 mb-3">
                                    <Form.Label>Прогресс {item.progress}%</Form.Label>
                                    <Form.Range name="progress" onChange={(e) => {updateTask(e, 0, item.id)}} value={item.progress}/>
                                </Col>
                                <Col sm={12} className="col-6 mb-3">
                                    <Form.Label>Статус</Form.Label>
                                    <Select
                                        components={{ DropdownIndicator : "" }}
                                        dropdownIndicator={false}
                                        defaultValue={getStateOption}
                                        closeMenuOnSelect={false}
                                        options={colStateOptions}
                                    />
                                </Col>
                                <Col sm={12} className="col-6 mb-3">
                                    <Form.Label>Автор</Form.Label>
                                    <Button className="w-100" variant="outline-dark">Сергей Вернигора</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>
        </>
    )

}

export default DetailTask;