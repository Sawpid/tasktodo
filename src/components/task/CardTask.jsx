import React from "react"
import { Card, Button, Badge, ButtonGroup, Form, FloatingLabel, Stack, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDownLeftRight, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import TaskDetailBoard from "./DetailTaskModal.jsx"
import { baseTags, sampleMembers } from "../../model/boardData"

function CardTask({readonly, idx, data, updateTask, deleteTask, hidden}) {

    const [ colIdx, _taskIdx ] = idx;

    return(
        <TaskDetailBoard className={`card mb-3 ${hidden && "d-none"}`} data={data} deleteTask={deleteTask} updateTask={updateTask} idx={idx} >
            {readonly &&
            <ButtonGroup size="sm" className="btn-rtop">
                <Button variant="outline-secondary">
                    #{data.id}
                </Button>
                <Button variant="outline-secondary" id="move-task">
                    <FontAwesomeIcon icon={faArrowsUpDownLeftRight}/>
                </Button>
            </ButtonGroup>}
            <Card.Body className="mt-3 mb-0">
                <Card.Subtitle className="mb-2 text-muted" >
                    {data.name}
                </Card.Subtitle >
                <div className="mb-3">
                {data.tags.map((tag) => (
                    baseTags[tag] !== undefined &&
                    <Badge key={tag} pill bg={baseTags[tag].color} className="task-badge">
                        {baseTags[tag].label}
                    </Badge>
                ))}
                </div>
                <ProgressBar 
                    style={{"height":"3px"}}
                    now={data.progress} 
                />
            </Card.Body>
            <Card.Footer className="text-muted p-2">
                <Stack direction="horizontal" gap={3}>
                    <small className="text-muted">{data.update_date}</small>
                    <img className="ms-auto img-user-sm" src="/user-placeholder.png" />
                </Stack>
            </Card.Footer>
        </TaskDetailBoard>
    )

}

export default CardTask;