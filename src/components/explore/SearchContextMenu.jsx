import React from "react"
import { Dropdown, FormControl } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchContextMenu() {
    return(
        <Dropdown>
            <Dropdown.Toggle variant="link" bsPrefix="text-light p-1 px-2" >
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-0 rounded-3 shadow overflow-hidden">
            <div>
                <FormControl
                autoFocus
                className="m-2 w-auto"
                placeholder="Введите для поиска..."
                />
                <ul className="list-unstyled">
                    <Dropdown.Item eventKey="1" active>Все проекты</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Мои проекты</Dropdown.Item>
                </ul>
            </div>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default SearchContextMenu;