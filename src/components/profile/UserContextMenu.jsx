import React from "react"
import { Dropdown } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function UserContextMenu() {
    return(
        <Dropdown>
            <Dropdown.Toggle variant="btn" bsPrefix="p-1">
                <img className="d-flex img-user-md shadow-btn" src="/user-placeholder.png" />
            </Dropdown.Toggle>

            <Dropdown.Menu align="end" className="pt-0 mx-0 rounded-3 shadow overflow-hidden">
                <Dropdown.Header>Вы вошли как @{"user"}</Dropdown.Header>
                <Dropdown.Item href="#/action-1">
                    <FontAwesomeIcon className="me-3" icon={faUser}/>
                    Профиль
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                    <FontAwesomeIcon className="me-3" icon={faGear}/>
                    Настройки
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">
                    <FontAwesomeIcon className="me-3" icon={faArrowRightFromBracket}/>
                    Выйти
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default UserContextMenu;