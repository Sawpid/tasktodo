import React, { useState} from "react"
import { InputGroup, FormControl, Form, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock  } from '@fortawesome/free-solid-svg-icons'

function SignInAuth() {
    const [signin, setSignin] = useState({
        username: { 
            value: "", 
            mask: /^[a-z0-9_-]{3,16}$/, 
            isInvalid: false, 
            isValid: false
        },
        password: { 
            value: "", 
            mask: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,25}$/, 
            isInvalid: false, 
            isValid: false
        },
    })
    const updateSignin = (e) => {
        e.persist();
        let invalid = false; 
        let valid = false;
        if (signin[e.target.name].mask.test(e.target.value)){
            valid = true;
            invalid = false;
        }else{
            valid = false;
            invalid = true;
        }
        setSignin(prev => ({ 
            ...prev, 
            [e.target.name]: {
                ...prev[e.target.name],
                value: e.target.value,
                isValid: valid,
                isInvalid: invalid,
            }
        }));
    }
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
                            onChange={updateSignin}
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
                            onChange={updateSignin}
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