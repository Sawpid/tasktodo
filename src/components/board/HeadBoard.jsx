import React from "react"
import { Col, Row, ButtonGroup, Button, ButtonToolbar, InputGroup, FormControl, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlusCircle, faMagnifyingGlass, faArrowUpShortWide, faArrowDownShortWide, faFilter, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import {faStar as farStar}  from '@fortawesome/free-regular-svg-icons'


function HeadBoard({setEdit, isEdit=false}) {
    return (
        <>
            <Row>
                <Col className="col-12" sm={8}>
                    <h3 className="font-weight-light text-white">TaskToDo Доска</h3>
                    <div className="small text-light mb-3">
                        Перетащите задачу в столбец с нужным статусом
                    </div>
                </Col>
                <Col className="col-12 text-end mb-3" sm={4}>
                    <ButtonGroup vertical >
                        <Button variant="success" >
                            Сохранить
                            <sup className="d-none small">13</sup>
                        </Button>
                        <Button onClick={setEdit} className="shadow-btn"
                        variant={(isEdit)?"secondary":"outline-secondary"}>
                            Редактирование: {isEdit?"Вкл":"Выкл"}
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col className="col-12" sm={7}>
                    <ButtonToolbar>
                        <InputGroup className="me-2 mb-3">
                            <FormControl
                                type="text"
                                placeholder="Введите для поиска..."
                            />
                            <Button variant="light">
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </Button>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <DropdownButton
                                variant="success"
                                title={<FontAwesomeIcon icon={faFilter}/>}
                            >
                                <Form className="m-2">
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Участник</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Form>
                            </DropdownButton>
                            <Button variant="success">
                                <FontAwesomeIcon icon={faArrowDownShortWide}/>
                            </Button>
                        </InputGroup>
                    </ButtonToolbar>
                </Col>
                <Col className="col-12 text-end mb-3" sm={5}>
          
                    <ButtonGroup className="mb-3">
                        <Button variant="secondary">Присоединиться</Button> 
                    </ButtonGroup>
                    
                    <ButtonGroup className="mb-3 ms-2">
                        <Button>
                            Поддержать
                        </Button> 
                        <Button>
                            <FontAwesomeIcon icon={farStar}/>
                        </Button> 
                    </ButtonGroup>

                </Col>
            </Row>
        </>
    )
}

export default HeadBoard;