import React from "react"
import { Card, ListGroup, ListGroupItem, Button, Stack, Badge } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faLandmark, faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { baseSkills } from "../../model/usersData"

function UserProfilePage() {

    return(
        <Card className="border-0 mb-3">
            <Card.Header 
                className="user-hero card-img" 
                style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(/user-bg.webp)'}}
            >
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
                <ListGroupItem>
                    <Card.Text>
                        <FontAwesomeIcon className="me-2" icon={faLightbulb}/>
                        Навыки
                    </Card.Text>
                    <Badge className="ms-1" bg="primary">JavaScript</Badge> 
                    <Badge className="ms-1" bg="primary">JavaScript</Badge> 
                    <Badge className="ms-1" bg="primary">JavaScript</Badge> 
                    <Badge className="ms-1" bg="primary">JavaScript</Badge> 
                    <Badge className="ms-1" bg="primary">JavaScript</Badge> 
                    <Badge className="ms-1" bg="primary">JavaScript</Badge> 
                    <Badge className="ms-1" bg="primary">JavaScript</Badge> 
                </ListGroupItem>
            </ListGroup>
            <Card.Footer>
                <Stack gap={2} direction="horizontal" className="d-none">
                    <Button variant="success rounded-pill me-auto">Редактировать</Button>
                    <Button variant="outline-secondary rounded-pill">Выход</Button>
                </Stack>
            </Card.Footer>
        </Card>
    )
}
export default UserProfilePage;