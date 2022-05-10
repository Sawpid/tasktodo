import React from "react"
import { Link, useLocation } from "react-router-dom";
import { Row, Col, Card, Button, Stack, Badge, Nav, ButtonGroup, Dropdown, ProgressBar, DropdownButton, FormControl } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faCalendarDays, faHome, faUserCheck, faArrowDownShortWide, faStar } from '@fortawesome/free-solid-svg-icons'

function ProjectListProfile() {

    const loc = useLocation()
    const locPath = loc.pathname.split("/")

    return(
        <div>
            <Stack gap={2} direction="horizontal" className="mb-3">
                <Nav fill variant="pills" className="nav-sm" defaultActiveKey="home" activeKey={locPath[3]}>
                    <Nav.Item>
                        <Nav.Link as={Link} to="home" href="home">
                            <FontAwesomeIcon  icon={faHome}/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="member" href="member">
                            <FontAwesomeIcon  icon={faUserCheck}/>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="star" href="star">
                            <FontAwesomeIcon  icon={faStar}/>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <ButtonGroup className="ms-auto">
                    <DropdownButton title="Последнее обновление" bsPrefix="dropdown-toggle btn btn-secondary btn-first-pill" >
                        <Dropdown.Item eventKey="1">
                            <FontAwesomeIcon className="me-2" icon={faStar}/>
                            Популярность
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                            <FontAwesomeIcon className="me-2" icon={faCalendarDays}/>
                            Дата обновления
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                            <FontAwesomeIcon className="me-2" icon={faCalendarCheck}/>
                            По готовности
                        </Dropdown.Item>
                    </DropdownButton>
                    <Button variant="secondary" className="btn-last-pill">
                        <FontAwesomeIcon className="me-2" icon={faArrowDownShortWide}/>
                    </Button>
                </ButtonGroup>
            </Stack>
            <Row>
                { [0,0,0, 0,0].map( i =>
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
                                <Button as={Link} to="/user/board" variant="dark" className="username-badge rounded-0 w-100">#board</Button>
                                <ProgressBar className="rounded-0" style={{height:"5px"}} now={60} />
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Text>
                                Система заточена под работу с документами, и именно на это ставит ограничение на бесплатном тарифе: до 100 задач, созданных по готовым формам.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>
        </div>
    )
}
export default ProjectListProfile;