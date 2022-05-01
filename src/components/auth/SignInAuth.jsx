import React from "react"
import { InputGroup, FormControl, Form, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock  } from '@fortawesome/free-solid-svg-icons'

function SignInAuth() {

    // let { auth } = useParams();

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
                        />
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
                        />
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