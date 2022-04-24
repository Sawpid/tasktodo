import React, {useState} from "react"
import { Col, Row, Button, Card } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { devBoardData } from "../../model/boardData"
import TaskCardBoard from "./TaskCardBoard"

function BodyBoard() {
    const [boardData, setBoardData] = useState(devBoardData)
    return(
        <Row>
            {boardData.map((item, idx) => (
                <Col key={item.id} className="col-12" lg={3}>

                    <Card>
                        <Card.Header as="h5" >
                            <div className="d-flex">
                                <Card.Title>{item.name}</Card.Title>
                            {item.type == 1 &&
                                <Button className="btn-sm ms-auto shadow-btn rounded-circle" variant="success">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                }
                            </div>
                            <small className="text-muted">{item.description}</small>
                        </Card.Header>
                        <Card.Body>
                            {item.data.map((task) => (
                                <TaskCardBoard key={task.id} {...task} />
                            ))}
                        </Card.Body>
                    </Card>
    
                </Col>
            ))}
        </Row>
    )
}
export default BodyBoard;