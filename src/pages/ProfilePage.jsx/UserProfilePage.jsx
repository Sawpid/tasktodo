import React from "react"
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Button, Stack, Badge, Nav, ButtonGroup, Dropdown, ProgressBar, DropdownButton, FormControl } from "react-bootstrap"
import NavBarProfile from "../../components/profile/NavBarProfile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLandmark, faGraduationCap, faEnvelope, faArrowDownShortWide, faArrowUpShortWide, faStar } from '@fortawesome/free-solid-svg-icons'

function UserProfilePage() {

    return(
        <>
            <NavBarProfile/>

            <Container  className="py-5 mt-5">
                <Row>
                    <Col lg={4} >
                        <Card className="border-0 mb-3">
                            <Card.Header 
                                className="user-hero card-img" 
                                style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(/user-bg.webp)'}}>
                                <div className="text-center position-relative">
                                    <img className="img-user-lg" src="/user-placeholder.png" />
                                    <Button variant="dark" className="username-badge position-absolute">@User</Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Вернигора Сергей Михайлович</Card.Title>
                                <Card.Text>
                                Работа в роли разработчика в Agile-команде. Доработка и разработка новых функциональных возможностей фронт-системы. 
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <FontAwesomeIcon className="me-2" icon={faLandmark}/>
                                    Московский политехнический университет
                                </ListGroupItem>
                                <ListGroupItem>
                                    <FontAwesomeIcon className="me-2" icon={faGraduationCap}/>
                                    Информатика и вычислительная техника
                                </ListGroupItem>
                                <ListGroupItem>
                                    <FontAwesomeIcon className="me-2" icon={faEnvelope}/>
                                    shipoopi159@gmail.com
                                </ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Text>Навыки</Card.Text>
                                <Badge className="m-1" bg="primary">JavaScript</Badge> 
                                <Badge className="m-1" bg="primary">JavaScript</Badge> 
                                <Badge className="m-1" bg="primary">JavaScript</Badge> 
                                <Badge className="m-1" bg="primary">JavaScript</Badge> 
                                <Badge className="m-1" bg="primary">JavaScript</Badge> 
                                <Badge className="m-1" bg="primary">JavaScript</Badge> 
                            </Card.Body>
                            <Card.Footer>
                                <Stack gap={2} direction="horizontal" >
                                    <Button variant="success rounded-pill me-auto">Редактировать</Button>
                                    <Button variant="outline-secondary rounded-pill">Выход</Button>
                                </Stack>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={8} >
                        <Nav fill variant="pills" className="nav-pills mb-3" defaultActiveKey="#">
                            <Nav.Item>
                                <Nav.Link href="#">Проекты</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Группа</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Настройки</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <div>
                            <Stack gap={2} direction="horizontal" className="mb-3" >
                                <ButtonGroup className="ms-auto">
                                    <DropdownButton title="Последнее обновление" bsPrefix="dropdown-toggle btn btn-secondary btn-first-pill" >
                                        <Dropdown.Item eventKey="1">Последнее обновление</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Мои проекты</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Проекты в качестве участника</Dropdown.Item>
                                    </DropdownButton>
                                    <Button variant="secondary" className="btn-last-pill">
                                        <FontAwesomeIcon className="me-2" icon={faArrowDownShortWide}/>
                                    </Button>
                                </ButtonGroup>
                            </Stack>
                            <Row>
                                <Col className="col-12 mb-3" sm={6} xl={4}>
                                    <Card className="border-0">
                                        <div className="position-relative">
                                            <Card.Img className="card-img" variant="top" src="/user-bg.webp" />
                                            <Card.ImgOverlay className="p-0">
                                                <Stack gap={2} direction="horizontal" className="p-3">
                                                    <Badge pill bg="light" text="dark">В разработке</Badge>
                                                    <Badge pill bg="dark" className="ms-auto bg-transparent">
                                                        <FontAwesomeIcon className="me-2" icon={faStar}/>
                                                        100
                                                    </Badge>
                                                </Stack>
                                            </Card.ImgOverlay>
                                            <div className="position-absolute bottom-0 w-100">
                                                <Button variant="dark" className="username-badge rounded-0 w-100">#board</Button>
                                                <ProgressBar className="rounded-0" style={{height:"5px"}} now={60} />
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Card.Text>
                                                Система заточена под работу с документами, и именно на это ставит ограничение на бесплатном тарифе: до 100 задач, созданных по готовым формам.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}
export default UserProfilePage;