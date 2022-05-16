import React, {useContext} from "react"
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { LoginContext } from "../../hooks/context.hook";

function UserContextMenu() {
    const authContext = useContext(LoginContext)
    const username = authContext.username
    return(
        <Dropdown>
            <Dropdown.Toggle variant="btn" bsPrefix="p-1">
                <img className="d-flex img-user-md shadow-btn" src="/user-placeholder.png" />
            </Dropdown.Toggle>

            <Dropdown.Menu align="end" className="pt-0 mx-0 rounded-3 shadow overflow-hidden">
                <Dropdown.Header>Вы вошли как @{username}</Dropdown.Header>
                <Dropdown.Item as={Link} to={`/${username}`}>
                    <FontAwesomeIcon className="me-3" icon={faUser}/>
                    Профиль
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={`/${username}/settings`}>
                    <FontAwesomeIcon className="me-3" icon={faGear}/>
                    Настройки
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/auth/logout">
                    <FontAwesomeIcon className="me-3" icon={faArrowRightFromBracket}/>
                    Выйти
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default UserContextMenu;