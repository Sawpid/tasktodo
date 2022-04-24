import React from "react"
import { Col, Row, ButtonGroup, Button } from "react-bootstrap";

function HeadBoard() {
    return (
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
                        <sup className="small">13</sup>
                    </Button>
                    <Button variant="outline-secondary" className="shadow-btn">Редактировать</Button>
                </ButtonGroup>
            </Col>
        </Row>
    )
}

export default HeadBoard;