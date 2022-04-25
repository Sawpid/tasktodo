import React from "react"
import { Col, Row, Button, Card } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ReactSortable } from "react-sortablejs"
import TaskCardBoard from "./TaskCardBoard"

function BodyBoard({ isEdit=false, data=[], setData }) {
    return(
        <Row>
            {data.map((item, idx) => (
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
                        <ReactSortable 
                            tag={Card.Body}
                            group="task"
                            handle="#move-task"
                            list={item.data}
                            setList={(currentList) => {
                                setData((sourceList) => {
                                    const tempList = [...sourceList];
                                    const _blockIndex = [...[idx]];
                                    const lastIndex = _blockIndex.pop();
                                    const lastArr = _blockIndex.reduce(
                                      (arr, i) => arr[i]["data"],
                                      tempList
                                    );
                                    lastArr[lastIndex]["data"] = currentList;
                                    return tempList;
                                })
                            }}
                        >
                            {item.data.map((task) => (
                                <TaskCardBoard key={task.id} editor={isEdit} {...task} />
                            ))}
                        </ReactSortable>
                    </Card>
    
                </Col>
            ))}
        </Row>
    )
}
export default BodyBoard;