import React from "react"
import { Row } from "react-bootstrap"
import {useBoard} from "../../hooks/board.hook"
import TaskCardBoard from "./TaskCardBoard"
import ColCardBoard from "./ColCardBoard"

function BodyBoard({ isEdit=false }) {

    const {
        addTask,
        moveTask,
        deleteTask, 
        updateTask,
        boardData,
    } = useBoard();

    console.log(boardData)

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
                        
                        <TaskCardBoard 
                            key={task.id} 
                            editor={isEdit} 
                            idx={[colIdx, taskIdx]} 
                            data={task}
                            updateTask={updateTask}
                            deleteTask={deleteTask}
                        />

                    ))}

                </ColCardBoard>

            ))}
        </Row>
    )
}
export default BodyBoard;