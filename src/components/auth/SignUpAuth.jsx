import React, {useState} from "react"
import { InputGroup, FormControl, Form, Row, Col, FloatingLabel } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock  } from '@fortawesome/free-solid-svg-icons'
import { useOutletContext } from "react-router-dom";

function SignUpAuth() {

    const [signup, update] = useOutletContext();

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
                                onChange={update}
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