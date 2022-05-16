import React from "react"
import { Container } from "react-bootstrap"
import BodyBoard from "../../components/board/BodyBoard"
import HeadBoard from "../../components/board/HeadBoard"
import NavBarBoard from "../../components/board/NavBarBoard"
import {useBoard} from "../../hooks/board.hook"
import "./BoardStyle.css"

function BoardPage() {
    const { editBoard, toggleEditBoard, boardFilter, setFilter, setFilterBoard } = useBoard();

    return(
        <>
            <NavBarBoard/>

            <Container className="py-5 mt-5">

                <HeadBoard 
                    isEdit={editBoard} 
                    setEdit={toggleEditBoard} 
                    filter={boardFilter}
                    setFilter={setFilterBoard}
                />

                <BodyBoard 
                    isEdit={editBoard}
                    filter={boardFilter}
                />

            </Container>
        </>
    )
}
export default BoardPage;