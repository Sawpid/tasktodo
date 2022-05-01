import React from "react"
import { InputGroup, FormControl, Form, Row, Col, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock  } from '@fortawesome/free-solid-svg-icons'

function SignUpAuth() {

    // let { auth } = useParams();

    return (
        <Form>
            <Row>
                <Col md={6} className="mb-3">
                    <Form.Control placeholder="Имя" />
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Control placeholder="Фамилия" />
                </Col>
            </Row>
            <Row>
                <Col md={6} className="mb-3">
                    <Form.Control placeholder="Имя пользователя" />
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Control placeholder="Эл. почта" />
                </Col>
            </Row>
            <Row>
                <Col md={6} className="mb-3">
                    <Form.Control placeholder="Пароль" />
                </Col>
                <Col md={6} className="mb-3">
                    <Form.Control placeholder="Повторите пароль" />
                </Col>
            </Row>
        </Form>
    )
}
export default SignUpAuth;