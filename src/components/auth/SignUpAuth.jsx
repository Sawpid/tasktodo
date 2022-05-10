import React, {useState} from "react"
import { InputGroup, FormControl, Form, Row, Col, FloatingLabel } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock  } from '@fortawesome/free-solid-svg-icons'

function SignUpAuth() {
    const [signup, setSignup] = useState({
        last_name: { 
            value: "", 
            label: "Фамилия",
            type: "text",
            mask: /^[а-яА-ЯёЁ-\s]{2,}$/, 
            isInvalid: false, 
            isValid: false
        },
        first_name: { 
            value: "", 
            label: "Имя",
            type: "text",
            mask: /^[а-яА-ЯёЁ-\s]{2,}$/, 
            isInvalid: false, 
            isValid: false
        },
        username: { 
            value: "", 
            label: "Имя пользователя",
            type: "text",
            mask: /^[a-z0-9_-]{3,16}$/, 
            isInvalid: false, 
            isValid: false
        },
        email: {
            value: "",
            label: "Эл. почта",
            type: "email",
            mask: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
            isInvalid: false,
            isValid: false
        },
        password: { 
            value: "", 
            label: "Пароль",
            type: "password",
            mask: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,25}$/, 
            isInvalid: false, 
            isValid: false
        },
        confirm_password: { 
            value: "", 
            label: "Повторите пароль",
            type: "password",
            mask: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,25}$/, 
            isInvalid: false, 
            isValid: false
        },
    })
    const updateSignup = (e) => {
        e.persist();
        let invalid = false; 
        let valid = false;
        if (signup[e.target.name].mask.test(e.target.value)){
            valid = true;
            invalid = false;
        }else{
            valid = false;
            invalid = true;
        }
        setSignup(prev => ({ 
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
                {Object.keys(signup).map(key => 
                    <Col md={6} className="mb-3" key={key}>
                        <FloatingLabel
                            label={signup[key].label}
                            >
                            <Form.Control 
                                type={signup[key].type} 
                                name={key}
                                placeholder={signup[key].label}
                                onChange={updateSignup}
                                value={signup[key].value}
                                isInvalid={signup[key].isInvalid}
                                isValid={signup[key].isValid}
                                required 
                                />
                        </FloatingLabel>
                    </Col>
                )}
            </Row>
        </Form>
    )
}
export default SignUpAuth;