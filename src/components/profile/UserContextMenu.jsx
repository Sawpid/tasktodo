import React from "react"
import { Link } from "react-router-dom";
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
                <Dropdown.Item as={Link} to="/user">
                    <FontAwesomeIcon className="me-3" icon={faUser}/>
                    Профиль
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/user/settings">
                    <FontAwesomeIcon className="me-3" icon={faGear}/>
                    Настройки
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/">
                    <FontAwesomeIcon className="me-3" icon={faArrowRightFromBracket}/>
                    Выйти
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default UserContextMenu;