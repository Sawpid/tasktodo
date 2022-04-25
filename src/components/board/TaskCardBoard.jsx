import React from "react"
import { Card, Button, ButtonGroup, Form, FloatingLabel, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDownLeftRight, faTrash } from '@fortawesome/free-solid-svg-icons'

function TaskCardBoard({editor = false, id = 0, text = "", progress = 0}) {

    if (editor) {
        return(
            <Card className="mb-3">
                <ButtonGroup size="sm" className="btn-rtop" aria-label="Basic example">
                    <Button variant="outline-secondary">
                        #{id}
                    </Button>
                    <Button variant="outline-secondary" id="delete-task">
                        <FontAwesomeIcon icon={faTrash}/>
                    </Button>
                    <Button variant="outline-secondary" id="move-task">
                        <FontAwesomeIcon icon={faArrowsUpDownLeftRight}/>
                    </Button>
                </ButtonGroup>
                <Card.Body className="mt-3 mb-0">
                    <FloatingLabel label="Комментарии">
                        <Form.Control
                        as="textarea"
                        placeholder="Оставьте комментарий здесь"
                        style={{ height: '100px' }}
                        value={text}
                        />
                    </FloatingLabel>
                    <Form.Label className="text-end my-2">{progress}%</Form.Label>
                    <Form.Range value={progress}/>
                </Card.Body>
            </Card>
        )
    }else{
        return(
            <Card className="mb-3">
                <Card.Body className="mt-3 mb-0">
                    <Card.Subtitle className="mb-2 text-muted" >
                        {text}
                    </Card.Subtitle >
                    <ProgressBar now={progress} label={`${progress}%`} />
                </Card.Body>
            </Card>
        )
    }

}

export default TaskCardBoard;