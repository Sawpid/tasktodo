import React from "react"
import { Container } from "react-bootstrap"
import BodyBoard from "../../components/board/BodyBoard"
import HeadBoard from "../../components/board/HeadBoard"
import NavBarBoard from "../../components/board/NavBarBoard"
import {useBoard} from "../../hooks/board.hook"
import "./BoardStyle.css"

function BoardPage() {
    const {
        editBoard, 
        toggleEditBoard,
        boardData, 
        setBoardData,
    } = useBoard();

    return(
        <>
            <NavBarBoard/>

            <Container className="py-5 mt-5">

                <HeadBoard 
                    isEdit={editBoard} 
                    setEdit={toggleEditBoard} 
                />

                <BodyBoard 
                    isEdit={editBoard}
                    data={boardData} 
                    setData={setBoardData} 
                />

            </Container>
        </>
    )
}
export default BoardPage;