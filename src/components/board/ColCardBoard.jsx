import React from "react"
import { Col, Button, Card } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ReactSortable } from "react-sortablejs"

function ColCardBoard({children, editor, idx, data, setData, addTask }) {

    // console.log(data)
    return (
        <Col className="col-12" lg={3}>

            <Card>

                <Card.Header as="h5" >

                    <div className="d-flex">
                        <Card.Title>{data.name}</Card.Title>
                    {(data.type == 1 && editor) &&
                        <Button 
                            onClick={() => {addTask(idx)}} 
                            className="btn-sm ms-auto shadow-btn rounded-circle" 
                            variant="success"
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                        }
                    </div>

                    <small className="text-muted">{data.description}</small>

                </Card.Header>

                <ReactSortable 
                    tag={Card.Body}
                    group="task"
                    handle="#move-task"
                    list={data.data}
                    setList={(currentList) => {
                        setData(currentList, idx)
                    }}
                >
                    {children}
                </ReactSortable>
            </Card>
    
        </Col>
    )
}
export default ColCardBoard;