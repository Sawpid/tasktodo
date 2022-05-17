import React from "react"
import { Link, useOutlet, useLocation } from "react-router-dom";
import { Container, Row, Col, Nav, Card, ListGroup, Toast } from "react-bootstrap"
import NavBarProfile   from "../../components/profile/NavBarProfile";
import CardUserProfile from "../../components/profile/CardUserProfile";
import ToastUi from "../../components/ui/ToastUi";

function UserProfilePage() {

    const loc = useLocation()
    const locPath = loc.pathname.split("/")
    const outlet = useOutlet()

    return(
        <>
            <NavBarProfile/>

            <Container  className="py-5 mt-5">

                <Row>

                    <Col lg={4} >
                        {locPath[2] === "settings"
                        ?<Card className="mb-3">
                            <Card.Header className="h4">Настройки</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item action>Основные</ListGroup.Item>
                                <ListGroup.Item action>Проекты</ListGroup.Item>
                                <ListGroup.Item action>Безопасность</ListGroup.Item>
                            </ListGroup>
                            <Card.Footer className="text-muted"></Card.Footer>
                        </Card>
                        :<CardUserProfile />
                        }
                    </Col>

                    <Col lg={8} >
                        <Nav fill variant="pills" className="nav-lg mb-3" activeKey={locPath[2]} defaultActiveKey="project">
                            <Nav.Item>
                                <Nav.Link as={Link} to="project" href="project">Проекты</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="groups" href="groups">Группы</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="settings" href="settings">Настройки</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {outlet}
                    </Col>

                </Row>

            </Container>

            <ToastUi/>
        </>
    )
}
export default UserProfilePage;