import React, {useState} from "react"
import Select from 'react-select';
import { Card, Badge, Stack, OverlayTrigger, Popover, Nav, Modal, Row, Col,  Button, ButtonGroup, Form, FloatingLabel, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faUserCircle, faTrash, faShareNodes, faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons'
import { baseTags, sampleMembers } from "../../model/boardData"
import {useBoard} from "../../hooks/board.hook"

function DetailTask({children, className, data, updateTask, deleteTask, idx}) {

    const [ colIdx, _taskIdx ] = idx;

    const [edit, setEdit] = useState(false);
    const [show, setShow] = useState(false);
    const {boardData,} = useBoard();
    const colStateOptions = boardData.map(el => ({value:el.id, label:el.name}))

    const item = data

    const getTagOption = item.tags.map(el => (baseTags[el]))
    const getMemberOption = item.members.map(el => (sampleMembers[el]))
    const getStateOption = colStateOptions.find(x => x.value === item.status)
    
    // console.log(item.status)

    const popover = (
        <Popover>
          <Popover.Header as="h3">Вы уверенны?</Popover.Header>
          <Popover.Body>
            <Stack direction="horizontal" gap={2}>
                <Button 
                    variant="success" 
                    onClick={() => {deleteTask(colIdx, item.id)}} 
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
                    <Row className="gx-2">
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
                                    {edit 
                                        ?<Form.Control 
                                            type="text" 
                                            placeholder="" 
                                            name="name"
                                            value={item.name}
                                            onChange={(e) => {updateTask(e, colIdx, item.id)}}
                                        />
                                        :<Card.Title>{item.name}</Card.Title>
                                    }
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Описание</Form.Label>
                                    {edit 
                                        ?<Form.Control 
                                            as="textarea" 
                                            rows={3} 
                                            value={item.text} 
                                            name="text"
                                            onChange={(e) => {updateTask(e, colIdx, item.id)}}
                                        />
                                        :<Card.Text>{item.text}</Card.Text>
                                    }
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Метки</Form.Label>
                                        {edit 
                                        ?<Select
                                            defaultValue={getTagOption}
                                            options={baseTags}
                                            onChange={(e)=> updateTask(e.map(i => i.value), colIdx, item.id, "tags")}
                                            isMulti
                                        />
                                        :<Card.Text>
                                            {item.tags.map((tag) => (
                                                baseTags[tag] !== undefined &&
                                                <Badge key={tag} pill bg={baseTags[tag].color} className="task-badge p-2 px-3">
                                                    {baseTags[tag].label}
                                                </Badge>
                                            ))}
                                        </Card.Text>
                                        }
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Разработчики</Form.Label>
                                    {edit 
                                    ?<Select
                                        onChange={(e)=> updateTask(e.map(i => i.value), colIdx, item.id, "members")}
                                        defaultValue={getMemberOption}
                                        options={sampleMembers}
                                        isMulti
                                    />
                                    :<Card.Text>
                                        {item.members.map((member) => (
                                            sampleMembers[member] !== undefined &&
                                            <Button key={member} variant="outline-dark" className="border border-2 rounded-pill p-0 me-2">
                                                <Stack direction="horizontal">
                                                    <img className="img-user-md border-light shadow-btn" srcSet="/user-placeholder.png"/>
                                                    <small className="px-2">{sampleMembers[member].label}</small>
                                                </Stack>
                                            </Button>
                                        ))}
                                    </Card.Text>
                                    }
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={3}>
                            <Row className="gx-1">
                                <Col sm={edit?6:12} lg={12} className="mb-3">
                                    <Button 
                                        variant="success"
                                        className="w-100 rounded-pill" 
                                        onClick={() => {setEdit(!edit)}}
                                    >
                                        <span className="d-inline d-sm-none d-lg-inline">
                                            {edit?"Сохранить":"Редактировать"}
                                        </span>
                                        <FontAwesomeIcon 
                                            className="d-none d-sm-inline d-lg-none" 
                                            icon={edit?faFloppyDisk:faPenToSquare}
                                        />
                                    </Button>
                                </Col>
                                {edit &&
                                <>
                                <Col sm={6} lg={12} className="mb-3">
                                    <Button className="w-100 rounded-pill" variant="secondary">
                                        <span className="d-inline d-sm-none d-lg-inline">Отменить</span>
                                        <FontAwesomeIcon 
                                            className="d-none d-sm-inline d-lg-none"  
                                            icon={faXmark}
                                        />
                                    </Button>
                                </Col>
                                <Col lg={12} className="mb-3">
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
                                </>
                                }
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
                                    {edit 
                                    ?<Form.Range name="progress" onChange={(e) => {updateTask(e, colIdx, item.id)}} value={item.progress}/>
                                    :<ProgressBar now={item.progress} />
                                    }
                                </Col>
                                <Col sm={12} className="col-6 mb-3">
                                    <Form.Label>Статус</Form.Label>
                                    <Select
                                        isDisabled={!edit}
                                        components={{ DropdownIndicator : "" }}
                                        dropdownIndicator={false}
                                        defaultValue={getStateOption}
                                        closeMenuOnSelect={false}
                                        options={colStateOptions}
                                    />
                                </Col>
                                <Col sm={12} className="col-6 mb-3">
                                    <Form.Label>Автор</Form.Label>
                                    <Card.Text>
                                        <Button variant="outline-dark" className="border border-2 rounded-pill p-0">
                                            <Stack direction="horizontal">
                                                <img className="img-user-md shadow-btn" srcSet="/user-placeholder.png"/>
                                                <small className="px-2">{sampleMembers[0].label}</small>
                                            </Stack>
                                        </Button>
                                    </Card.Text>
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