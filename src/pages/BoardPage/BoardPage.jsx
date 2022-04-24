import React from "react"
import { Container } from "react-bootstrap"
import BodyBoard from "../../components/board/BodyBoard"
import HeadBoard from "../../components/board/HeadBoard"
import NavBarBoard from "../../components/board/NavBarBoard"
import "./BoardStyle.css"

function BoardPage() {
    return(
        <>
            <NavBarBoard/>
            <Container className="py-5 mt-5">
                <HeadBoard/>
                <BodyBoard />
            </Container>
        </>
    )
}
export default BoardPage;