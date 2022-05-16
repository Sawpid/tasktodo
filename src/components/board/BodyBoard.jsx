import React from "react"
import { Row } from "react-bootstrap"
import {useBoard} from "../../hooks/board.hook"
import CardTask from "../task/CardTask"
import ColCardBoard from "./ColCardBoard"

function BodyBoard({ isEdit=false, filter }) {

    const {
        addTask,
        moveTask,
        deleteTask, 
        updateTask,
        boardData,
    } = useBoard();



    return(
        <Row>
            {boardData.map((item, colIdx) => (
                <ColCardBoard
                    key={item.id}
                    editor={isEdit}
                    idx={colIdx}
                    data={item}
                    setData={moveTask}
                    addTask={addTask}
                >
                    {item.data.map((task, taskIdx) => (
                        
                        <CardTask
                            key={task.id} 
                            readonly={isEdit} 
                            idx={[colIdx, taskIdx]} 
                            data={task}
                            updateTask={updateTask}
                            deleteTask={deleteTask}
                            hidden={task.hidden}
                        />

                    ))}

                </ColCardBoard>

            ))}
        </Row>
    )
}
export default BodyBoard;