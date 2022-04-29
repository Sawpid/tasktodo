import React from "react"
import { Card, Button, ButtonGroup, Form, FloatingLabel, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDownLeftRight, faTrash } from '@fortawesome/free-solid-svg-icons'

function TaskCardBoard({editor, idx, data, updateTask, deleteTask}) {

    const [ colIdx, taskIdx ] = idx;

    if (editor) {
        return(
            <Card className="mb-3">
                <ButtonGroup size="sm" className="btn-rtop" aria-label="Basic example">
                    <Button variant="outline-secondary">
                        #{data.id}
                    </Button>
                    <Button onClick={() => {deleteTask(colIdx, data.id)}} variant="outline-secondary" id="delete-task">
                        <FontAwesomeIcon icon={faTrash}  />
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
                            value={data.text}
                            name="text"
                            onChange={(e) => {updateTask(e, colIdx, data.id)}}
                        />
                    </FloatingLabel>
                    <Form.Label className="text-end my-2">{data.progress}%</Form.Label>
                    <Form.Range name="progress" onChange={(e) => {updateTask(e, colIdx, data.id)}} value={data.progress}/>
                </Card.Body>
            </Card>
        )
    }else{
        return(
            <Card className="mb-3">
                <Card.Body className="mt-3 mb-0">
                    <Card.Subtitle className="mb-2 text-muted" >
                        {data.text}
                    </Card.Subtitle >
                    <ProgressBar now={data.progress} label={`${data.progress}%`} />
                </Card.Body>
            </Card>
        )
    }

}

export default TaskCardBoard;