
let userId = 0;

export const userData = (id) => {
    return {
        "id": id,
        "email": "",
        "username": "",
        "password": "",
        "last_name": "",
        "first_name": "",
        "middle_name": "",
        "group": 0,
        "skills": [],
        "boards": [],
        "member_boards": [],
        "create_date":getСurrentDate(),
        "update_date":getСurrentDate(),
    }
}

function getСurrentDate(){
    const date = new Date();
    return (
        date.toLocaleDateString()
        + " " +
        date.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false })
    )
}