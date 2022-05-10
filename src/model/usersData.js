
let skillsId = 0;

export const userData = (id) => {
    return {
        "id": id,
        "email": "",
        "username": "",
        "password": "",
        "last_name": "",
        "first_name": "",
        "middle_name": "",
        "company": "",
        "education": "",
        "website": "",
        "group": 0,
        "skills": [],
        "boards": [],
        "member_boards": [],
        "star_boards": [],
        "create_date": getСurrentDate(),
        "update_date": getСurrentDate(),
    }
}

export const baseSkills = [
    { value: skillsId++, label: 'JavaScript', color: 'primary' },
    { value: skillsId++, label: 'JQuery', color: 'dark' },
    { value: skillsId++, label: 'React', color: 'info' },
    { value: skillsId++, label: 'Vue.js', color: 'success' },
    { value: skillsId++, label: 'Nuxt.js', color: 'success' },
    { value: skillsId++, label: 'AngularJS', color: 'danger' },
    { value: skillsId++, label: 'HTML', color: 'danger' },
    { value: skillsId++, label: 'CSS', color: 'primary' },
    { value: skillsId++, label: 'UI/UX', color: 'primary' },
    { value: skillsId++, label: 'Дизайн', color: 'primary' },
    { value: skillsId++, label: 'Frontend', color: 'light' },

    { value: skillsId++, label: 'Java', color: 'light' },
    { value: skillsId++, label: 'Scala', color: 'danger' },
    { value: skillsId++, label: '.NET Framework', color: 'primary' },
    { value: skillsId++, label: 'PHP', color: 'info' },
    { value: skillsId++, label: 'CodeIgniter', color: 'danger' },
    { value: skillsId++, label: 'Slim Framework', color: 'success' },
    { value: skillsId++, label: 'Laravel', color: 'danger' },
    { value: skillsId++, label: 'Node.js', color: 'success' },
    { value: skillsId++, label: 'C Sharp', color: 'success' },
    { value: skillsId++, label: 'Go Lang', color: 'info' },
    { value: skillsId++, label: 'Python', color: 'info' },
    { value: skillsId++, label: 'Django', color: 'dark' },
    { value: skillsId++, label: 'Flask', color: 'dark' },
    { value: skillsId++, label: 'Backend', color: 'dark' },
]

function getСurrentDate(){
    const date = new Date();
    return (
        date.toLocaleDateString()
        + " " +
        date.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false })
    )
}