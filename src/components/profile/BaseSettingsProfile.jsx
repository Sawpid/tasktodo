import React from "react"
import { Link } from "react-router-dom";
import Select from 'react-select'
import { Card, Nav, Button, Form, FloatingLabel, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { baseSkills } from "../../model/usersData"

function BaseSettingsProfile() {
    return(
        <>
        <Card className="mb-3">
            <Card.Header className="h4">Профиль</Card.Header>
            <Card.Body>
                <Form>
                    <Row>
                        <Col sm={4} className="text-center">
                            <img className="img-user-lg my-3" src="/user-placeholder.png" />
                        </Col>
                        <Col sm={8}>
                            <FloatingLabel
                                label="Фамилия"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Фамилия" />
                            </FloatingLabel>
                            <FloatingLabel
                                label="Имя"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Имя" />
                            </FloatingLabel>
                            <FloatingLabel
                                label="Отчество"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Отчество" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <FloatingLabel label="О себе">
                        <Form.Control
                        as="textarea"
                        className="mb-3"
                        placeholder="О себе"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Организация">
                        <Form.Control
                        as="textarea"
                        className="mb-3"
                        placeholder="Организация"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel label="Образование">
                        <Form.Control
                        as="textarea"
                        className="mb-3"
                        placeholder="Образование"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel label="Электронная почта" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel label="Сайт/Соцсеть" className="mb-3">
                                <Form.Control type="text" placeholder="vk@id000000" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Навыки</Form.Label>
                        <Select
                        closeMenuOnSelect={false}
                        isMulti
                        options={baseSkills}
                    />
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
        <Card className="mb-3">
            <Card.Header as="h4">Смена пароля</Card.Header>
            <Card.Body>
                <Card.Title>В данный момент недоступно</Card.Title>
                <Card.Text>
                    Обратитесь к администратору платформы
                </Card.Text>
                <Button variant="primary">Отправить запрос</Button>
            </Card.Body>
        </Card>
        </>
    )
}
export default BaseSettingsProfile;