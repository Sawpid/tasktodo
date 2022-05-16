import React, { useState} from "react"
import { InputGroup, FormControl, Form, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock  } from '@fortawesome/free-solid-svg-icons'
import { useOutletContext } from "react-router-dom";

function SignInAuth() {
   
    const [signin, update] = useOutletContext();

    return (
        <Form>
            <Row>
                <Col md={12}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faUser}  />
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Имя пользователя"
                            aria-label="Имя пользователя"
                            onChange={update}
                            type="text"
                            name="username"
                            value={signin.username.value}
                            isInvalid={signin.username.isInvalid}
                            isValid={signin.username.isValid}
                            required 
                        />
                        <Form.Control.Feedback type="invalid">
                            
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={12}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faLock}  />
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Пароль"
                            aria-label="Пароль"
                            type="password"
                            name="password"
                            onChange={update}
                            value={signin.password.value}
                            isInvalid={signin.password.isInvalid}
                            isValid={signin.password.isValid}
                            required 
                        />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </InputGroup>
                </Col>
                <Col md={12}>
                    <Form.Check label={"Запомнить меня"} />
                </Col>
            </Row>
        </Form>
    )
}
export default SignInAuth;